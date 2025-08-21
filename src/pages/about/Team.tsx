import React from "react";
import Hero from "../../components/Hero";
import TeamContainer from "../../components/TeamContainer";

export const Team = () => {
    return (
        <>
            <Hero
                backGroundImageSrc={`url(/assets/team_hero.jpg)`}
                height={'60vh'}
                title={'Meet Our Team'}
            />
            <TeamContainer/>
        </>
    )
}

export default Team;