import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import {Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {EventsAndCalendar} from "./pages/EventsAndCalendar";
import {Outreach} from "./pages/Outreach";
import {Sermons} from "./pages/Sermons";
import {Contact} from "./pages/Contact";
import {ReportsAndDocuments} from "./pages/ReportsAndDocuments";
import {PageName, PageRoutes} from "./utils/routes";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";
import {Give} from "./pages/Give";
import Team from "./pages/Team";

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
                    <Route path={PageRoutes[PageName.Events]} element={<EventsAndCalendar />} />
                    <Route path={PageRoutes[PageName.Outreach]} element={<Outreach />} />
                    <Route path={PageRoutes[PageName.Sermons]} element={<Sermons />} />
                    <Route path={PageRoutes[PageName.Contact]} element={<Contact />} />
                    <Route path={PageRoutes[PageName.ReportsAndDocuments]} element={<ReportsAndDocuments />} />
                    <Route path={PageRoutes[PageName.Give]} element={<Give />} />
                    <Route path={PageRoutes[PageName.Team]} element={<Team />} />
                </Routes>
            </Box>

            {/* Footer stays at the bottom */}
            <Footer />
        </Box>
    );
}

export default App;
