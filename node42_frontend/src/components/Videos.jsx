import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  //test

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>

      {videos?.map((item, idx) => {

        return <Box key={idx}>
          {item.video_id && <VideoCard video={item} />}
     
        </Box>
      })}

      
    </Stack>
  );
}

export default Videos;
