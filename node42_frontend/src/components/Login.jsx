import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CardMedia } from "@mui/material";

import { Videos, ChannelCard } from ".";
import { loginAPI, loginFaceAPI } from "../utils/fetchFromAPI";
import ReactFacebookLogin from "react-facebook-login";


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

            loginAPI({ email, password }).then(result => {
              alert("Login thành công")

              localStorage.setItem("LOGIN_USER", result) // save token
              window.location.reload()

            }).catch(error => {
              alert(error.response.data.message)
            })
          }} type="button" className="btn btn-primary" >Login</button>

        </div>

        <ReactFacebookLogin

          appId="312062695290384"
          fields="name,email,picture"
          callback={(response) => {

            let newUser = {
              ...response,
              face_app_id: response.id
            }

            loginFaceAPI(newUser).then(result => {
              alert("Login thành công")

              localStorage.setItem("LOGIN_USER", result) // save token
              window.location.reload()

            })

          }}
        />

      </form>
    </div>
  </div>
};

export default Login;
