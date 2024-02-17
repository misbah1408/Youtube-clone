import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoTitles from "./VideoTitles";
import { YT_API } from "./utils/Constants";
import CommentsContainer from "./CommentsContainer";

const WatchPageContent = () => {
    const [searchParams] = useSearchParams();
    const [videosInfo, setVideosInfo] = useState();
    const videoID = searchParams.get("v");
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+videoID+"&key="+process.env.REACT_APP_YT_API_KEY);
                const json = await data.json();
                setVideosInfo(json.items[0])
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        fetchVideos();
        dispatch(closeMenu());
    }, [videoID]); 

    return (
        <div className="w-[913px] mt-6 ml-[5px] rounded-md ">
            <iframe
                className="rounded-xl"
                width="913"
                height="513"
                src={"https://www.youtube.com/embed/" + videoID}
                title="YouTube video player"
                frameBorder="0"
                allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
            <VideoTitles info={videosInfo} />
            <CommentsContainer videoid={videoID}/>
        </div>
    );
};

export default WatchPageContent;