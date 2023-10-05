import React from "react";
import Cartitems from "./Cartitems";
import './home.css'
import Aboutcomponent from "./Aboutcomponent";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Contactcontent from "./Contactcontent";
import Dataitems1 from "./Dataitems1";
import WhatsappPop from "./WhatsappPop";

export default function Home() {
    const navigate = useNavigate()
    function BackToTOP() {
        window.scrollTo(0, 0)

        navigate("#")
    }
    return (
        <>
            <WhatsappPop />
            <section className=" Contentbg">
                <div className="container">
                    <div className="Navcontainer homecontent">
                        <div className=" hometext">
                            <h6>Welcome to auctux rent website</h6>
                            <h1>Rent an appartment for Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                                praesentium dolorem sequi eveniet magnam exercitationem dignissimos
                                soluta itaque aspernatur.</h1>
                            <div className="homebutton d-flex">
                                <NavLink to="/about"><button className="btn btn-danger button1">learn More</button></NavLink>
                                <NavLink to="/contact"><button className="btn button2">contact us</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contentservice">
                <Aboutcomponent />
                <div className="container">
                    <h2 className="text-center mb-2">Some of how houses</h2>
                    {/* <Cartitems /> */}
                    <Dataitems1 />
                    <div className="btnbuttonhome">
                        <div></div>
                        <NavLink to="/items"><button onClick={BackToTOP} className="buttonapps mt-3" style={{ textAlign: "center" }}>More</button></NavLink>
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