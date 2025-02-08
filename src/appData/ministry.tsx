import {ChildCare, Groups, MusicNote, VolunteerActivism} from "@mui/icons-material";
import {Ministry} from "../types";

export const MINISTRIES: Ministry[] = [
    {
        name: "Children Ministry",
        description: "Serving and educating the youngest members of our community.",
        icon: <ChildCare fontSize="large" sx={{color: "#fff"}}/>,
        backgroundImage: "url('/assets/children.jpg')",
    },
    {
        name: "Worship Ministry",
        description: "Leading worship and praise services with music and song.",
        icon: <MusicNote fontSize="large" sx={{color: "#fff"}}/>,
        backgroundImage: "url('/assets/worship.jpg')",
    },
    {
        name: "Youth Ministry",
        description: "Helping teens grow in faith and leadership.",
        icon: <Groups fontSize="large" sx={{color: "#fff"}}/>,
        backgroundImage: "url('/assets/youth.jpg')",
    },
    {
        name: "Outreach Ministry",
        description: "Serving the community through outreach and charity.",
        icon: <VolunteerActivism fontSize="large" sx={{color: "#fff"}}/>,
        backgroundImage: "url('https://images.unsplash.com/photo-1584824486539-53bb4646bdbc')",
    },
];