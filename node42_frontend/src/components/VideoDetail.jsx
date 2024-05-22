import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let item = { video_id: 1, video_name: "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI", channelDetail: "", marginTop: " ", thumbnail: "https://i.ytimg.com/vi/QU9c0053UAU/hq720.jpg", source: "https://www.youtube.com/watch?v=ar3n9UAbalo", user :{ full_name: "abc", user_id: 1, channelTitle: "JavaScript Mastery",}, viewCount: 100, likeCount: 100 };

    setVideoDetail(item);

    let lstItem = [{ video_id: 1, video_name: "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI", channelDetail: "", marginTop: " ", thumbnail: "https://i.ytimg.com/vi/QU9c0053UAU/hq720.jpg", channelId: 1, channelTitle: "abc", channelId: 1, channelTitle: "JavaScript Mastery" },
    { video_id: 2, video_name: "The movies Iron man 4: 0.1 Hours", channelDetail: "", marginTop: " ", thumbnail: "https://i.ytimg.com/vi/t86sKsR4pnk/hq720.jpg", channelId: 1, channelTitle: "abc", channelId: 1, channelTitle: "JavaScript Mastery" }
    ];
    setVideos(lstItem)
  }, [id]);

  // if(!videoDetail) return <Loader />;

  if (videoDetail) {
    const { data, dataComment } = videoDetail;
    const { video_name, description, source, views, user, video_id } = videoDetail;

    return (
      <Box className="p-5" minHeight="95vh">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
              {/* video main */}
              <ReactPlayer url={source} className="react-player" controls />
              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                {video_name}
              </Typography>
              <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
                <div>
                  <i className="fa-solid fa-comments pe-3"></i>
                  <Link to={`/channel/${user.user_id}`}>
                    <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#fff" >
                      <b>
                        {user.full_name}
                      </b>
                      <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                    </Typography>
                  </Link>
                </div>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    <i className="far fa-eye me-2" />  {parseInt(views).toLocaleString()}
                  </Typography>
                  <div>
                    <a href="#!" className=" text-white rounded-start p-2 border" >
                      <i className="far fa-thumbs-up me-2" />
                      {parseInt(0).toLocaleString()}
                    </a>



                    <a href="#!" className=" text-white rounded-end p-2 border">
                      <i className="far fa-thumbs-down me-2" />
                    </a>
                  </div>
                </Stack>
              </Stack>

              <div className="text-white bg-dark rounded p-3" >
                {description}
              </div>



              {/* comment */}
              <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                  <div className="card border-0">
                    <div className="card-footer py-3 border-0 text-white" style={{ backgroundColor: '#000' }}>
                      <div className="d-flex flex-start w-100">
                        <img className="rounded-circle shadow-1-strong me-3" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width={40} height={40} />
                        <div className="form-outline w-100">
                          <textarea className="form-control text-white" id="textAreaExample" rows={4} style={{ background: '#000' }} defaultValue={""} />
                          <label className="form-label text-danger" htmlFor="textAreaExample">Validate</label>
                        </div>
                      </div>
                      <div className="float-end mt-2 pt-1">
                        <button type="button" className="btn btn-outline-light btn-sm me-3">Post comment</button>
                        <button type="button" className="btn btn-outline-secondary btn-sm">Cancel</button>
                      </div>
                    </div>

                    <div className="card-body text-white" style={{ backgroundColor: '#000' }}>

                  
                         <div className="d-flex flex-start ">

                          <img className="rounded-circle shadow-1-strong me-3" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width={60} height={60} />

                          <p className="mb-4 pb-2">
                            <h6 className="fw-bold text-white mb-1">
                              John
                            </h6>

                            hello

                            <div className=" d-flex justify-content-start ">
                              <a href="#!" className="d-flex align-items-center me-3 text-white">
                                <i className="far fa-thumbs-up me-2" />
                                <p className="mb-0">Like</p>
                              </a>
                              <a href="#!" className="d-flex align-items-center me-3 text-white">
                                <i className="far fa-comment-dots me-2" />
                                <p className="mb-0">Reply</p>
                              </a>

                            </div>
                          </p>
                        </div>
                    

                    </div>

                  </div>
                </div>
              </div>

            </Box>
          </Box>

          <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
            {/* list video random */}
            <Videos videos={videos} direction="column" />
          </Box>
        </Stack>
      </Box>
    );
  }


};

export default VideoDetail;
