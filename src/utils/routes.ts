interface Route {
    [pageName: string]: string;
}

export enum PageName {
    Home = 'Home',
    About = 'About',
    Events = 'Events / Calendar',
    Evangelism = 'Evangelism & Outreach',
    Sermons = 'Sermons',
    Contact = 'Contact',
    ReportsAndDocuments = 'Reports & Documents',
    Give = 'Give',
    Team = 'Team',
    Ministries = 'Ministries',
    Our_History = 'Our History',
    Our_Beliefs = 'What we believe',
    Resources = 'Resources',
    Worship = 'Worship',
    Youth = 'Youth & Young Adults',
    Men = 'Men',
    Women = 'Women',
    Registration = 'Registration',
    CellGroups = 'Cell Groups',
    Family = 'Family & Couples',
    Media = 'Media & Creative',
    Hospitality = 'Hospitality & Ushering',
    Intercession = 'Intercession',
    SundaySchool = 'Sunday School',
    Connect = 'Connect',
    Fellowships = 'Fellowships',
    Growth = 'Spiritual Growth & Discipleship',
}

export const PageRoutes: Route = {
    [PageName.Home]: "/",
    [PageName.Events]: "/events",
    [PageName.Contact]: "/contact",
    [PageName.Give]: "/give",
    [PageName.Registration]: "/registration",
    // resources
    [PageName.Sermons]: "/resources/sermons",
    [PageName.ReportsAndDocuments]: "/resources/reports",
    // about
    [PageName.Our_History]: "/about/history",
    [PageName.Our_Beliefs]: "/about/beliefs",
    [PageName.Team]: "/about/team",
    // ministries
    [PageName.Worship]: "connect/ministries/worship",
    [PageName.Evangelism]: "connect/ministries/evangelism",
    [PageName.Media]: "connect/ministries/media",
    [PageName.Hospitality]: "connect/ministries/hospitality",
    [PageName.Intercession]: "connect/ministries/intercession",
    // fellowship
    [PageName.Men]: "connect/fellowship/men",
    [PageName.Women]: "connect/fellowship/women",
    [PageName.Youth]: "connect/fellowship/youth",
    [PageName.Family]: "connect/fellowship/family",
    // Spiritual Growth & Discipleship
    [PageName.CellGroups]: "connect/growth/cell",
    [PageName.SundaySchool]: "connect/growth/sunday-school",

}

export const NavigationRoutes = [
    { text: PageName.Home, route: PageRoutes[PageName.Home] },
    {
        text: PageName.About,
        route: "#",
        dropdownItems: [
            { text: PageName.Our_History, route: PageRoutes[PageName.Our_History] },
            { text: PageName.Our_Beliefs, route: PageRoutes[PageName.Our_Beliefs] },
            { text: PageName.Team, route: PageRoutes[PageName.Team] },
        ],
    },
    { text: PageName.Events, route: PageRoutes[PageName.Events] },
    {
        text: PageName.Connect,
        route: "#",
        dropdownItems: [
            { text: PageName.Ministries, route:"#", dropdownItems: [
                    { text: PageName.Worship, route: PageRoutes[PageName.Worship] },
                    { text: PageName.Evangelism, route: PageRoutes[PageName.Evangelism] },
                    { text: PageName.Media, route: PageRoutes[PageName.Media] },
                    { text: PageName.Hospitality, route: PageRoutes[PageName.Hospitality] },
                    { text: PageName.Intercession, route: PageRoutes[PageName.Intercession] },
                ] },
            { text: PageName.Fellowships, route:"#", dropdownItems: [
                    { text: PageName.Men, route: PageRoutes[PageName.Men] },
                    { text: PageName.Women, route: PageRoutes[PageName.Women] },
                    { text: PageName.Youth, route: PageRoutes[PageName.Youth] },
                    { text: PageName.Family, route: PageRoutes[PageName.Family] },
                ] },
            { text: PageName.Growth, route: "#", dropdownItems: [
                    { text: PageName.CellGroups, route: PageRoutes[PageName.CellGroups] },
                    { text: PageName.SundaySchool, route: PageRoutes[PageName.SundaySchool] },
                ] },

        ],
    },
    {
        text: PageName.Resources,
        route: "#",
        dropdownItems: [
            { text: PageName.Sermons, route: PageRoutes[PageName.Sermons] },
            { text: PageName.ReportsAndDocuments, route: PageRoutes[PageName.ReportsAndDocuments] },
        ],
    },
    { text: PageName.Contact, route: PageRoutes[PageName.Contact] },
    { text: PageName.Give, route: PageRoutes[PageName.Give] },
];
