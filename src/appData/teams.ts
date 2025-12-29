import { TeamName, Teams } from "../types";

/**
 * Church leadership and team member data
 * 
 * This file contains information about the church's leadership structure including
 * pastoral staff, administration, and elders. Each team member includes their role,
 * contact information, and description.
 */
export const TEAMS: Teams = {
    [TeamName.Pastoral]: [
        {
            image: `/assets/pastor-gerard-sibo-headshot.webp`,
            name: 'Gerard and Sibo Chimbganda',
            title: 'Main Pastors',
            team: TeamName.Pastoral,
            description: 'Main Pastors',
        },
        {
            image: `/assets/pastor-alex-tari-headshot.webp`,
            name: 'Alex and Tari Kadonzvo',
            title: 'Associate Pastors',
            team: TeamName.Pastoral,
            description: 'Associate Pastors',
        }
    ],
    [TeamName.Administration]: [
        {
            image: `/assets/moses.jpg`,
            name: 'Moses Ufumeli',
            title: 'Administrator',
            team: TeamName.Administration,
            email: 'ufumelims@yahoo.co.uk',
            description: '',
        },
    ],
    [TeamName.Elders]: [
        {
            image: `/assets/jonah.jpg`,
            name: 'Jonah Mudehwe',
            title: 'Elder',
            team: TeamName.Elders,
            email: 'mudehwes@yahoo.co.uk',
            description: 'Oversees church policies and financial decisions.',
        }
    ],
    [TeamName.Deacons]: [],
    [TeamName.Cell_Leaders]: [],
};
