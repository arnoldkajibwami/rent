import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './footer.css'

export default function Footer() {
    const navigate = useNavigate()
    function BackToTOP() {
        window.scrollTo(0, 0)

        navigate("#")
    }
    return (
        <>
            <section id="footer" className="mt-5 footer" style={{ color:"black", cursor:"pointer"}}>
                <div className="footer-legal text-center position-relative">
                    <div className="">
                        <div onClick={BackToTOP} className="m-3 backtotop" style={{fontWeight:"bold"}}>Up</div>
                        {/* <div className="copyright">
                            &copy; Copyright <strong><span><Link to="./home" className="Madename">BKVHOUSE</Link></span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Made by <Link to="https://auctux.com/" className="Madename">Auctux</Link>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}