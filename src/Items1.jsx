import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

export default function Items1(props) {

    const { addItem,
    } = useCart();

    return (
        <>
            <div className="container itembox cards" style={{ backgroundImage: `url(${props.image})` }}>
                <div class="card_content">
                    <span class="card_subtitle text-center">
                        <h6>{props.description}</h6>
                    </span>
                    <div className="card_description">
                        <h6 >{props.location}</h6>
                        <h6>{props.price}</h6>
                        <h6>Made By: {props.by}</h6>
                    </div>
                    <div className="buttoncard">
                        <button className="btn btn-success"
                            onClick={() => addItem(props.item)}>Contact</button>
                        <NavLink to="itemsdetails"><button className="btn btn-success">More Details</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

