import { Fellowship, FellowshipName } from "../types";
import { PageName } from "../utils/routes";

export const FELLOWSHIPS: { [fellowshipName in FellowshipName]: Fellowship } = {
    [FellowshipName.Men]: {
        name: PageName.Men,
        heroImage: `/assets/men-1.webp`,
        description: "Empowering men through faith, leadership, and community service.",
        about: "The Men's Fellowship is a community of men striving for spiritual growth, accountability, and service. Through Bible studies, mentorship, and outreach programs, we build strong, Christ-centered leaders in our homes and society.",
        activities: [
            {
                name: "Men's Breakfast & Devotion",
                description: "A time of fellowship, prayer, and study of God's Word over breakfast.",
                image: `/assets/men-2.webp`,
            },
            {
                name: "Leadership Development",
                description: "Training men in leadership, mentoring, and discipleship for family and church roles.",
                image: `/assets/men-3.webp`,
            }
        ],
        joinInstructions: "Be part of our regular gatherings, Bible studies, and service projects. Connect with the fellowship leader after service or sign up online.",
    },

    [FellowshipName.Women]: {
        name: PageName.Women,
        heroImage: `/assets/women-1.webp`,
        description: "Encouraging and supporting women in their faith journey.",
        about: "The Women's Fellowship provides a space for women to grow spiritually, find mentorship, and build strong relationships rooted in faith.",
        activities: [
            {
                name: "Women's Bible Study",
                description: "In-depth Bible study sessions focused on spiritual growth and encouragement.",
                image: `/assets/women.webp`,
            },
            {
                name: "Prayer & Intercession",
                description: "Gathering to pray for the church, families, and personal needs.",
                image: `/assets/women-3.webp`,
            }
        ],
        joinInstructions: "Join our weekly gatherings, special events, and prayer meetings. Connect with a leader after service to get involved.",
    },

    [FellowshipName.Youth]: {
        name: PageName.Youth,
        heroImage: `/assets/youth-1.webp`,
        description: "Building the next generation of faith-driven leaders.",
        about: "The Youth Fellowship is a vibrant community where young people grow in faith, develop leadership skills, and build lifelong friendships.",
        activities: [
            {
                name: "Youth Night",
                description: "Fun, fellowship, and worship tailored for young believers.",
                image: `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
            },
            {
                name: "Bible Study & Discussions",
                description: "Interactive discussions to help youth apply Biblical principles to everyday life.",
                image: `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
            },
            {
                name: "Mission & Outreach",
                description: "Serving the community through outreach projects, evangelism, and charity work.",
                image: `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
            },
        ],
        joinInstructions: "If you’re a young person looking to grow spiritually and connect with like-minded believers, join us at our weekly Youth Night!",
    },

    [FellowshipName.Family]: {
        name: PageName.Family,
        heroImage: `${process.env.PUBLIC_URL}/assets/img_15.png`,
        description: "Strengthening families through faith-based support and fellowship.",
        about: "The Family Fellowship is a place for parents, couples, and children to grow together in Christ. We provide resources and support to build strong Christian homes.",
        activities: [
            {
                name: "Marriage Enrichment",
                description: "Workshops and counseling to strengthen marriages and relationships.",
                image: `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
            },
            {
                name: "Family Bible Study",
                description: "Interactive sessions for families to study God’s Word together.",
                image: `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
            },
            {
                name: "Parenting Workshops",
                description: "Equipping parents with Biblical principles for raising children.",
                image: `${process.env.PUBLIC_URL}/assets/placeholder_1.png`,
            },
        ],
        joinInstructions: "Families are welcome to participate in our gatherings, workshops, and support groups. Contact us to find out how to get involved!",
    }
};