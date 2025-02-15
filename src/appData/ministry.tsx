import { Ministry, MinistryName } from "../types";
import { PageName, PageRoutes } from "../utils/routes";

export const MINISTRIES: { [ministryName in MinistryName]: Ministry } = {
    [MinistryName.Media]: {
        name: PageName.Media,
        description: "Enhancing worship and outreach through media and technology.",
        heroImage: `${process.env.PUBLIC_URL}/assets/media_ministry.jpg`,
        joinInstructions: "If you are passionate about media production, photography, or live streaming, join our team and help bring worship to life.",
        route: PageRoutes[PageName.Media],
        relatedImages: [
            `${process.env.PUBLIC_URL}/assets/media_1.jpg`,
            `${process.env.PUBLIC_URL}/assets/media_2.jpg`,
            `${process.env.PUBLIC_URL}/assets/media_3.jpg`,
        ]
    },

    [MinistryName.Worship]: {
        name: PageName.Worship,
        description: "Leading the congregation in spirit-filled worship through music and song.",
        heroImage: `${process.env.PUBLIC_URL}/assets/worship_ministry.jpg`,
        joinInstructions: "If you have a gift in singing, playing instruments, or leading worship, we invite you to be part of our dynamic worship team.",
        route: PageRoutes[PageName.Worship],
        relatedImages: [
            `${process.env.PUBLIC_URL}/assets/choir_1.jpg`,
            `${process.env.PUBLIC_URL}/assets/choir_2.jpg`,
        ]
    },

    [MinistryName.Hospitality]: {
        name: PageName.Hospitality,
        description: "Creating a warm and welcoming atmosphere for all members and visitors.",
        heroImage: `${process.env.PUBLIC_URL}/assets/hospitality_ministry.jpg`,
        joinInstructions: "If you love making people feel welcome and serving others, join our hospitality team and make a lasting impact.",
        route: PageRoutes[PageName.Hospitality],
        relatedImages: [
            `${process.env.PUBLIC_URL}/assets/hospitality_1.jpg`,
            `${process.env.PUBLIC_URL}/assets/hospitality_2.jpg`,
        ]
    },

    [MinistryName.Evangelism]: {
        name: PageName.Evangelism,
        description: "Spreading the Gospel and reaching out to the lost with love and faith.",
        heroImage: `${process.env.PUBLIC_URL}/assets/evangelism_ministry.jpg`,
        joinInstructions: "Are you passionate about sharing the Good News? Join our evangelism team and help lead people to Christ.",
        route: PageRoutes[PageName.Evangelism],
        relatedImages: [
            `${process.env.PUBLIC_URL}/assets/evangelism_1.jpg`,
            `${process.env.PUBLIC_URL}/assets/evangelism_2.jpg`,
            `${process.env.PUBLIC_URL}/assets/evangelism_3.jpg`,
        ]
    },

    [MinistryName.Intercession]: {
        name: PageName.Intercession,
        description: "Standing in the gap through prayer and spiritual warfare.",
        heroImage: `${process.env.PUBLIC_URL}/assets/intercession_ministry.jpg`,
        joinInstructions: "If you believe in the power of prayer and intercession, join us in lifting up the church, community, and world in prayer.",
        route: PageRoutes[PageName.Intercession],
        relatedImages: [
            `${process.env.PUBLIC_URL}/assets/prayer_1.jpg`,
            `${process.env.PUBLIC_URL}/assets/prayer_2.jpg`,
        ]
    },
};