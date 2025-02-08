import {Service} from "../types";
import {ZOOM_LINK} from "../utils/constants";
import {PageName, PageRoutes} from "../utils/routes";

const location = "Praise Tabernacle Apostolic Faith Mission, 1, 8 Portland Row, Mountjoy, Dublin";
const url = `https://www.google.com/maps?q=${encodeURIComponent(location)}`;

export const SERVICE_DATA: Service[] = [
    {
        title: "Sunday Morning Worship",
        time: "10:00 AM - 2:00 PM",
        description: "A time to gather in worship and fellowship.",
        image: "/assets/img_3.png",
        buttons: [
            {text: "Join In-Person", link: url, variant: "contained"},
            {text: "Watch Online", link: PageRoutes[PageName.Sermons], variant: "outlined"},
        ],
        color: "#ad5a2f",
    },
    {
        title: "Wednesday Bible Study",
        time: "7:00 PM - 8:00 PM",
        description: "An evening of learning and spiritual growth.",
        image: "/assets/img_1.png",
        buttons: [{
            text: "Join Online",
            link: ZOOM_LINK,
            variant: "outlined"
        }],
        color: "#785749",
    },
    {
        title: "Friday Prayer Meeting",
        time: "8:00 PM - 9:00 PM",
        description: "A dedicated time of prayer and reflection.",
        image: "/assets/img_2.png",
        buttons: [{
            text: "Join Online",
            link: ZOOM_LINK,
            variant: "outlined"
        }],
        color: "#6d4b3a",
    },

]