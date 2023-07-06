import React from "react";
import Cartitems from "./Cartitems";
import Image1 from './images/house1.jpg'
import Image2 from './images/house2.jpg'
import Image3 from './images/house3.jpg'
import Image4 from './images/house4.jpg'
import './home.css'
import About from "./About";
import Aboutcomponent from "./Aboutcomponent";

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
                <Cartitems />
                <Aboutcomponent/>
            <section className=" container">
                <h1>search some card idea for houses in home page tomorrow and it will be the one for all items (houses)</h1>
            </section>
            </section>
        </>
    );
}