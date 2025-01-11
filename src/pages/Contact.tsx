import React from "react";
import ContactsContainer from "../components/ContactsContainer";
import Hero from "../components/Hero";

export const Contact = () => {
    return (
        <>
            <Hero backGroundImageSrc={'url(/assets/contact.jpg)'}/>
            <ContactsContainer/>
        </>
    )
}