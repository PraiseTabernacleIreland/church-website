import React from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Container
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Church, Book, Favorite, Public, Group } from "@mui/icons-material";
import Hero from "../../components/Hero";

const beliefs = [
    {
        title: "Belief in God the Creator",
        description: "WE BELIEVE in God eternal, triune, almighty creator, sustainer and ruler of all creation.",
        icon: <Public sx={{ color: '#3B89C9' }} />
    },
    {
        title: "Belief in God the Father",
        description: "WE BELIEVE in God the Father, the author of creation and salvation.",
        icon: <Church sx={{ color: '#3B89C9' }} />
    },
    {
        title: "Belief in Jesus Christ",
        description: "WE BELIEVE in Jesus Christ the only Son of God the Father, true God who for the sake of humanity and its salvation, descended from heaven and became flesh; who was conceived by the Holy Spirit and was born by the virgin Mary; who lived on earth and was crucified, died and was buried, who rose from the dead and ascended to heaven where He is seated at the right hand of the Father.",
        icon: <Favorite sx={{ color: '#3B89C9' }} />
    },
    {
        title: "Belief in the Holy Spirit",
        description: "WE BELIEVE in the Holy Spirit, true God proceeding from the Father and the Son, who convicts the world of sin, righteousness and judgement and leads in all truth.",
        icon: <Book sx={{ color: '#3B89C9' }} />
    },
    {
        title: "Belief in the Bible",
        description: "WE BELIEVE that the Bible is the word of God, written by men as the Holy Spirit inspired them. We believe that it authoritatively proclaims the will of God and teaches us all that is necessary for salvation.",
        icon: <Book sx={{ color: '#3B89C9' }} />
    },
    {
        title: "Belief in Human Creation and Salvation",
        description: "WE BELIEVE that all human beings are created in the image of God; due to their sinful rebellion, this image is marred, that all have sinned before God and it is the will of God that all people should receive salvation through faith in Jesus Christ.",
        icon: <Group sx={{ color: '#3B89C9' }} />
    },
    {
        title: "Belief in Baptism of the Holy Spirit",
        description: "WE BELIEVE in the baptism in the Holy Spirit with the initial evidence of speaking in tongues as promised to all believers.",
        icon: <Favorite sx={{ color: '#3B89C9' }} />
    },
    {
        title: "Belief in Spiritual Gifts and Fruits",
        description: "WE BELIEVE in the manifestation of the gifts and fruit of the Spirit in the life of a Christian. We believe that a Christian should be a disciple of Jesus Christ living a consecrated and holy life.",
        icon: <Book sx={{ color: '#3B89C9' }} />
    },
    {
        title: "Belief in the Church",
        description: "WE BELIEVE that Jesus Christ is the Head of the Church which is constituted by the Holy Spirit and consists of born again believers. The Church is responsible for the proclamation and demonstration of the gospel and God’s will to all people. As a charismatic community they fellowship with and edify one another.",
        icon: <Church sx={{ color: '#3B89C9' }} />
    },
    {
        title: "Belief in Christian Ordinances",
        description: "WE BELIEVE that the believer’s baptism, by immersion and the Lord’s Supper are instituted by Jesus Christ to be observed by the Church.",
        icon: <Favorite sx={{ color: '#3B89C9' }} />
    },
    {
        title: "Belief in the Second Coming of Christ",
        description: "WE BELIEVE that at the time appointed by God, Jesus Christ will come to take away his Church.",
        icon: <Public sx={{ color: '#3B89C9' }} />
    },
    {
        title: "Belief in Final Judgment and Eternal Life",
        description: "WE BELIEVE in a day of judgement when Jesus Christ will judge the living and the dead. We believe in the resurrection of the body and eternal life for the righteous and eternal punishment for the wicked. We believe in the new heaven and the new earth where God will reign in glory.",
        icon: <Book sx={{ color: '#3B89C9' }} />
    }
];

const BeliefsPage = () => {
    return (
        <Box sx={{ background: "#f9f9f9", py: 8, px: 4 }}>
            <Container maxWidth="md">
                {/*<Typography variant="h3" sx={{ fontWeight: "bold", mb: 4, textAlign: "center", color: "#3B89C9" }}>*/}
                {/*    What We Believe*/}
                {/*</Typography>*/}
                {beliefs.map((belief, index) => (
                    <Accordion
                        key={index}
                        sx={{
                            backgroundColor: "#fff",
                            borderRadius: 2,
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            mb: 2,
                            ":before": {
                                display: "none",
                            },
                            ":hover": {
                                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                            }
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                            sx={{
                                backgroundColor: "#F9F9F9",
                                borderRadius: "8px",
                                "& .MuiAccordionSummary-content": {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                },
                            }}
                        >
                            {belief.icon}
                            <Typography sx={{ fontWeight: "bold", color: "black" }}>{belief.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: "#555", lineHeight: 1.8 }}>{belief.description}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
        </Box>
    );
};

export default BeliefsPage;

export const Beliefs = () => {
    return (
        <>
            <Hero backGroundImageSrc={`url(${process.env.PUBLIC_URL}/assets/about.jpg)`} height={'40vh'} title={'What We Believe'}/>
            <BeliefsPage/>
        </>
    )
}
