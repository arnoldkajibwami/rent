import React from "react";
import Cartitems from "./Cartitems";
import './home.css';
import Aboutcomponent from "./Aboutcomponent";
import { NavLink, useNavigate } from "react-router-dom";
import Contactcontent from "./Contactcontent";
import WhatsappPop from "./WhatsappPop";
import SearchBar from "./SearchBar";
import HomeCard from "./HomeCard"

export default function Home() {
    const navigate = useNavigate()
    function BackToTOP() {
        window.scrollTo(0, 0)

        navigate("#")
    }
    return (
        <>
            <WhatsappPop />
            <section className=" Contentbg ">
                <div className="Navcontainer homecontents text-center">
                    <h4 style={{ color: "black" }}>Welcome to Quich Service</h4>
                    <h1 className="text-center">QUI CHERCHE, TROUVE!</h1>
                    <p className="text-center">Nous sommes la pour vous aider a satisfaire vos besoins selon vos moyen et ressources.</p>
                    <SearchBar />
                </div>


            </section>
            <section className="contentservice">
                <Aboutcomponent />
                <div className="container">
                    <h2 className="text-center mb-2">Some of how houses</h2>
                    {/* <Cartitems /> */}
                    <HomeCard/>
                    <div className="btnbuttonhome">
                        <div></div>
                        {/* <NavLink to="/items"><button onClick={BackToTOP} className="buttonapps mt-3" style={{ textAlign: "center" }}>More</button></NavLink> */}
                        <NavLink to="/items">
                            <button onClick={BackToTOP} class="cssbuttons-io-button"> Get started
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                                </div>
                            </button>
                        </NavLink>
                        <div></div>
                    </div>
                </div>
                <div style={{ marginTop: "100px", marginBottom: "100px" }}>
                    <Contactcontent />
                </div>

            </section>
        </>
    );
}