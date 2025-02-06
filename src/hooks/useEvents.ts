import {useEffect, useState} from "react";


const events = [
    {
        id: 1,
        title: "Big Sunday Service",
        description: "Join us for a special Sunday service full of worship and fellowship.",
        date: "2025-01-28",
        image: "/assets/big_sunday.jpg",
        link: "/events/1",
    },
    {
        id: 2,
        title: "Youth Fellowship Night",
        description: "An evening of fun and spiritual growth for our youth.",
        date: "2025-02-01",
        image: "/assets/bible_study.jpg",
        link: "/events/2",
    },
    {
        id: 3,
        title: "Revival Seminar",
        description: "A day for revival.",
        date: "2025-02-05",
        image: "/assets/revival_2025.jpg",
        link: "/events/3",
    },
    {
        id: 4,
        title: "Revival Seminar",
        description: "A day for revival.",
        date: "2025-02-01",
        image: "/assets/revival_2025.jpg",
        link: "/events/3",
    },
];


export const useEvents = () => {
   return {
       events
   }
}