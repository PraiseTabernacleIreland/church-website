const events = [
    {
        id: 1,
        title: "Ladies Fellowship (in person)",
        description: "Join us for an in-person Ladies Fellowship, where we connect, encourage, and grow together in faith",
        date: {
            from: "2025-03-08",
            to: "2025-03-08",
        },
        image: `${process.env.PUBLIC_URL}/assets/event-placeholder.jpg`,
        link: "/events/1",
    },
    {
        id: 2,
        title: "Ladies Fellowship (online)",
        description: "Distance won’t stop us from growing together! Join our online Ladies Fellowship for an uplifting time of prayer, discussion, and encouragement from the comfort of your home",
        date: {
            from: "2025-04-12",
            to: "2025-04-12",
        },
        image: `${process.env.PUBLIC_URL}/assets/event-placeholder.jpg`,
        link: "/events/1",
    },
    {
        id: 3,
        title: "Ladies Fellowship (in person)",
        description: "Join us for an in-person Ladies Fellowship, where we connect, encourage, and grow together in faith",
        date: {
            from: "2025-05-03",
            to: "2025-05-03"
        },
        image: `${process.env.PUBLIC_URL}/assets/event-placeholder.jpg`,
        link: "/events/1",
    },
    {
        id: 4,
        title: "Ladies Fellowship (in person)",
        description: "Join us for an in-person Ladies Fellowship, where we connect, encourage, and grow together in faith",
        date: { from: "2025-06-07", to: "2025-06-07" },
        image: `${process.env.PUBLIC_URL}/assets/event-placeholder.jpg`,
        link: "/events/1",
    },
    {
        id: 5,
        title: "Ladies Fellowship (in person)",
        description: "Join us for an in-person Ladies Fellowship, where we connect, encourage, and grow together in faith",
        date: { from: "2025-07-05", to: "2025-07-05" },
        image: `${process.env.PUBLIC_URL}/assets/event-placeholder.jpg`,
        link: "/events/1",
    },
    {
        id: 6,
        title: "Ladies Fellowship (in person)",
        description: "Join us for an in-person Ladies Fellowship, where we connect, encourage, and grow together in faith",
        date: { from: "2025-08-02", to: "2025-08-02" },
        image: `${process.env.PUBLIC_URL}/assets/event-placeholder.jpg`,
        link: "/events/1",
    },
    {
        id: 7,
        title: "Ladies Fellowship (online)",
        description: "Distance won’t stop us from growing together! Join our online Ladies Fellowship for an uplifting time of prayer, discussion, and encouragement from the comfort of your home",
        date: { from: "2025-09-13", to: "2025-09-13" },
        image: `${process.env.PUBLIC_URL}/assets/event-placeholder.jpg`,
        link: "/events/1",
    },
    {
        id: 8,
        title: "Ladies Conference",
        description: "A powerful gathering of women to worship, learn, and grow in faith. This conference is designed to equip, inspire, and encourage every woman in her walk with God",
        date: { from: "2025-10-10", to: "2025-10-12" },
        image: `${process.env.PUBLIC_URL}/assets/revival_2025.jpg`,
        link: "/events/3",
    },
    {
        id: 11,
        title: "Ladies Fellowship (online)",
        description: "Distance won’t stop us from growing together! Join our online Ladies Fellowship for an uplifting time of prayer, discussion, and encouragement from the comfort of your home",
        date: { from: "2025-11-08", to: "2025-11-08" },
        image: `${process.env.PUBLIC_URL}/assets/event-placeholder.jpg`,
        link: "/events/1",
    },
    {
        id: 12,
        title: "Men's Fellowship",
        description: "A time for men to gather, share, and grow in their faith and leadership. This fellowship is about brotherhood, encouragement, and sharpening one another as we walk in our purpose.",
        date: { from: "2025-03-29", to: "2025-03-29" },
        image: `${process.env.PUBLIC_URL}/assets/event-placeholder.jpg`,
        link: "/events/1",
    },
    {
        id: 13,
        title: "Christmas Party",
        description: "It’s that time of the year! Join us for a festive celebration filled with joy and fellowship.",
        date: { from: "2025-12-14", to: "2025-12-14" },
        image: `${process.env.PUBLIC_URL}/assets/event-placeholder.jpg`,
        link: "/events/1",
    },
    {
        id: 14,
        title: "Easter Conference",
        description: "Come and experience a life-changing Easter Conference as we celebrate the death and resurrection of Jesus Christ.",
        date: { from: "2025-04-18", to: "2025-04-20" },
        image: `${process.env.PUBLIC_URL}/assets/event-placeholder.jpg`,
        link: "/events/1",
    },
    {
        id: 17,
        title: "Easter Conference (Youth)",
        description: "This youth-focused Easter Conference is a time for young people to grow in faith, worship passionately, and connect with other believers. ",
        date: { from: "2025-04-18", to: "2025-04-21" },
        image: `${process.env.PUBLIC_URL}/assets/event-placeholder.jpg`,
        link: "/events/1",
    },
    {
        id: 21,
        title: "All Night Prayer",
        description: "Join us for an All Night Prayer as we seek God’s presence, intercede for our families, and stand in faith for breakthroughs.",
        date: { from: "2025-04-05", to: "2025-04-05" },
        image: `${process.env.PUBLIC_URL}/assets/event-placeholder.jpg`,
        link: "/events/1",
    },
    {
        id: 22,
        title: "Helsinki Conference",
        description: "Join believers from across the region for a powerful time of worship, teaching, and spiritual renewal.",
        date: { from: "2025-06-15", to: "2025-06-15" },
        image: `${process.env.PUBLIC_URL}/assets/event-placeholder.jpg`,
        link: "/events/1",
    },
];

export const formatDate = (dateObject: { date: {from: string, to: string}}) => {

    const formatOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }

    if(dateObject.date.from === dateObject.date.to) {
        return new Date(dateObject.date.from).toLocaleDateString("en-US", formatOptions)
    }

    return `${new Date(dateObject.date.from).toLocaleDateString("en-US", formatOptions)} - ${new Date(dateObject.date.to).toLocaleDateString("en-US",formatOptions)}`
}

const getUpcomingEvents = () => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

    return events
        .filter(event => event.date.from >= today) // Filter only future events
        .sort((a, b) => new Date(a.date.from) - new Date(b.date.from)); // Sort by ascending date
};

export const useEvents = () => {

    const futureEvents = getUpcomingEvents();

    return {
        events,
        futureEvents
    }
}