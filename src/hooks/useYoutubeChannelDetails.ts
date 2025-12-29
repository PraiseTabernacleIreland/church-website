import { useEffect, useState } from "react";
import { getWithExpiry, setWithExpiry } from "../utils/storage";

/**
 * Represents a single YouTube search result from the YouTube Data API v3
 */
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

/**
 * Response structure from YouTube Data API v3 search endpoint
 */
export interface YoutubeSearchResults {
    "items": YoutubeSearchResult[]
}

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const CHANNEL_ID = "UCahHVAvlRT-fe7-JmGzZpTw";
const MAX_NUMBER_OF_RESULTS = 6;
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

/**
 * Custom hook to fetch and manage YouTube channel videos and live streams
 * 
 * This hook fetches videos from a specific YouTube channel using the YouTube Data API v3.
 * It implements local storage caching with a 1-hour TTL to minimize API calls and improve performance.
 * The hook automatically detects and separates live streaming videos from regular uploads.
 * 
 * @returns {Object} An object containing:
 * - videos: Array of all video results from the channel
 * - liveVideo: The currently live streaming video (if any), null otherwise
 * - loading: Boolean indicating if data is being fetched
 * - error: Error message string if fetch fails, null otherwise
 * 
 * @example
 * const { videos, liveVideo, loading, error } = useYoutubeChannelDetails();
 * 
 * if (loading) return <Spinner />;
 * if (error) return <Error message={error} />;
 * if (liveVideo) return <LiveStream video={liveVideo} />;
 * 
 * @requires REACT_APP_GOOGLE_API_KEY environment variable must be set
 */
export const useYoutubeChannelDetails = () => {
    const [videos, setVideos] = useState<YoutubeSearchResult[]>([]);
    const [liveVideo, setLiveVideo] = useState<YoutubeSearchResult | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchVideos = async () => {
            const cachedData = getWithExpiry('praise-data');

            if (cachedData) {
                setLiveVideo(cachedData.live || null);
                setVideos(cachedData.videos);
                setLoading(false);
            } else {
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
                        const liveStream = data.items.find(
                            (item) => item.snippet.liveBroadcastContent === "live"
                        );

                        setLiveVideo(liveStream || null);
                        setVideos(data.items);

                        setWithExpiry('praise-data', {
                            live: liveStream,
                            videos: data.items
                        }, CACHE_DURATION);
                    }
                } catch (error) {
                    console.error("Error fetching YouTube videos:", error);
                    setError((error as Error).message);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchVideos();
    }, []);

    return {
        videos,
        liveVideo,
        loading,
        error,
    };
}
