import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import {AccountBalance, VolunteerActivism, Info} from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Hero from "../components/Hero";

const GivePage = () => {
    const paypalLink = "https://paypal.me/AFMIRELAND";
    const bankTransferDetails = {
        accountName: "AFM Praise Tabernacle",
        IBAN: "IE29AIBK93115212345678",
        BIC: "AIBKIE2D",
    };

    return (
        <Box sx={{ padding: 3, textAlign: "center", backgroundColor: "#f9fafb" }}>
            <Grid container spacing={4} justifyContent="center" sx={{ marginBottom: 5 }}>
                <Grid item xs={12} md={6}>
                    <Card elevation={3} sx={{ backgroundColor: "#ffffff" }}>
                        <CardContent>
                            <VolunteerActivism sx={{ fontSize: 50, color: "#1976d2", marginBottom: 2 }} />
                            <Typography variant="h5" gutterBottom>
                                Give via PayPal
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "center", marginY: 3 }}>
                                <QRCodeCanvas value={paypalLink} size={150} />
                            </Box>
                            <Typography variant="body1" sx={{ color: "#555" }}>
                                Scan the QR code or click the button below to give via PayPal.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                href={paypalLink}
                                target="_blank"
                                sx={{ marginTop: 2 }}
                            >
                                Donate via PayPal
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card elevation={3} sx={{ backgroundColor: "#ffffff" }}>
                        <CardContent>
                            <AccountBalance sx={{ fontSize: 50, color: "#1976d2", marginBottom: 2 }} />
                            <Typography variant="h5" gutterBottom>
                                Bank Transfer
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: 3, color: "#555" }}>
                                You can also give via bank transfer using the details below:
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: "bold", color: "#777" }}>
                                Account Name:
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#333" }}>
                                {bankTransferDetails.accountName}
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: 2, color: "#777" }}>
                                IBAN:
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#333" }}>
                                {bankTransferDetails.IBAN}
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: 2, color: "#777" }}>
                                BIC:
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#333" }}>
                                {bankTransferDetails.BIC}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Box sx={{ marginTop: 5, backgroundColor: "#f1f1f1", padding: 3 }}>
                <Typography variant="h6" sx={{ color: "#333" }}>Other Ways to Give</Typography>
                <Typography variant="body1" sx={{ color: "#555" }}>
                    For any questions or assistance, please contact us at {" "}
                    <a href="mailto:pastor@praisetabernacle.ie" style={{ color: "#1976d2", textDecoration: "none" }}>
                        pastor@praisetabernacle.ie
                    </a>.
                </Typography>
            </Box>

            <Box sx={{ marginTop: 5, backgroundColor: "#e8f0fe", padding: 4, borderRadius: 2 }}>
                <Info sx={{ fontSize: 50, color: "#1976d2", marginBottom: 2 }} />
                <Typography variant="h5" sx={{ color: "#333", fontWeight: "bold", marginBottom: 2 }}>
                    Claim Tax Relief on Your Donations
                </Typography>
                <Typography variant="body1" sx={{ color: "#555", marginBottom: 2 }}>
                    Did you know you can claim tax relief on your donations if you are a PAYE or self-assessed taxpayer in Ireland? This allows your generous contributions to go even further.
                </Typography>
                <Typography variant="body1" sx={{ color: "#555", marginBottom: 2 }}>
                    To qualify, you need to donate at least €250 in a calendar year. This can be through a single donation or multiple contributions throughout the year.
                </Typography>
                <Typography variant="body1" sx={{ color: "#555", marginBottom: 2 }}>
                    By claiming tax relief, the church can receive up to 45% additional funds from your donation at no extra cost to you. This significantly boosts our ability to support community projects and outreach programs.
                </Typography>
                <Typography variant="body1" sx={{ color: "#555", marginBottom: 2 }}>
                    To claim, simply download and complete the CHY3 or CHY4 forms from the Revenue website and submit them to us.
                </Typography>
                <Button
                    component="a"
                    variant="outlined"
                    color="primary"
                    href="https://www.revenue.ie/en/companies-and-charities/charities-and-sports-bodies/charitable-donation-scheme/claiming-tax-relief-on-donations.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ marginTop: 2 }}
                >
                    Learn More & Download Forms
                </Button>

                <Box sx={{ marginTop: 4 }}>
                    <Typography variant="h6" sx={{ color: "#333", fontWeight: "bold", marginBottom: 2 }}>
                        Frequently Asked Questions
                    </Typography>
                    {[
                        {
                            question: "Does allowing the church to claim tax relief on my donation affect my personal tax situation?",
                            answer: "No, permitting the church to claim tax relief on your donation does not impact your personal tax liabilities or entitlements. The tax relief is claimed by the church and does not alter your personal tax position.",
                        },
                        {
                            question: "What is the minimum donation amount required for the church to claim tax relief?",
                            answer: "The minimum total donation amount is €250 in a calendar year. This can be a single donation or multiple contributions that add up to €250 or more within the year.",
                        },
                        {
                            question: "Is there a maximum limit on the amount I can donate for tax relief purposes?",
                            answer: "Yes, the maximum donation amount that qualifies for tax relief is €1,000,000 in any one year.",
                        },
                        {
                            question: "How does the tax relief benefit the church?",
                            answer: "When you donate €250, the church can claim an additional €112.32 from Revenue, making your total contribution €362.32. This extra funding significantly enhances the church's ability to support its activities and community services.",
                        },
                        {
                            question: "What forms do I need to complete to enable the church to claim this tax relief?",
                            answer: "To authorize the church to claim tax relief on your donation, you should complete either the CHY3 (Enduring Certificate) or CHY4 (Annual Certificate) form and submit it to the church.",
                        },
                        {
                            question: "Will I receive any personal tax refund for my donation?",
                            answer: "No, the tax relief is claimed by the church, not by individual donors. Therefore, you will not receive a personal tax refund for your donation.",
                        },
                        {
                            question: "Does my donation qualify if I have a connection to the church?",
                            answer: "If you are an employee or member of the church, or a member of another approved body connected to the church, your donation may still qualify for tax relief. However, relief will be restricted to 10% of your annual income.",
                        },
                        {
                            question: "How is the tax relief calculated?",
                            answer: "The tax relief is calculated by grossing up your donation at the specified rate of 31%. For example, a €250 donation is considered 69% of the total (100% - 31%), resulting in a gross donation of approximately €362.32. The church can then claim the difference of €112.32 as tax relief.",
                        }
                    ].map((faq, index) => (
                        <Accordion key={index} sx={{ backgroundColor: "#f9fafb", marginBottom: 1 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${index}-content`}
                                id={`panel${index}-header`}
                            >
                                <Typography sx={{ fontWeight: "bold" }}>{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Box>


        </Box>
    );
};

export const Give = () => {
    return (
        <>
            <Hero
                backGroundImageSrc={`url(${process.env.PUBLIC_URL}/assets/events.jpg)`}
                height={'40vh'}
                title={'Support Our Mission'}
                message={'Your generosity helps us continue our mission to serve the community. Thank you for your support!'}
            />
            <GivePage />
        </>
    );
};