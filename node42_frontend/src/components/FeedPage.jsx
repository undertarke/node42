import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Videos, Sidebar } from ".";
import { useNavigate, useParams } from "react-router-dom";
import { AssuredWorkloadSharp } from "@mui/icons-material";
import { getVideoAPI, getVideoPageAPI, getVideoWithTypeAPI } from "../utils/fetchFromAPI";

const FeedPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  const { page } = useParams();
  const navigate = useNavigate()

  useEffect(() => {

    getVideoPageAPI(page ? page : 1).then(result => {
      setVideos(result) // { data , listPage}
    })


  }, [page]);

  let array = 5;
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

        <Videos videos={videos?.data} />

        {
          Array.from({ length: videos?.listPage }, (_, index) => {

            return <button onClick={() => navigate(`/${index + 1}`)} className="btn btn-sm btn-success mx-2"> {index + 1} </button>
          })
        }

      </Box>
    </Stack>
  );
};

export default FeedPage;
