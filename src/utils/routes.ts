interface Route {
    [pageName: string]: string | Route;
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
    Our_History = 'Our History',
    Our_Beliefs = 'What we believe',
    Resources = 'Resources',
    Children = 'Children',
    Worship = 'Worship',
    Youth = 'Youth',
}

export const PageRoutes: Route = {
    [PageName.Home]: "/",
    // [PageName.About]: {
    //     [PageName.Our_History]: "/about/history",
    //     [PageName.Our_Beliefs]: "/about/beliefs",
    // },
    [PageName.Events]: "/events",
    [PageName.Outreach]: "/outreach",
    [PageName.Sermons]: "/sermons",
    [PageName.Contact]: "/contact",
    [PageName.ReportsAndDocuments]: "/reports",
    [PageName.Give]: "/give",
    [PageName.Team]: "/team"
}
