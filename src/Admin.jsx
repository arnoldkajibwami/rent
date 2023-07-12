import React, { useState } from "react";
import { useCart } from "react-use-cart";
import Breadcrumb from "./Breadcrumb";
import DataItems from "./Dataitems";


export default function Admin(props) {
    const {totalUniqueItems} =useCart()
    function addItems(){
        alert("Open www.auctux.com")
    }
    return (
        <>
             <Breadcrumb page={"Admin"} />
            <DataItems/>
            <div className="container text-center">
                <h5>Items: ({totalUniqueItems})</h5>
                   </div>
            <div className="container text-center">
                 <button onClick={addItems} className="buttonapp">Add Items</button>
            </div>
        </>

    );

}

