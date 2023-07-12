import React from "react";
import Breadcrumb from "./Breadcrumb";
import ContactContainer from "./contactcontainer";

export default function Contact (){
    return(
        <>
            <Breadcrumb page={"Contact"} />
            <ContactContainer />
        </>
    );  
}