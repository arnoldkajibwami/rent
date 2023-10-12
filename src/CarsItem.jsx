import React from "react";
import Cartitems from "./Cartitems";
import Breadcrumb from "./Breadcrumb";
import HouseLocation from "./HouseLocation";
import WhatsappPop from "./WhatsappPop";
import CarsitemsLocation from "./CarsItemsLocation";


export default function Carsitems() {
    return (
        <>
            <WhatsappPop/>
            <Breadcrumb page={"Cars"} />
            <CarsitemsLocation/>
        </>
    );
}
