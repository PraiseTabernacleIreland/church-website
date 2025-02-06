import {useEffect, useState} from "react";

export interface YoutubeSearchResult {
    "kind": "youtube#searchResult",
    "etag": string,
    "id": {
        "kind": string,
        "videoId": string,
        "channelId": string,
        "playlistId": string
    },
    "snippet": {
        "publishedAt": Date,
        "channelId": string,
        "title": string,
        "description": string,
        "thumbnails": {
            [key: string]: {
                "url": string,
                "width": number,
                "height": number
            }
        },
        "channelTitle": string,
        "liveBroadcastContent": string

    }
}

export interface YoutubeSearchResults {
    "items": YoutubeSearchResult[]
}


const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const CHANNEL_ID = "UCahHVAvlRT-fe7-JmGzZpTw";
const MAX_NUMBER_OF_RESULTS = 5;

export const useYoutubeChannelDetails = () => {
    const [videos, setVideos] = useState<YoutubeSearchResult[]>([]);
    const [liveVideo, setLiveVideo] = useState<YoutubeSearchResult | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchVideos = async () => {
            if (!GOOGLE_API_KEY || !CHANNEL_ID) {
                setError("Missing Google API Key or Channel ID");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_NUMBER_OF_RESULTS}`
                );

                if (!response.ok) {
                    throw new Error(`Failed to fetch videos: ${response.statusText}`);
                }

                const data: YoutubeSearchResults = await response.json();

                if (data.items) {
                    // Find the live stream video
                    const liveStream = data.items.find(
                        (item) => item.snippet.liveBroadcastContent === "live"
                    );

                    setLiveVideo(liveStream || null); // Update live video
                    setVideos(data.items); // Update video list
                }
            } catch (error) {
                console.error("Error fetching YouTube videos:", error);
                setError((error as Error).message);
            } finally {
                setLoading(false); // Ensure loading state is set to false
            }
        };

        fetchVideos();
    }, []); // Empty dependency array to ensure this runs only on mount

    // Expose state variables and return values
    return {
        videos,
        liveVideo,
        loading,
        error,
    };
}