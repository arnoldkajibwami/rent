import React from 'react'
import "./Houselocation.css"
import Cartitems from './Cartitems'
import CartIbanda from './CardIbanda'
import CartBagira from './CardBagira'
import CartKadutu from './CartKadutu'

export default function HouseLocation() {
    return (
        <>
            <ul className="mains container">
                <li>
                    <input type="radio" name="tab" id="label-1" />
                    <label for="label-1" className="buttontest">Ibanda</label>
                    <div className="contents    ">

                        <div className="menu_content">
                            <h1>Ibanda Houses</h1>
                            <CartIbanda />
                        </div>
                    </div>
                </li>
                <li>
                    <input type="radio" name="tab" id="label-2" />
                    <label for="label-2" className="buttontest">Kadutu</label>
                    <div className="contents    ">

                        <div className="menu_content">
                            <h1>Kadutu Houses</h1>
                            <CartKadutu />
                        </div>
                    </div>
                </li>
                <li>
                    <input type="radio" name="tab" id="label-3" />
                    <label for="label-3" className="buttontest">Bagira</label>
                    <div className="contents    ">
                        <h1>Bagira Houses</h1>
                        <div className="menu_content">
                            <CartBagira />
                        </div>
                    </div>
                </li>
                <li>
                    <input type="radio" name="tab" id="label-4" checked />
                    <label for="label-4" className="buttontest">All</label>
                    <div className="contents    ">
                        <div className='d-flex justify-content-between' style={{ flexWrap: "wrap" }}>
                            <CartIbanda />
                            <CartBagira />
                            <CartKadutu />
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}