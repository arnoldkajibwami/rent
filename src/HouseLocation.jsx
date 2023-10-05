import React from 'react'
import "./Houselocation.css"
import Cartitems from './Cartitems'

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
                        </div>
                    </div>
                </li>
                <li>
                    <input type="radio" name="tab" id="label-2" />
                    <label for="label-2" className="buttontest">Kadutu</label>
                    <div className="contents    ">

                        <div className="menu_content">
                            <h1>Kadutu Houses</h1>
                        </div>
                    </div>
                </li>
                <li>
                    <input type="radio" name="tab" id="label-3" />
                    <label for="label-3" className="buttontest">Bagira</label>
                    <div className="contents    ">
                        <h1>Bagira Houses</h1>
                        <div className="menu_content">

                        </div>
                    </div>
                </li>
                <li>
                    <input type="radio" name="tab" id="label-4" checked/>
                    <label for="label-4" className="buttontest">All</label>
                    <div className="contents    ">
                        <Cartitems/>
                    </div>
                </li>
            </ul>
        </>
    )
}