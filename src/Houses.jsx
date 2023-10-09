import React from "react";
import Cartitems from "./Cartitems";
import Breadcrumb from "./Breadcrumb";
import HouseLocation from "./HouseLocation";
import WhatsappPop from "./WhatsappPop";


export default function Houses() {
    return (
        <>
            <WhatsappPop/>
            <Breadcrumb page={"Houses"} />
            {/* <Cartitems/> */}
            <HouseLocation />
        </>
    );
}
