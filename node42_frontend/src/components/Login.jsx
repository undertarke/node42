import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CardMedia } from "@mui/material";

import { Videos, ChannelCard } from ".";
import { loginAPI } from "../utils/fetchFromAPI";



const Login = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {

  }, []);

  return <div className="p-5 " style={{ minHeight: "100vh" }}>
    <div className=" d-flex justify-content-center">
      <form className="row g-3 text-white">
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>

        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">Password</label>
          <input className="form-control" id="pass" />
        </div>
        <div className="col-12">

          <button onClick={() => {
            let email = document.querySelector("#email").value
            let password = document.querySelector("#pass").value

            loginAPI({ email, password  }).then(result => {
              alert("Login thành công")

              localStorage.setItem("LOGIN_USER", result) // save token
              window.location.reload()
              
            }).catch(error => {
              alert(error.response.data.message)
            })
          }} type="button" className="btn btn-primary" >Login</button>

        </div>
      </form>
    </div>
  </div>
};

export default Login;
