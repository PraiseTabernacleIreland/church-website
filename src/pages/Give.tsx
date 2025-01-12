import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
// import Hero from "../components/Hero"; // Correct import for canvas-based QR code

const GivePage = () => {
    const paypalLink = "https://paypal.me/AFMIRELAND"; // Replace with your PayPal.me link
    const bankTransferDetails = {
        accountName: "AFM Praise Tabernacle",
        IBAN: "IE29AIBK93115212345678", // Replace with actual IBAN
        BIC: "AIBKIE2D", // Replace with actual BIC
    };

    return (
        <Box sx={{ padding: 3, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
                Support Our Mission
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 3 }}>
                Your generosity helps us continue our mission to serve the community. Thank you for your support!
            </Typography>

            <Grid container spacing={4} justifyContent="center" sx={{ marginBottom: 5 }}>
                <Grid item xs={12} md={6}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Give via PayPal
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "center", marginY: 3 }}>
                                <QRCodeCanvas value={paypalLink} size={150} />
                            </Box>
                            <Typography variant="body1">
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
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Bank Transfer
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: 3 }}>
                                You can also give via bank transfer using the details below:
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                Account Name:
                            </Typography>
                            <Typography variant="body1">{bankTransferDetails.accountName}</Typography>
                            <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: 2 }}>
                                IBAN:
                            </Typography>
                            <Typography variant="body1">{bankTransferDetails.IBAN}</Typography>
                            <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: 2 }}>
                                BIC:
                            </Typography>
                            <Typography variant="body1">{bankTransferDetails.BIC}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Box sx={{ marginTop: 5 }}>
                <Typography variant="h6">Other Ways to Give</Typography>
                <Typography variant="body1">
                    For any questions or assistance, please contact us at{" "}
                    <a href="mailto:contact@yourchurch.com">contact@yourchurch.com</a>.
                </Typography>
            </Box>
        </Box>
    );
};

export const Give = () => {
    return (
        <>
            {/*<Hero backGroundImageSrc={'url(/assets/events.jpg)'}/>*/}
            <Box
                sx={{
                    backgroundImage: "url(/assets/events.jpg)", // Replace with your background image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "50px 0",
                    color: "#fff",
                    textAlign: "center",
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    Give Generously
                </Typography>
                <Typography variant="h6">
                    Together, we can make a difference in our community and beyond.
                </Typography>
            </Box>
            <GivePage />
        </>
    );
};