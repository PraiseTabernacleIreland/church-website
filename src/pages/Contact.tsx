import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import Typography from "@mui/material/Typography";

export const Contact = () => {
    return (
        <>
            <Hero backGroundImageSrc={'url(/assets/contact.jpg)'} height={'60vh'}/>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
                Contact Us Today
            </Typography>

            <ContactForm />
        </>
    )
}