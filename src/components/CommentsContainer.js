import React, { useEffect, useState } from 'react';
import Comments from './Comments';

const CommentsContainer = ({ videoid }) => {
  const [commentsThreads, setCommentsThreads] = useState([]); 
  const [repliesComments, setRepliesComments] = useState([]);
  
  useEffect(() => {
    if (videoid) {
      commentFetch();
    }
  }, [videoid]);

  const commentFetch = async () => {
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoid}&key=${process.env.REACT_APP_YT_API_KEY}&maxResults=10`);
    const json = await data.json();
    // console.log(json.items);
    setCommentsThreads(json.items);
    const replies = json.items.filter((e)=>e.replies)
    setRepliesComments(replies)
  };
  
  if (!videoid) return null;

  return (
    <div className='mt-10 w-[850px]'>
      {commentsThreads.map((c) => <Comments key={c.id} commentMap={c} />)}
    </div>
  );
};

export default CommentsContainer;
