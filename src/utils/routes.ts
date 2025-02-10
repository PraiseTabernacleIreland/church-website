interface Route {
    [pageName: string]: string;
}

export enum PageName {
    Home = 'Home',
    About = 'About',
    Events = 'Events / Calendar',
    Evangelism = 'Evangelism',
    Sermons = 'Sermons',
    Contact = 'Contact',
    ReportsAndDocuments = 'Reports & Documents',
    Give = 'Give',
    Team = 'Team',
    Ministries = 'Ministries',
    Our_History = 'Our History',
    Our_Beliefs = 'What we believe',
    Resources = 'Resources',
    Children = 'Children',
    Worship = 'Worship',
    Youth = 'Youth',
    Men = 'Men',
    Women = 'Women',
    Registration = 'Registration',
}

export const PageRoutes: Route = {
    [PageName.Home]: "/",
    [PageName.Sermons]: "/resources/sermons",
    [PageName.ReportsAndDocuments]: "/resources/reports",
    [PageName.Our_History]: "/about/history",
    [PageName.Our_Beliefs]: "/about/beliefs",
    [PageName.Team]: "/about/team",
    [PageName.Events]: "/events",
    [PageName.Contact]: "/contact",
    [PageName.Give]: "/give",
    [PageName.Youth]: "/ministries/youth",
    [PageName.Children]: "/ministries/children",
    [PageName.Worship]: "/ministries/worship",
    [PageName.Evangelism]: "/ministries/evangelism",
    [PageName.Men]: "/ministries/men",
    [PageName.Women]: "/ministries/women",
    [PageName.Registration]: "/registration",
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
        text: PageName.Ministries,
        route: "#",
        dropdownItems: [
            { text: PageName.Children, route: PageRoutes[PageName.Children] },
            { text: PageName.Evangelism, route: PageRoutes[PageName.Evangelism] },
            { text: PageName.Worship, route: PageRoutes[PageName.Worship] },
            { text: PageName.Youth, route: PageRoutes[PageName.Youth] },
            { text: PageName.Men, route: PageRoutes[PageName.Men] },
            { text: PageName.Women, route: PageRoutes[PageName.Women] },
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
