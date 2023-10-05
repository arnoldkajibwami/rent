import React from "react";
import Cartitems from "./Cartitems";
import Breadcrumb from "./Breadcrumb";
import Dataitems1 from "./Dataitems1";
import HouseLocation from "./HouseLocation";
import WhatsappPop from "./WhatsappPop";


export default function Moreitemsna() {
    return (
        <>
            <WhatsappPop/>
            <Breadcrumb page={"Houses"} />
            {/* <Cartitems/> */}
            {/* <Dataitems1/> */}
            <HouseLocation />
        </>
    );
}
