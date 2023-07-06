import React from "react";
import Cartitems from "./Cartitems";
import Breadcrumb from "./Breadcrumb";

export default function MoreItems () {
    return(
        <>
         <Breadcrumb page={"Houses"} />
        <Cartitems/>
        </>
    );
}