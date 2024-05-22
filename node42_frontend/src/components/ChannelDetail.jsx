import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      let lstItem = [{ video_id: 1, video_name: "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI", channelDetail: "", marginTop: " ", thumbnail: "https://i.ytimg.com/vi/QU9c0053UAU/hq720.jpg", channelId: 1, channelTitle: "abc", channelId: 1, channelTitle: "JavaScript Mastery" },
      { video_id: 2, video_name: "The movies Iron man 4: 0.1 Hours", channelDetail: "", marginTop: " ", thumbnail: "https://i.ytimg.com/vi/t86sKsR4pnk/hq720.jpg", channelId: 1, channelTitle: "abc", channelId: 1, channelTitle: "JavaScript Mastery" }];
      setVideos(lstItem)
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />

      </Box>

      <Box p={2} display="flex" style={{marginTop:150}}>
        <Box sx={{ mr: { sm: '100px' } }} />

        <Videos videos={videos} />

      </Box>
    </Box>
  );
};

export default ChannelDetail;
