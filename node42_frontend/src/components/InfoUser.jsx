import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CardMedia } from "@mui/material";

import { Videos, ChannelCard } from ".";

import ReactPlayer from "react-player";
import { DOMAIN_BE_IMG } from "../utils/constants";

const InfoUser = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const [avatar, setAvatar] = useState("http://dergipark.org.tr/assets/app/images/buddy_sample.png");

  const { id } = useParams();

  useEffect(() => {

  }, []);

  return <div className="p-5" style={{ minHeight: "95vh" }}>

    <nav>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Info</button>
        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Upload video</button>
      </div>
    </nav>
    <div className="tab-content mt-3" id="nav-tabContent">

      {/* update info user */}
      <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
        <div className="row">
          <div className="col-2">
            <img className="rounded-circle" src={avatar} width="100%" />

            <input className="form-control" type="file" id="formFile" />

          </div>
          <div className=" col-10">
            <form className="row g-3 text-white">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Full name</label>
                <input type="fullName" className="form-control" id="inputFullName" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword" />
              </div>


              <div className="col-12">
                <button type="button" className="btn btn-primary" >Update</button>
              </div>
            </form>

          </div>
        </div>

      </div>


      {/* upload video */}
      <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>
        <div className="row">
          <div className="col-2 text-white">
            <label htmlFor="inputEmail4" className="form-label">Thumbnail</label>
            <img src="https://cdn.icon-icons.com/icons2/495/PNG/512/video-clip-3_icon-icons.com_48391.png" width="100%" />
            <input className="form-control" type="file" id="formFile" />


          </div>
          <div className=" col-6">
            <form className="row g-3 text-white">
              <div className="col-md-12">
                <label htmlFor="inputEmail4" className="form-label">Video name</label>
                <input type="videoName" className="form-control" id="videoName" />
              </div>

              <div className="col-md-12">
                <label htmlFor="inputState" className="form-label">Description</label>
                <textarea type="description" className="form-control" id="description" >

                </textarea>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">Upload</button>
              </div>
            </form>

          </div>

          <div className="col-4 text-white">
            <label htmlFor="inputEmail4" className="form-label">Source</label>

            <input className="form-control" type="file" id="formFile" />
            <ReactPlayer url={`null`} className="react-player" controls />


          </div>
        </div>

      </div>

    </div>

  </div>
};

export default InfoUser;
