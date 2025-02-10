import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import Hero from "../components/Hero";

const GivePage = () => {
    const paypalLink = "https://paypal.me/AFMIRELAND"; // Replace with your PayPal.me link
    const bankTransferDetails = {
        accountName: "AFM Praise Tabernacle",
        IBAN: "IE29AIBK93115212345678", // Replace with actual IBAN
        BIC: "AIBKIE2D", // Replace with actual BIC
    };

    return (
        <Box sx={{ padding: 3, textAlign: "center", backgroundColor: "#f7f7f7" }}>
            <Grid container spacing={4} justifyContent="center" sx={{ marginBottom: 5 }}>
                <Grid item xs={12} md={6}>
                    <Card elevation={3} sx={{ backgroundColor: "#fff" }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Give via PayPal
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "center", marginY: 3 }}>
                                <QRCodeCanvas value={paypalLink} size={150} />
                            </Box>
                            <Typography variant="body1" sx={{ color: "#333" }}>
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
                    <Card elevation={3} sx={{ backgroundColor: "#fff" }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Bank Transfer
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: 3, color: "#333" }}>
                                You can also give via bank transfer using the details below:
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: "bold", color: "#555" }}>
                                Account Name:
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#333" }}>
                                {bankTransferDetails.accountName}
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: 2, color: "#555" }}>
                                IBAN:
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#333" }}>
                                {bankTransferDetails.IBAN}
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: 2, color: "#555" }}>
                                BIC:
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#333" }}>
                                {bankTransferDetails.BIC}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Box sx={{ marginTop: 5, backgroundColor: "#e8f0fe", padding: 4, borderRadius: 2 }}>
                <Typography variant="h5" sx={{ color: "#333", fontWeight: "bold", marginBottom: 2 }}>
                    Claim Tax Relief on Your Donations
                </Typography>
                <Typography variant="body1" sx={{ color: "#333", marginBottom: 2 }}>
                    Did you know you can claim tax relief on your donations if you are a PAYE or self-assessed taxpayer in Ireland? This allows your generous contributions to go even further.
                </Typography>
                <Typography variant="body1" sx={{ color: "#333", marginBottom: 2 }}>
                    To claim, simply download and complete the CHY3 or CHY4 forms from the Revenue website and submit them to us.
                </Typography>
                <Button
                    variant="outlined"
                    color="primary"
                    href="https://www.revenue.ie/en/companies-and-charities/charities-and-sports-bodies/charitable-donation-scheme/claiming-tax-relief-on-donations.aspx"
                    target="_blank"
                >
                    Learn More & Download Forms
                </Button>
            </Box>

            <Box sx={{ marginTop: 5, backgroundColor: "#f1f1f1", padding: 3 }}>
                <Typography variant="h6" sx={{ color: "#333" }}>Other Ways to Give</Typography>
                <Typography variant="body1" sx={{ color: "#333" }}>
                    For any questions or assistance, please contact us at{" "}
                    <a href="mailto:contact@yourchurch.com" style={{ color: "#6200ea" }}>
                        contact@yourchurch.com
                    </a>.
                </Typography>
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