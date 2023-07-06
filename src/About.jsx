import React from "react";
import Breadcrumb from "./Breadcrumb";
import Aboutcomponent from "./Aboutcomponent";

export default function About (){
    return(
        <>
             <Breadcrumb page={"Apropos"} />
            <Aboutcomponent/>
        </>
    );
}