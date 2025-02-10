import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import {Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {About} from "./pages/about/About";
import {EventsAndCalendar} from "./pages/EventsAndCalendar";
import {Sermons} from "./pages/resources/Sermons";
import {Contact} from "./pages/Contact";
import {ReportsAndDocuments} from "./pages/resources/ReportsAndDocuments";
import {PageName, PageRoutes} from "./utils/routes";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";
import {Give} from "./pages/Give";
import Team from "./pages/about/Team";
import {YouthMinistryPage} from "./pages/ministry/Youth";
import {WorshipMinistryPage} from "./pages/ministry/Worship";
import {EvangelismMinistryPage} from "./pages/ministry/Evangelism";
import {ChildrenMinistryPage} from "./pages/ministry/Children";
import { Beliefs } from "./pages/about/Beliefs";
import { History } from "./pages/about/History";
import ScrollToTop from "./components/ScrollToTop";
import {MenMinistryPage} from "./pages/ministry/Men";
import {WomenMinistryPage} from "./pages/ministry/Women";
import {Registration} from "./pages/Registration";

function App() {
    return (
        <Box
            className="App"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh', // Ensure the App takes full height
            }}
        >
            <ScrollToTop/>
            {/* NavigationBar stays at the top */}
            <NavigationBar />

            {/* Main content area */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1, // Takes up the remaining space
                }}
            >
                <Routes>
                    <Route path={PageRoutes[PageName.Home]} element={<Home />} />
                    <Route path={PageRoutes[PageName.About]} element={<About />} />
                    <Route path={PageRoutes[PageName.Our_History]} element={<History />} />
                    <Route path={PageRoutes[PageName.Our_Beliefs]} element={<Beliefs />} />
                    <Route path={PageRoutes[PageName.Events]} element={<EventsAndCalendar />} />
                    <Route path={PageRoutes[PageName.Evangelism]} element={<EvangelismMinistryPage />} />
                    <Route path={PageRoutes[PageName.Sermons]} element={<Sermons />} />
                    <Route path={PageRoutes[PageName.Contact]} element={<Contact />} />
                    <Route path={PageRoutes[PageName.ReportsAndDocuments]} element={<ReportsAndDocuments />} />
                    <Route path={PageRoutes[PageName.Give]} element={<Give />} />
                    <Route path={PageRoutes[PageName.Team]} element={<Team />} />
                    <Route path={PageRoutes[PageName.Youth]} element={<YouthMinistryPage />} />
                    <Route path={PageRoutes[PageName.Children]} element={<ChildrenMinistryPage />} />
                    <Route path={PageRoutes[PageName.Evangelism]} element={<EvangelismMinistryPage />} />
                    <Route path={PageRoutes[PageName.Worship]} element={<WorshipMinistryPage />} />
                    <Route path={PageRoutes[PageName.Worship]} element={<WorshipMinistryPage />} />
                    <Route path={PageRoutes[PageName.Men]} element={<MenMinistryPage />} />
                    <Route path={PageRoutes[PageName.Women]} element={<WomenMinistryPage />} />
                    <Route path={PageRoutes[PageName.Registration]} element={<Registration />} />
                </Routes>
            </Box>

            {/* Footer stays at the bottom */}
            <Footer />
        </Box>
    );
}

export default App;
