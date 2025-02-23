import { GrowthGroup, GrowthGroupName } from "../types";
import { PageName } from "../utils/routes";

export const GROWTH_GROUPS: { [growthGroupName in GrowthGroupName]: GrowthGroup } = {
    [GrowthGroupName.CellGroups]: {
        name: PageName.CellGroups,
        description: "Cell groups are small, intimate gatherings where members can grow spiritually, build relationships, and support one another in faith.",
        heroImage: `${process.env.PUBLIC_URL}/assets/img_16.png`,
        whyItMatters: "Cell groups provide a space for deep fellowship, prayer, and Bible study in a more personal and nurturing setting. They foster strong spiritual connections and accountability within the church community.",
        activities: [
            {
                image: `${process.env.PUBLIC_URL}/assets/outreach.jpg`,
                name: "Weekly Bible Study",
                description: "A time to dive into Scripture, discuss key biblical themes, and apply them to everyday life."
            },
            {
                image: `${process.env.PUBLIC_URL}/assets/outreach.jpg`,
                name: "Fellowship Nights",
                description: "Regular gatherings where members share meals, testimonies, and encouragement in a warm, family-like setting."
            },
            {
                image: `${process.env.PUBLIC_URL}/assets/outreach.jpg`,
                name: "Community Outreach",
                description: "Serving the local community through acts of kindness, evangelism, and charitable work."
            }
        ],
        joinInstructions: "Join a Cell Group near you and experience meaningful spiritual growth in a supportive community. Speak to a leader after service or sign up online."
    },

    [GrowthGroupName.SundaySchool]: {
        name: PageName.SundaySchool,
        description: "Sunday School provides a strong biblical foundation for children, teaching them about God's love, faith, and the importance of living a Christ-centered life.",
        heroImage: `${process.env.PUBLIC_URL}/assets/img_17.png`,
        whyItMatters: "Investing in the next generation is crucial. Sunday School equips children with biblical knowledge, helps them develop a personal relationship with Jesus, and instills godly values that shape their future.",
        activities: [
            {
                image: `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
                name: "Interactive Bible Lessons",
                description: "Engaging and age-appropriate teachings to help children understand and apply biblical truths."
            },
            {
                image: `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
                name: "Children's Worship",
                description: "A lively, fun-filled worship experience designed for kids to express their love for God through music and dance."
            },
            {
                image: `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
                name: "Creative Activities & Games",
                description: "Hands-on crafts, storytelling, and fun games that reinforce biblical lessons in an exciting way."
            }
        ],
        joinInstructions: "Enroll your child in Sunday School today! Classes are held during Sunday services for various age groups."
    }
};