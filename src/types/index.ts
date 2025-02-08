export enum MinistryName {
    Youth = 'Youth',
    Outreach = 'Outreach',
    Worship = 'Worship',
    Children = 'Children',
}

export enum TeamName {
    Elders = 'Elders',
    Deacons = 'Deacons',
    Pastoral = 'Pastoral',
    Administration = 'Administration',
    Cell_Leaders = 'Cell Leaders',
}

export interface Service {
    title: string,
    time: string,
    description: string,
    image: string,
    buttons: ServiceButton [],
    color: string,
}

export interface ServiceButton {
    text: string,
    link: string,
    variant: string
}

export interface MinistryEvent {
    image: string;
    title: string;
    description: string;
}

export interface Ministry {
    heroImage: string;
    icon: React.ReactNode,
    backgroundImage: string,
    name: string;
    description: string;
    events: MinistryEvent[]
    joinInstructions: string;
    route: string;
}

export interface Person {
    image: string,
    name: string,
    title: string,
    team: TeamName,
    email: string,
    description: string,
}

export type Teams = {
    [team in TeamName]: Person[]
}

export interface AppData {
    services: Service[];
    ministries: Ministry[];
    teams: Teams
}


