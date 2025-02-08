import React from "react";
import Hero from "../../components/Hero";
import TeamContainer from "../../components/TeamContainer";

export const Team = () => {
    return (
        <>
            <Hero
                backGroundImageSrc={'url(/assets/contact.jpg)'}
                height={'30vh'}
                title={'Meet Our Team'}
            />
            <TeamContainer/>
        </>
    )
}

export default Team;