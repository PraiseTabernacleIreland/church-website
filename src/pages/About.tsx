import React, {useState} from "react";
import Hero from "../components/Hero";
import {Box, Typography, Tabs, Tab, Grid} from "@mui/material";

// Tab Content Data
const tabContent = [
    {
        label: "Message from the Pastor",
        content: (
            <>
                <Box sx={{ position: 'relative' }}>
                    <img
                        src="/assets/gerard.jpg"
                        alt="Pastor"
                        style={{
                            float: 'left',
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            marginRight: 10
                        }}
                    />
                    <Typography variant="h6" paragraph sx={{textAlign: "justify", fontStyle: 'italic', fontSize: '1.2rem', marginBottom: 1 }}>
                        Welcome to Praise Tabernacle Apostolic Faith Mission’s website. I am Pastor Gerard T. Chimbganda and
                        I want to tell you that God is good all the time! I hope you find the information you need from our
                        website. Please feel free to call me directly or any of our board members or leaders.
                        We are an assembly of believers in the Lord Jesus Christ. Our church is a member of Apostolic Faith
                        Ministry (AFM) International, a global body of believers. By the grace the of God we planted our
                        church in Ireland in 2004 and have grown into a loving and giving Christian family of believers.
                        Part of the Great Commission is to go forth and preach the Good News of the gospel of Jesus Christ
                        and we have that vision both locally and nationally. We are working to establish new assemblies
                        across the island and striving to fan the flames of revival throughout Ireland. Building strong
                        leadership within the nation begins with strong local pastors and we are working to establish a
                        pastoral and missionary training facility to raise up ministers from within who are familiar with
                        the needs and challenges of our community and republic.
                        Jesus, the Son of the true and living God, gave His life to redeem your life and mine, and He was
                        raised from the dead so that we can live forever with Him. This is the Good News of the Gospel, the
                        message we share, and the reason we live. All are welcome to join us in this Great Commission and
                        living the abundant life given to us by Jesus our Lord and Savior.
                        Thank you for visiting our webpage. I hope to see in you in our services soon!

                    </Typography>
                    <Typography variant="h6" sx={{textAlign: "justify", fontWeight: 'bold', fontSize: '1rem' }}>
                        Sincerely,

                        Pastor Gerard T. Chimbganda
                    </Typography>
                </Box>

            </>
        ),
    },
    {
        label: "What we believe",
        content: (
            <>
                <Typography variant="body1" sx={{textAlign: "justify"}}>
                <ul style={{ listStyleType: 'disc' }}>
                        <li>WE BELIEVE in God eternal, triune, almighty creator, sustainer and ruler of all creation.</li>
                        <li>WE BELIEVE in God the Father, the author of creation and salvation.</li>
                        <li>WE BELIEVE in Jesus Christ the only Son of God the Father, true God who for the sake of humanity and its salvation, descended from heaven and became flesh; who was conceived by the Holy Spirit and was born by the virgin Mary; who lived on earth and was crucified, died and was buried, who rose from the dead and ascended to heaven where He is seated at the right hand of the Father.</li>
                        <li>WE BELIEVE in the Holy Spirit, true God proceeding from the Father and the Son, who convicts the world of sin, righteousness and judgement and leads in all truth.</li>
                        <li>WE BELIEVE that the Bible is the word of God, written by men as the Holy Spirit inspired them. We believe that it authoritatively proclaims the will of God and teaches us all that is necessary for salvation.</li>
                        <li>WE BELIEVE that all human beings are created in the image of God; due to their sinful rebellion, this image is marred, that all have sinned before God and it is the will of God that all people should receive salvation through faith in Jesus Christ.</li>
                        <li>WE BELIEVE in the baptism in the Holy Spirit with the initial evidence of speaking in tongues as promised to all believers.</li>
                        <li>WE BELIEVE in the manifestation of the gifts and fruit of the Spirit in the life of a Christian. We believe that a Christian should be a disciple of Jesus Christ living a consecrated and holy life.</li>
                        <li>WE BELIEVE that Jesus Christ is the Head of the Church which is constituted by the Holy Spirit and consists of born again believers. The Church is responsible for the proclamation and demonstration of the gospel and God’s will to all people. As a charismatic community they fellowship with and edify one another.</li>
                        <li>WE BELIEVE that the believer’s baptism, by immersion and the Lord’s Supper are instituted by Jesus Christ to be observed by the Church.</li>
                        <li>WE BELIEVE that at the time appointed by God, Jesus Christ will come to take away his Church.</li>
                        <li>WE BELIEVE in a day of judgement when Jesus Christ will judge the living and the dead. We believe in the resurrection of the body and eternal life for the righteous and eternal punishment for the wicked. We believe in the new heaven and the new earth where God will reign in glory.</li>
                    </ul>
                </Typography>
                <img
                    src="/assets/beliefs.jpg"
                    alt="Beliefs"
                    style={{maxWidth: "100%", borderRadius: 8, margin: "20px 0"}}
                />
            </>
        ),
    },
    {
        label: "Church History",
        content: (
            <>
                <Typography variant="body1" paragraph  sx={{ textAlign: "justify" }}>
                    Apostolic Faith Ministry has a long and distinguished history in the Body of Christ beginning in 1908 when a missionary team, led by John G. Lake, Thomas Hezmalhalch, and Jacob Lehman and their wives, came to South Africa. The first meeting of the Central Tabernacle Assembly in Bree Street, Johannesburg was on May 25, 1908 and is considered the beginning of AFM.
                    John G. Lake, a pentacostal evangelist, and Thomas Hezmalhach, a holiness preacher with roots in Azusa Street, came out of the Holiness Movement and the Zionist Movement of the late 1800s and early 1900s in America. Lake was particularly influenced by God’s healing power and became co-evangelist with Thomas Hezmalhalch around 1906 through an outreach in Zion City, Illinois. Together, they were inspired by God to launch mission trip to S.A.
                    Both Lake and Hezmalhach were very influenced by the teachings of Dr. Andrew Murray, who was part of the Holiness Movement birthed from a revival in 1860 in the Dutch Reformed Church. Other influences included the local Zionist Movement, which was preparation for pentacostal growth and in 1908, South Africa was ready for the pentecostal revelation brought by Lake and Hemalhach. The nation and AFM saw powerful church growth accompanied by signs and wonders.
                    In 1913, Lake and Hezmalhach left South Africa and AFM continued under self-government, spreading to Zimbabwe in 1915. It also believed AFM came to Gwanda that year by an AFM S.A. concert, Zacharias Manamela and AFM continues to expand across the African continent, Asia, Australia, Europe, and North and South America. In 1987, an international conference began as International Coordinating Council and was re-organized again in 1996 as AFM International.
                    The Lord opened the door in 2001 for Mrs. J. Chimbganda, widow of Pastor Chimbganda, to move from Zimbabwe to Ireland. Her family soon followed, including son Gerard T. Chimbganda. The Lord let them to plant a missionary AFM church in Ireland and the first meeting of Praise Tabernacle Apostolic Faith Ministries was held in July 2004. This church has experienced tremendous growth–starting with a meeting in a rented hotel basement, they grew to include a partnership with Drop Inn Ministries, opening a thrift store and moving into warehouse building. In 2015, the Lord directed Praise Tabernacle to move to the current location at St.
                </Typography>
                <img
                    src="/assets/history.jpg"
                    alt="Church History"
                    style={{maxWidth: "100%", borderRadius: 8, margin: "20px 0"}}
                />
            </>
        ),
    },
    {
        label: "Salvation / Eternal Life",
        content: (
            <>
                <Typography variant="body1" paragraph  sx={{ textAlign: "justify" }}>
                    Everyone needs love and I have good news! God the creator of the universe loves you and wants to give you a life better than you can possibly imagine. 2000 years ago God came to this world as a man. His name was Jesus. It was through Jesus’ willingness to sacrifice his life for us that a broken relationship between a man and God can be restored. Through Jesus’ resurrection from the dead a man can receive eternal life. Who is this man that can have a relationship with God and who is this man that can receive eternal life? It’s you! For the bible tells us:
                    “if you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.” Romans 10:9
                    and again
                    “Jesus said to her, ‘I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die. Do you believe this?’” John 11:25-26
                    Group_of_Kids_SalvationThis new life that is available to everyone who believes begins at the moment they accept Jesus as their Lord and Savior. Jesus said “I came that they may have life and have it abundantly” (John 10:10). Who is they? The person who believes and receives salvation through Jesus Christ. In fact, believers are one family:
                    “See what kind of love the Father has given to us, that we should be called children of God; and so we are. …” 1 John 3:1
                    and also “But when the fullness of time had come, God sent forth his Son, born of woman, born under the law, to redeem those who were under the law, so that we might receive adoption as sons. And because you are sons, God has sent the Spirit of his Son into our hearts, crying, ‘Abba! Father!’ 7 So you are no longer a slave, but a son, and if a son, then an heir through God.” Galatians 4:4-7
                    That’s right, believers are members of the same family and that is God’s family. The God who created all, is the Father of this family. Like any good Father, God the Father has sent His Spirit into our hearts to help us and to provide for our needs, even now:
                    “And my God will supply every need of yours according to his riches in glory in Christ Jesus.” Philippians 4:19
                    and “Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. For everyone who asks receives, and the one who seeks finds, and to the one who knocks it will be opened. Or which one of you, if his son asks him for bread, will give him a stone? Or if he asks for a fish, will give him a serpent? If you then, who are evil, know how to give good gifts to your children, how much more will your Father who is in heaven give good things to those who ask him!” Matthew 7:7-11
                    God the Father is a good, good father. What could possibly be better or more important than receiving eternal life as a family member of the one true and living God:
                    “There is one body and one Spirit—just as you were called to the one hope that belongs to your call— one Lord, one faith, one baptism, one God and Father of all, who is over all and through all and in all.”
                    It’s a big deal to be a member of the family of God, where there is love and hope and life. And guess what, you are welcome! Won’t you give God a chance. Look in your heart. Is there belief in your heart that God the Father raised Jesus his son from the dead? Faith, the ability to believe this truth, is a gift. The bible says “So faith comes from hearing, and hearing through the word of Christ.” (Romans 10:17). Even the words written here will produce faith; the faith to believe.
                    If you believe then you’re one confession away from the free gift of salvation, eternal life and adoption into God’s family. “I accept Jesus as my Lord and Savior”. That’s what a believer says to receive this free gift. Will you join us?
                </Typography>
                <img
                    src="/assets/salvation.jpg"
                    alt="Salvation"
                    style={{maxWidth: "100%", borderRadius: 8, margin: "20px 0"}}
                />
            </>
        ),
    },
];

const AboutPage = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    return (
        <Box sx={{padding: 3}}>
            {/* Tabs */}
            <Tabs
                value={currentTab}
                onChange={handleTabChange}
                variant="fullWidth"  // Make the tabs span the full width
                scrollButtons="auto"
                aria-label="About Page Tabs"
                sx={{
                    marginBottom: 3,
                    "& .MuiTabs-flexContainer": {
                        justifyContent: "space-between", // Optional: Spreads out the tabs
                    },
                }}
            >
                {tabContent.map((tab, index) => (
                    <Tab key={index} label={tab.label}/>
                ))}
            </Tabs>

            {/* Tab Content */}
            <Box sx={{padding: 2, backgroundColor: "#f9f9f9", borderRadius: 2}}>
                {tabContent[currentTab].content}
            </Box>
        </Box>
    );
};

export default AboutPage;


export const About = () => {
    return (
        <>
            <Hero backGroundImageSrc={'url(/assets/about.jpg)'}/>
            <AboutPage/>
        </>
    )
}