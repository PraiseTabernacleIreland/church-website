import { useState, useEffect } from 'react';
import { loadEvents } from '../utils/contentLoader';

// Fallback events in case CMS content fails to load
const fallbackEvents = [
    {
        id: 1,
        title: "Ladies Fellowship (in person)",
        description: "Join us for an in-person Ladies Fellowship, where we connect, encourage, and grow together in faith",
        date: {
            from: "2025-03-08",
            to: "2025-03-08",
        },
        image: `/assets/event-placeholder.jpg`,
        link: "/events/1",
    },
    {
        id: 14,
        title: "Easter Conference",
        description: "Come and experience a life-changing Easter Conference as we celebrate the death and resurrection of Jesus Christ.",
        date: { from: "2025-04-18", to: "2025-04-20" },
        image: `/assets/event-placeholder.jpg`,
        link: "/events/1",
    },
];

let eventsCache: any[] | null = null;

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

const getUpcomingEvents = (events: any[]) => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

    return events
        .filter(event => event.date.from >= today) // Filter only future events
        .sort((a, b) => new Date(a.date.from).getTime() - new Date(b.date.from).getTime()); // Sort by ascending date
};

export const useEvents = () => {
    const [events, setEvents] = useState<any[]>(fallbackEvents);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            // Use cache if available
            if (eventsCache) {
                setEvents(eventsCache);
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const loadedEvents = await loadEvents();
                
                if (loadedEvents.length > 0) {
                    eventsCache = loadedEvents;
                    setEvents(loadedEvents);
                } else {
                    // Use fallback if no events loaded
                    setEvents(fallbackEvents);
                }
            } catch (error) {
                console.error('Failed to load events:', error);
                setEvents(fallbackEvents);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const futureEvents = getUpcomingEvents(events);

    return {
        events,
        futureEvents,
        loading
    }
}
