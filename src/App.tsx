import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { About } from "./pages/about/About";
import { EventsAndCalendar } from "./pages/EventsAndCalendar";
import { Sermons } from "./pages/resources/Sermons";
import { Contact } from "./pages/Contact";
import { ReportsAndDocuments } from "./pages/resources/ReportsAndDocuments";
import { PageName, PageRoutes } from "./utils/routes";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";
import { Give } from "./pages/Give";
import Team from "./pages/about/Team";
import { WorshipMinistryPage } from "./pages/connect/ministry/Worship";
import { EvangelismMinistryPage } from "./pages/connect/ministry/Evangelism";
import { Beliefs } from "./pages/about/Beliefs";
import { History } from "./pages/about/History";
import ScrollToTop from "./components/ScrollToTop";
import { SundaySchoolPage } from "./pages/connect/growth/SundaySchool";
import { YouthFellowshipPage } from "./pages/connect/fellowships/Youth";
import { MenFellowshipPage } from "./pages/connect/fellowships/Men";
import { WomenFellowshipPage } from "./pages/connect/fellowships/Women";
import { FamilyFellowshipPage } from "./pages/connect/fellowships/Family";
import { HospitalityMinistryPage } from "./pages/connect/ministry/Hopsitality";
import { IntercessionMinistryPage } from "./pages/connect/ministry/Intercession";
import { MediaMinistryPage } from "./pages/connect/ministry/Media";
import { CellGroupsPage } from "./pages/connect/growth/CellGroups";

/**
 * Main application component
 * 
 * This is the root component that sets up the application structure including:
 * - Navigation bar (fixed at top)
 * - Main content area with all route definitions
 * - Footer (fixed at bottom)
 * - Scroll-to-top functionality for route changes
 * 
 * The layout uses flexbox to ensure the footer stays at the bottom even on short pages.
 * 
 * @returns {JSX.Element} The main application structure
 */
function App() {
    return (
        <Box
            className="App"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <ScrollToTop />
            <NavigationBar />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                }}
            >
                <Routes>
                    <Route path={PageRoutes[PageName.Home]} element={<Home />} />
                    <Route path={PageRoutes[PageName.About]} element={<About />} />
                    <Route path={PageRoutes[PageName.Our_History]} element={<History />} />
                    <Route path={PageRoutes[PageName.Our_Beliefs]} element={<Beliefs />} />
                    <Route path={PageRoutes[PageName.Events]} element={<EventsAndCalendar />} />
                    <Route path={PageRoutes[PageName.Sermons]} element={<Sermons />} />
                    <Route path={PageRoutes[PageName.Contact]} element={<Contact />} />
                    <Route path={PageRoutes[PageName.ReportsAndDocuments]} element={<ReportsAndDocuments />} />
                    <Route path={PageRoutes[PageName.Give]} element={<Give />} />
                    <Route path={PageRoutes[PageName.Team]} element={<Team />} />
                    
                    {/* Fellowship Routes */}
                    <Route path={PageRoutes[PageName.Men]} element={<MenFellowshipPage />} />
                    <Route path={PageRoutes[PageName.Women]} element={<WomenFellowshipPage />} />
                    <Route path={PageRoutes[PageName.Family]} element={<FamilyFellowshipPage />} />
                    <Route path={PageRoutes[PageName.Youth]} element={<YouthFellowshipPage />} />
                    
                    {/* Growth & Discipleship Routes */}
                    <Route path={PageRoutes[PageName.CellGroups]} element={<CellGroupsPage />} />
                    <Route path={PageRoutes[PageName.SundaySchool]} element={<SundaySchoolPage />} />
                    
                    {/* Ministry Routes */}
                    <Route path={PageRoutes[PageName.Evangelism]} element={<EvangelismMinistryPage />} />
                    <Route path={PageRoutes[PageName.Hospitality]} element={<HospitalityMinistryPage />} />
                    <Route path={PageRoutes[PageName.Intercession]} element={<IntercessionMinistryPage />} />
                    <Route path={PageRoutes[PageName.Media]} element={<MediaMinistryPage />} />
                    <Route path={PageRoutes[PageName.Worship]} element={<WorshipMinistryPage />} />
                </Routes>
            </Box>

            <Footer />
        </Box>
    );
}

export default App;
