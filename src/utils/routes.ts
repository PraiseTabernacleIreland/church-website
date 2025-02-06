interface Route {
    [pageName: string]: string;
}

export enum PageName {
    Home = 'Home',
    About = 'About',
    Events = 'Events / Calendar',
    Outreach = 'Outreach',
    Sermons = 'Sermons',
    Contact = 'Contact',
    ReportsAndDocuments = 'Reports & Documents',
    Give = 'Give',
    Team = 'Team',
}

export const PageRoutes: Route = {
    [PageName.Home]: "/",
    [PageName.About]: "/about",
    [PageName.Events]: "/events",
    [PageName.Outreach]: "/outreach",
    [PageName.Sermons]: "/sermons",
    [PageName.Contact]: "/contact",
    [PageName.ReportsAndDocuments]: "/reports",
    [PageName.Give]: "/give",
    [PageName.Team]: "/team"
}
