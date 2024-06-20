import React, { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";

import { io } from "socket.io-client";
import { getUserApi } from '../utils/fetchFromAPI';
// yarn add socket.io-client
// đối tượng socket client
const socket = io("ws://localhost:8081");

socket.on("server-mess", (message) => {
    document.querySelector("#chat-noiDung").innerHTML += `${message} <br/>`
})

const Footer = () => {

    const showChat = (show) => {
        document.querySelector("#formChat").style.display = show;

    }
    const [drawer, setDrawer] = useState(0);
    const [user, setUser] = useState([]);
    const [toUserId, setToUserId] = useState(0);

    const [dataChat, setDataChat] = useState([]);

    useEffect(() => {

        getUserApi().then(res => {
            setUser(res)
        })


    }, [])



    return <div>
<button onClick={()=>{
    socket.emit("join-room","")
}}>JOIN ROOM</button>
        <button className="open-button" style={{ bottom: 50 }} onClick={() => setDrawer(250)}><i className="fa fa-users" aria-hidden="true" /></button>

        {/* <button hidden className="open-button" onClick={() => showChat("block")}><i className="fa fa-comments" aria-hidden="true" /></button> */}

        <div className="chat-popup" id="formChat">
            <div className="chatHead">
                <p className="chatName" onClick={() => setDrawer(250)}><i className='fa fa-users'></i> List friend</p>
                <button type="button" className="chatClose" aria-label="Close" onClick={() => showChat("none")}><span aria-hidden="true">×</span></button>
            </div>
            <ol className="discussion" id="chat-noiDung">

                {/* <li className="self">
                    <div className="avatar">
                        <img src="https://amp.businessinsider.com/images/5947f16889d0e20d5e04b3d9-750-562.jpg" />
                    </div>
                    <div className="messages">
                        Hallo
                        <br />
                        <time dateTime="2009-11-13T20:14">2/2/2022 22:22</time>
                    </div>
                </li>


                <li className="other">
                    <div className="avatar">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHTEFMnih7ZgOPIZej2dclAphUeOhVR1OIFaPoYCOqm9fY1Fv7" />
                    </div>
                    <div className="messages">
                        Nope
                        <br />
                        <time dateTime="2009-11-13T20:00">2/2/2022 22:22</time>
                    </div>
                </li> */}


            </ol>
            <div className="chatBottom">
                <input id="txt-chat" className="sentText" type="text" placeholder="Your Text" style={{ flex: 1, border: '1px solid #0374d8', borderRadius: 20, padding: '0 20px' }} />

                <button id="btn-send" onClick={() => {
                    let message = document.querySelector("#txt-chat").value;

                    socket.emit("send-mess", message)

                }} type="button" className="sendbtn" aria-label="Close"><span aria-hidden="true"><i className="fa-regular fa-paper-plane"></i></span></button>
            </div>

        </div>



        <div style={{ width: drawer }} className='sidenav'>
            <a href="javascript:void(0)" className="closebtn" onClick={() => setDrawer(0)}>×</a>

            {user.map(item => {

                return <a href="#" onClick={() => {
                    showChat("block")
                }}>

                    <img width={50} src={item.avatar} /> {item.full_name}</a>
            })}
            <hr />

        </div>


    </div>
}

export default Footer