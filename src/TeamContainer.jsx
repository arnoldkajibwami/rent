import React from "react";
import Team1 from "./images/house1.jpg"
import { Link } from "react-router-dom";

export default function TeamContainer() {
    return (
        <section id="team" className="team">
            <div className="container">

                <div className="section-header text-center">
                    <h2>Notre Equipe</h2>
                    <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
                </div>

                <div className="row gy-4">

                    <div className="col-lg-4 col-md-6 member">
                        <div className="member-img">
                            <img src={Team1} className="img-fluid" alt="" />
                            <div className="social">
                                <Link to="#"><i className="bi bi-twitter"></i></Link>
                                <Link to="#"><i className="bi bi-facebook"></i></Link>
                                <Link to="#"><i className="bi bi-instagram"></i></Link>
                                <Link to="#"><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>
                        <div className="member-info text-center">
                            <h4>Person 1</h4>
                            <span>Président-directeur général</span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 member">
                        <div className="member-img">
                            <img src={Team1} className="img-fluid" alt="" />
                            <div className="social">
                                <Link href="#"><i className="bi bi-twitter"></i></Link>
                                <Link href="#"><i className="bi bi-facebook"></i></Link>
                                <Link href="#"><i className="bi bi-instagram"></i></Link>
                                <Link href="#"><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>
                        <div className="member-info text-center">
                            <h4>Person 2 </h4>
                            <span>Directeur Administratif et Financier</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}