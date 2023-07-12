import React from "react";
import Breadcrumb from "./Breadcrumb";
import Contactcontent from "./Contactcontent";

export default function Contact (){
    return(
        <>
            <Breadcrumb page={"Contact"} />
            <Contactcontent/>
        </>
    );  
}