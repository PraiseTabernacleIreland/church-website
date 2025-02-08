import {ChildCare, Groups, MusicNote, VolunteerActivism} from "@mui/icons-material";
import {Ministry} from "../types";
import {PageName, PageRoutes} from "../utils/routes";

export const MINISTRIES: Ministry[] = [
    {
        name: "Children Ministry",
        description: "Serving and educating the youngest members of our community.",
        icon: <ChildCare fontSize="large" sx={{color: "#fff"}}/>,
        backgroundImage: "url('/assets/children.jpg')",
        heroImage: "/assets/children.jpg",
        joinInstructions: "If you love working with children and want to make a difference in their spiritual journey, join us today!",
        route: PageRoutes[PageName.Children],
        events: [
            { title: "Vacation Bible School", image: "/assets/children_event1.jpg", description: "A week-long event filled with fun, learning, and spiritual growth for children." },
            { title: "Christmas Play", image: "/assets/children_event2.jpg", description: "Children performing the nativity story with songs and drama." }
        ]
    },
    {
        name: "Worship Ministry",
        description: "Leading worship and praise services with music and song.",
        icon: <MusicNote fontSize="large" sx={{color: "#fff"}}/>,
        backgroundImage: "url('/assets/worship.jpg')",
        heroImage: "/assets/worship.jpg",
        joinInstructions: "If you have a heart for worship and musical talents, we welcome you to join our choir and worship team.",
        route: PageRoutes[PageName.Worship],
        events: [
            { title: "Worship Night", image: "/assets/worship_event1.jpg", description: "An evening dedicated to worship through music and prayer." },
            { title: "Choir Workshop", image: "/assets/worship_event2.jpg", description: "Training sessions for choir members to enhance their skills." }
        ]
    },
    {
        name: "Youth Ministry",
        description: "Helping teens grow in faith and leadership.",
        icon: <Groups fontSize="large" sx={{color: "#fff"}}/>,
        backgroundImage: "url('/assets/youth.jpg')",
        heroImage: "/assets/youth.jpg",
        joinInstructions: "Are you a young person looking for a vibrant community? Join our youth ministry and grow with us.",
        route: PageRoutes[PageName.Youth],
        events: [
            { title: "Youth Camp", image: "/assets/youth_event1.jpg", description: "A fun-filled weekend retreat focusing on faith and fellowship." },
            { title: "Game Night", image: "/assets/youth_event2.jpg", description: "An evening of fun games and bonding activities for the youth." }
        ]
    },
    {
        name: "Evangelism Ministry",
        description: "Serving the community through outreach and charity.",
        icon: <VolunteerActivism fontSize="large" sx={{color: "#fff"}}/>,
        backgroundImage: "url('https://images.unsplash.com/photo-1584824486539-53bb4646bdbc')",
        heroImage: "https://images.unsplash.com/photo-1584824486539-53bb4646bdbc",
        joinInstructions: "Passionate about sharing the Gospel? Join our evangelism team and be a part of God's mission.",
        route: PageRoutes[PageName.Evangelism],
        events: [
            { title: "Community Outreach", image: "/assets/evangelism_event1.jpg", description: "Engaging with the local community to share the message of hope." },
            { title: "Street Evangelism", image: "/assets/evangelism_event2.jpg", description: "Taking the Gospel to the streets with love and compassion." }
        ]
    },
];