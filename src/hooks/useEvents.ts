const events = [
    {
        id: 1,
        title: "Big Sunday Service",
        description: "Join us for a special Sunday service full of worship and fellowship.",
        date: "2025-01-28",
        image: `${process.env.PUBLIC_URL}/assets/big_sunday.jpg`,
        link: "/events/1",
    },
    {
        id: 2,
        title: "Youth Fellowship Night",
        description: "An evening of fun and spiritual growth for our youth.",
        date: "2025-02-01",
        image: `${process.env.PUBLIC_URL}/assets/bible_study.jpg`,
        link: "/events/2",
    },
    {
        id: 3,
        title: "Revival Seminar",
        description: "A day for revival.",
        date: "2025-02-05",
        image: `${process.env.PUBLIC_URL}/assets/revival_2025.jpg`,
        link: "/events/3",
    },
    {
        id: 4,
        title: "Revival Seminar",
        description: "A day for revival.",
        date: "2025-02-01",
        image: `${process.env.PUBLIC_URL}/assets/revival_2025.jpg`,
        link: "/events/3",
    },
    {
        id: 5,
        title: "Revival Seminar",
        description: "A day for revival.",
        date: "2025-02-08",
        image: `${process.env.PUBLIC_URL}/assets/event_2.jpg`,
        link: "/events/3",
    },
    {
        id: 6,
        title: "Revival Seminar",
        description: "A day for revival.",
        date: "2025-02-09",
        image: `${process.env.PUBLIC_URL}/assets/event_3.jpg`,
        link: "/events/3",
    },
    {
        id: 7,
        title: "Revival Seminar",
        description: "A day for revival and miracles",
        date: "2025-02-09",
        image: `${process.env.PUBLIC_URL}/assets/event_4.jpg`,
        link: "/events/3",
    },
    {
        id: 8,
        title: "Revival Seminar",
        description: "A day for revival and miracles",
        date: "2025-02-10",
        image: `${process.env.PUBLIC_URL}/assets/event_5.jpg`,
        link: "/events/3",
    },
];


export const useEvents = () => {
   return {
       events
   }
}