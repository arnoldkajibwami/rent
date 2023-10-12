import React, { useState } from "react";
import { useCart } from "react-use-cart";
import Breadcrumb from "./Breadcrumb";
import DataItems from "./Dataitems";
import ReactModal from 'react-modal';


export default function Admin(props) {
    const { totalUniqueItems } = useCart()
    function addItems() {
        alert("Open www.Ngtech.com")
    }

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Breadcrumb page={"Admin"} />
            <DataItems />
            <div className="container text-center">
                <h5>Items: ({totalUniqueItems})</h5>
            </div>
            <div className="container text-center">
                <button onClick={setIsOpen} className="buttonapp">Add Items</button>
                <ReactModal
                    isOpen={isOpen}
                    className="popupmodel"
                    contentLabel="Popup Modal"
                >
                    <div className="cartitemspopup">
                        <div className="cards cardpopup" style={{ height: "530px" }}>
                            <div className="d-flex closebtn">
                                <div></div>
                                <button className="closebutton btn btn-danger" onClick={() => setIsOpen(false)}>
                                    <span>X</span>
                                </button>
                                <div></div>
                            </div>
                            <form className="forms">
                                <div className="group">
                                    <input placeholder="House name" type="text" required="" />

                                </div>
                                <div className="group">
                                    <input placeholder="location" type="email" id="email" name="email" required="" />

                                </div>
                                <div className="group">
                                    <input placeholder="Prix" type="email" id="email" name="email" required="" />

                                </div>
                                <div className="group">
                                    <input placeholder="image" type="link" id="email" name="email" required="" />

                                </div>
                                <div className="group">
                                    <textarea placeholder="Description" id="comment" name="comment" rows="5" required=""></textarea>

                                </div>
                                <button onClick={addItems} type="submit" className='btn btn-danger'>Add</button>
                            </form>
                        </div>

                    </div>
                </ReactModal>

            </div>

        </>

    );

}

