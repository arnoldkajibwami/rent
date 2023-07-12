import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./footer.css"

export default function Footer() {
    const navigate = useNavigate()
    function BackToTOP() {
        window.scrollTo(0, 0)

        navigate("#")
    }
    return (
        <>
            <section id="footer" className="mt-5 footer">

                <div className="footer-content position-relative">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 col-md-6">
                                <div className="footer-info">
                                    <NavLink style={{color:"white", textDecoration:"none"}} to="/adminpage"><h3>Rent</h3></NavLink>
                                    <p>
                                        Bukavu <br />
                                        Sud-kivu /RDC<br /><br />
                                        <strong>Phone:</strong> +243 999 888 777<br />
                                        <strong>Email:</strong> renthouse@gmail.com<br />
                                    </p>
                                    <div className="social-links d-flex mt-3">
                                        <NavLink href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-twitter"></i></NavLink>
                                        <NavLink href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-facebook"></i></NavLink>
                                        <NavLink href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-instagram"></i></NavLink>
                                        <NavLink href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-linkedin"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 footer-links">
                                <h4>Links</h4>
                                <ul>
                                    <li><NavLink to="/home " className="nav-links"> Home</NavLink></li>
                                    <li><NavLink to="/about " className="nav-links"> About</NavLink></li>
                                    <li><NavLink to="/items " className="nav-links"> Houses</NavLink></li>
                                    <li><NavLink to="/contact " className="nav-links"> Contact</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-legal text-center position-relative">
                    <div className="container">
                        <div onClick={BackToTOP} className="m-3 backtotop">Up</div>
                        <div className="copyright">
                            &copy; Copyright <strong><span><NavLink style={{color:"skyblue", textDecoration:"none"}} to="www.rent.netlify.app" className="Madename">AuctuxRent</NavLink></span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Made by <NavLink to="https://auctux.com/" style={{color:"skyblue", textDecoration:"none",fontWeight:"bold"}}  className="Madename">Auctux</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}