import {TeamName, Teams} from "../types";

export const TEAMS: Teams = {
    [TeamName.Pastoral]: [
        {
            image: `/assets/pastor-gerard-sibo-headshot.webp`,
            name: 'Gerard + Sibo Chimbganda',
            title: 'Main Pastors',
            team: TeamName.Pastoral,
            // email: 'gerardchimb@gmail.com',
            description: 'Main Pastors',
        },
        {
            image: `/assets/pastor-alex-tari-headshot.webp`,
            name: 'Alex + Tariro Kadonzvo',
            title: 'Associate Pastors',
            team: TeamName.Pastoral,
            // email: 'ufumelims@yahoo.co.uk',
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
    // [TeamName.Deacons]: [
    //     {
    //         image: `/assets/moses.jpg`,
    //         name: 'Moses Ufumeli',
    //         title: 'Secretary',
    //         team: TeamName.Deacons,
    //         email: 'ufumelims@yahoo.co.uk',
    //         description: 'Manages church records and administrative operations.',
    //     },
    //     {
    //         image: `/assets/kerina.jpg`,
    //         name: 'Kerina Ufumeli',
    //         title: 'Secretary',
    //         team: TeamName.Deacons,
    //         email: 'ufumelims@yahoo.co.uk',
    //         description: 'Manages church records and administrative operations.',
    //     },
    //     {
    //         image: `/assets/sani-headshot.webp`,
    //         name: 'Brian + Sani Mirimi',
    //         title: 'Deacon',
    //         team: TeamName.Deacons,
    //         // email: 'mudehwes@yahoo.co.uk',
    //         description: 'Oversees church policies and financial decisions.',
    //     },
    //     {
    //         image: `/assets/brian.jpg`,
    //         name: 'Brian Mirimi',
    //         title: 'Deacon',
    //         team: TeamName.Deacons,
    //         // email: 'johndoe@example.com',
    //         description: 'Leads the congregation in spiritual growth, provides counseling, and oversees church operations.',
    //     },
    //     {
    //         image: `/assets/thuli.jpg`,
    //         name: 'Thuli',
    //         title: 'Deacon',
    //         team: TeamName.Deacons,
    //         // email: 'ufumelims@yahoo.co.uk',
    //         description: 'Leads the worship team, organizes praise sessions, and ensures a vibrant worship experience.',
    //     },
    // ],
};