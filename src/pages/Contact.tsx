import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

export const Contact = () => {
    return (
        <>
            <Hero
                backGroundImageSrc={'url(/assets/contact.jpg)'}
                height={'30vh'}
                title="Contact Us Today"
            />
            {/*<Typography variant="h4" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>*/}
            {/*    Contact Us Today*/}
            {/*</Typography>*/}

            <ContactForm />
        </>
    )
}