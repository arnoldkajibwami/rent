import React from "react";
import Cartitems from "./Cartitems";
import Breadcrumb from "./Breadcrumb";

export default function Moreitemsna () {
    return(
        <>
         <Breadcrumb page={"Houses"} />
         <div className="mt-3 container">
                <input type="text"  name="text" id="Search" placeholder="Search"/>
            </div>
        <Cartitems/>
        </>
    );
}