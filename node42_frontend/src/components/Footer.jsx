import React, { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";


const Footer = () => {

    const showChat = (show) => {
        document.querySelector("#formChat").style.display = show;

    }
    const [drawer, setDrawer] = useState(0);
    const [user, setUser] = useState([]);
    const [toUserId, setToUserId] = useState(0);

    const [dataChat, setDataChat] = useState([]);

    useEffect(() => {
        setUser([{ userId: 1, full_name: "Cat", avatar: "https://i.pinimg.com/736x/05/22/91/0522916c52a9f92a59663d60b9198618.jpg" },
        { userId: 1, full_name: "Dog", avatar: "https://i.pinimg.com/236x/d6/10/01/d610015f4e959ec338c6a238ec0b6ea7.jpg" },
        { userId: 1, full_name: "Tony", avatar: "https://i.pinimg.com/474x/c2/4b/d8/c24bd877f8c51238ef47312b5ed35f7d.jpg" }
        ])

    }, [])


    return <div>

        <button className="open-button" style={{ bottom: 50 }} onClick={() => setDrawer(250)}><i className="fa fa-users" aria-hidden="true" /></button>

        {/* <button hidden className="open-button" onClick={() => showChat("block")}><i className="fa fa-comments" aria-hidden="true" /></button> */}

        <div className="chat-popup" id="formChat">
            <div className="chatHead">
                <p className="chatName" onClick={() => setDrawer(250)}><i className='fa fa-users'></i> List friend</p>
                <button type="button" className="chatClose" aria-label="Close" onClick={() => showChat("none")}><span aria-hidden="true">×</span></button>
            </div>
            <ol className="discussion" id="chat-noiDung">
                <li className="self">
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
                </li>


            </ol>
            <div className="chatBottom">
                <input id="txt-chat" className="sentText" type="text" placeholder="Your Text" style={{ flex: 1, border: '1px solid #0374d8', borderRadius: 20, padding: '0 20px' }} />

                <button id="btn-send" onClick={() => {

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