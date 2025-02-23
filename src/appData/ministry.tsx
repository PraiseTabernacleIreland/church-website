import { Ministry, MinistryName } from "../types";
import { PageName, PageRoutes } from "../utils/routes";

export const MINISTRIES: { [ministryName in MinistryName]: Ministry } = {
    [MinistryName.Media]: {
        name: PageName.Media,
        description: "Enhancing worship and outreach through media and technology.",
        heroImage: `${process.env.PUBLIC_URL}/assets/img_9.png`,
        joinInstructions: "If you are passionate about media production, photography, or live streaming, join our team and help bring worship to life.",
        route: PageRoutes[PageName.Media],
        relatedImages: [
            `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
        ]
    },

    [MinistryName.Worship]: {
        name: PageName.Worship,
        description: "Leading the congregation in spirit-filled worship through music and song.",
        heroImage: `${process.env.PUBLIC_URL}/assets/img_6.png`,
        joinInstructions: "If you have a gift in singing, playing instruments, or leading worship, we invite you to be part of our dynamic worship team.",
        route: PageRoutes[PageName.Worship],
        relatedImages: [
            `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
            `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
        ]
    },

    [MinistryName.Hospitality]: {
        name: PageName.Hospitality,
        description: "Creating a warm and welcoming atmosphere for all members and visitors.",
        heroImage: `${process.env.PUBLIC_URL}/assets/img_10.png`,
        joinInstructions: "If you love making people feel welcome and serving others, join our hospitality team and make a lasting impact.",
        route: PageRoutes[PageName.Hospitality],
        relatedImages: [
            `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
        ]
    },

    [MinistryName.Evangelism]: {
        name: PageName.Evangelism,
        description: "Spreading the Gospel and reaching out to the lost with love and faith.",
        heroImage: `${process.env.PUBLIC_URL}/assets/img_7.png`,
        joinInstructions: "Are you passionate about sharing the Good News? Join our evangelism team and help lead people to Christ.",
        route: PageRoutes[PageName.Evangelism],
        relatedImages: [
            `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
            `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
        ]
    },

    [MinistryName.Intercession]: {
        name: PageName.Intercession,
        description: "Standing in the gap through prayer and spiritual warfare.",
        heroImage: `${process.env.PUBLIC_URL}/assets/img_11.png`,
        joinInstructions: "If you believe in the power of prayer and intercession, join us in lifting up the church, community, and world in prayer.",
        route: PageRoutes[PageName.Intercession],
        relatedImages: [
            `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
            `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
            `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
            `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
        ]
    },
};