interface Route {
    [pageName: string]: string;
}

export enum PageName {
    Home = 'Home',
    About = 'About',
    Events = 'Events / Calendar',
    Outreach = 'Outreach',
    Photos = 'Photos',
    Contact = 'Contact',
    ReportsAndDocuments = 'Reports & Documents',
}

export const PageRoutes: Route = {
    [PageName.Home]: "/",
    [PageName.About]: "/about",
    [PageName.Events]: "/events",
    [PageName.Outreach]: "/outreach",
    [PageName.Photos]: "/photos",
    [PageName.Contact]: "/contact",
    [PageName.ReportsAndDocuments]: "/reports"
}
