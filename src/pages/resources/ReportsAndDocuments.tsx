import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Description as DescriptionIcon, Download as DownloadIcon, ExpandMore as ExpandMoreIcon, Folder as FolderIcon } from "@mui/icons-material";
import Hero from "../../components/Hero";

// Example reports data
const reports = [
    {
        year: 2024,
        documents: [
            { title: "AGM Minutes", file: "/assets/AGM_1 December 2024_Agenda.pdf" },
            { title: "Financial Report", file: "/assets/AFM Ireland_2023 audited accounts.pdf" },
        ],
    },
    {
        year: 2023,
        documents: [
            { title: "AGM Minutes", file: "/assets/AFM Ireland_2023 AGM minutes.pdf" },
            { title: "Financial Report", file: "/assets/AFM Ireland_2023 audited accounts.pdf" },
        ],
    },
    {
        year: 2022,
        documents: [
            { title: "AGM Minutes", file: "/assets/AFM Ireland_2023 AGM minutes.pdf" },
            { title: "Financial Report", file: "/assets/AFM Ireland_2023 audited accounts.pdf" },
        ],
    },
];

const ReportsAndDocumentsPage = () => {
    return (
        <Box
            sx={{
                position: "relative",
                background: "linear-gradient(to bottom, rgba(250,250,250,1), rgba(255,255,255,1))",
                textAlign: "center",
                py: 10,
                px: 4,
                width: "100vw",
            }}
        >
            <Container maxWidth="lg">
                {/*<Typography variant="body1" sx={{ mb: 6, color: "#555" }}>*/}
                {/*    Download our annual reports and official documents to stay informed about our activities, finances, and goals.*/}
                {/*</Typography>*/}

                {reports.map((report, index) => (
                    <Accordion key={index} sx={{ mb: 3, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#7b523a" }} />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                            sx={{ backgroundColor: "#f7f1e5", padding: "16px", borderRadius: "8px" }}
                        >
                            <FolderIcon sx={{ mr: 2, color: "#7b523a" }} />
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#7b523a" }}>
                                {report.year} Documents
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={4} justifyContent="center">
                                {report.documents.map((doc, docIndex) => (
                                    <Grid item xs={12} sm={6} md={4} key={docIndex}>
                                        <Card
                                            sx={{
                                                borderRadius: "12px",
                                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                                transition: "transform 0.3s ease",
                                                "&:hover": {
                                                    transform: "scale(1.05)",
                                                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
                                                },
                                            }}
                                        >
                                            <CardContent sx={{ textAlign: "center", padding: "20px" }}>
                                                <DescriptionIcon sx={{ fontSize: 50, color: "#7b523a", mb: 2 }} />
                                                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333", mb: 1 }}>
                                                    {doc.title}
                                                </Typography>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    startIcon={<DownloadIcon />}
                                                    href={doc.file}
                                                    download
                                                    sx={{
                                                        textTransform: "none",
                                                        padding: "8px 16px",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    Download
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
        </Box>
    );
};

export const ReportsPage = () => {
    return (
        <>
            <Hero backGroundImageSrc={'url(/assets/reports-bg.jpg)'} height={'60vh'} />
            <ReportsAndDocuments />
        </>
    );
};

export default ReportsAndDocumentsPage;


export const ReportsAndDocuments = () => {
    return (
        <>
            <Hero
                backGroundImageSrc={'url(/assets/reports.jpg)'}
                height={'40vh'}
                title={'Reports & Documents'}
                message={'Download our annual reports and official documents to stay informed about our activities, finances, and goals.'}
            />
            <ReportsAndDocumentsPage/>
        </>
    );
};