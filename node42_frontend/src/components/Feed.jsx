import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Videos, Sidebar } from "./";
import { useParams } from "react-router-dom";
import { AssuredWorkloadSharp } from "@mui/icons-material";
import { getVideoAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  const params = useParams();


  useEffect(()=>{
   
    getVideoAPI().then(result=>{
      console.log(result)
    })
    
  },[])





  useEffect(() => {



  }, [params.id]);

  useEffect(() => {
    let lstItem = [{ video_id: 1, video_name: "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI", channelDetail: "", marginTop: " ", thumbnail: "https://i.ytimg.com/vi/QU9c0053UAU/hq720.jpg", channelId: 1, channelTitle: "abc", channelId: 1, channelTitle: "JavaScript Mastery" },
    { video_id: 2, video_name: "The movies Iron man 4: 0.1 Hours", channelDetail: "", marginTop: " ", thumbnail: "https://i.ytimg.com/vi/t86sKsR4pnk/hq720.jpg", channelId: 1, channelTitle: "abc", channelId: 1, channelTitle: "JavaScript Mastery" }
    ];

    setVideos(lstItem)
  }, [])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2050 Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
