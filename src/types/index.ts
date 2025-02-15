export enum MinistryName {
    Evangelism = 'Evangelism',
    Media = 'Media',
    Worship = 'Worship',
    Hospitality = 'Hospitality',
    Intercession = 'Intercession',
}

export enum FellowshipName {
    Men = 'Men',
    Women = 'Women',
    Youth = 'Youth',
    Family = 'Family'
}

export enum GrowthGroupName {
    CellGroups = 'CellGroups',
    SundaySchool = 'SundaySchool'
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
    variant: string,
    isExternal: boolean,
}

export interface Ministry {
    heroImage: string;
    name: string;
    description: string;
    relatedImages: string[];  // Array of image URLs for past events
    joinInstructions: string;
    route: string;
}

export interface Fellowship {
    about: string;
    heroImage: string;
    name: string;
    description: string;
    activities: {
        image: string;
        name: string;
        description: string;
    }[];
    joinInstructions: string;
}

export interface GrowthGroup {
    heroImage: string;
    name: string;
    description: string;
    whyItMatters: string;
    activities: {
        image: string;
        name: string;
        description: string;
    }[],
    joinInstructions: string;
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
    ministries: { [ministryName in MinistryName]: Ministry } ;
    fellowships: { [fellowshipName in FellowshipName]: Fellowship } ;
    growthGroups: { [growthGroupName in GrowthGroupName]: GrowthGroup } ;
    teams: Teams
}


