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
        relatedImages: [
            '/assets/children.jpg',
            '/assets/children_2.jpg',
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
        relatedImages: [
            '/assets/choir_1.jpg',
            '/assets/choir_2.jpg'
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
        relatedImages: [
            '/assets/youth_1.jpg',
            '/assets/youth_2.jpg',
            '/assets/youth_3.jpg',
            '/assets/youth_4.jpg',
            '/assets/youth_5.jpg',
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
        relatedImages: [
            '/assets/evangelism.jpg',
            '/assets/evangelism_1.jpg',
            '/assets/evangelism_2.jpg',
            '/assets/evangelism_3.jpg',
        ]
    },
];