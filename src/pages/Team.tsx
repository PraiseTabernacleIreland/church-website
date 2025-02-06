import React from "react";
import Hero from "../components/Hero";
import TeamContainer from "../components/TeamContainer";

export const Team = () => {
    return (
        <>
            <Hero backGroundImageSrc={'url(/assets/contact.jpg)'} height={'40vh'}/>
            <TeamContainer/>
        </>
    )
}

export default Team;