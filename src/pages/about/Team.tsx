import React from "react";
import Hero from "../../components/Hero";
import TeamContainer from "../../components/TeamContainer";

export const Team = () => {
    return (
        <>
            <Hero
                backGroundImageSrc={`url(${process.env.PUBLIC_URL}/assets/contact.jpg)`}
                height={'40vh'}
                title={'Meet Our Team'}
            />
            <TeamContainer/>
        </>
    )
}

export default Team;