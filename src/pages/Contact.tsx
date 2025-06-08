import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

export const Contact = () => {
    return (
        <>
            <Hero
                backGroundImageSrc={`url(/assets/contact.jpg)`}
                height={'40vh'}
                title="We’d Love to Hear From You"
                message={'Whether you have a question, need prayer, or simply want to connect, we’re here for you.'}
            />

            <ContactForm />
        </>
    )
}