import React from "react";
import Cartitems from "./Cartitems";
import './home.css'
import Aboutcomponent from "./Aboutcomponent";
import { NavLink } from "react-router-dom";
import ContactContainer from "./contactcontainer";

export default function Home() {
    return (
        <>
            <section className=" Contentbg">
                <div className="container">
                    <div className="Navcontainer homecontent">
                        <div className=" hometext">
                            <h6>Welcome to auctux rent website</h6>
                            <h1>Rent an appartment for your vacation</h1>
                            <div className="homebutton d-flex">
                                <button className="btn btn-danger button1">learn More</button>
                                <button className="btn button2">contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contentservice">
                <Aboutcomponent />
                <div className="container">
                    <h2 className="text-center mb-5">Some of how houses</h2>
                    <Cartitems />
                    <NavLink to="/items"><button className="btn btn-success" style={{ float: "right", right: "100px" }}>More</button></NavLink>
                </div>
                <div style={{marginTop:"100px",marginBottom:"100px"}}>
                    <ContactContainer />
                </div>
            </section>
        </>
    );
}