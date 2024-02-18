import React, { useEffect, useState } from 'react';
import Comments from './Comments';

const CommentsContainer = ({ videoid }) => {
  const [commentsThreads, setCommentsThreads] = useState([]);  
  useEffect(() => {
    if (videoid) {
      commentFetch();
    }
  }, [videoid]);

  const commentFetch = async () => {
    try {
      const data = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoid}&key=${process.env.REACT_APP_YT_API_KEY}&maxResults=10`);
      const json = await data.json();
      setCommentsThreads(json.items);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };
  
  if (!videoid) return null;

  return (
    <div className='mt-4 w-[850px]'>
      <span className='text-2xl font-bold'> Comments</span>
      {commentsThreads && commentsThreads.length > 0 && commentsThreads.map((c) => <Comments key={c.id} commentMap={c} />)}
    </div>
  );
};

export default CommentsContainer;
