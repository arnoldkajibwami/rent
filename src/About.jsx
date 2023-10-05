import React from "react";
import Breadcrumb from "./Breadcrumb";
import Aboutcomponent from "./Aboutcomponent";
import TeamContainer from "./TeamContainer"
import WhatsappPop from "./WhatsappPop";

export default function About() {
    return (
        <>
            <WhatsappPop />
            <Breadcrumb page={"About"} />
            <Aboutcomponent />
            <TeamContainer />
        </>
    );
}

