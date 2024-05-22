import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, DOMAIN_BE_IMG } from "../utils/constants";

const VideoCard = ({ video: { video_id, video_name, thumbnail, channelId, channelTitle } }) => {


  return <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
    <Link to={video_id ? `/video/${video_id}` : `/video/cV2gBU6hKfY`}>
      <CardMedia image={thumbnail} alt={video_name}
        sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={video_id ? `/video/${video_id}` : demoVideoUrl} >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {video_name?.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card >
}

export default VideoCard