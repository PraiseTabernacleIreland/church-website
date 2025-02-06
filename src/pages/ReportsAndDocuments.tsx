import React, { useEffect, useState, useRef } from "react";
import Hero from "../components/Hero";
import { MapContainer, TileLayer, Polygon, Popup, Marker, Circle, useMap, useMapEvents } from "react-leaflet";
import { Geocoder } from "leaflet-control-geocoder";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

// https://geojson.io/#map=11.35/53.355/-6.1996
const polygonsData = [
    {
        name: "Dublin",
        coordinates: [
            [53.36, -6.25],
            [53.37, -6.32]
        ],
        color: "purple",
    },
    {
        name: "Region B",
        coordinates: [
            [51.49, -0.08],
            [51.5, -0.09],
            [51.51, -0.07],
        ],
        color: "orange",
    },
    {
        name: "Phoenix park",
        coordinates: [
            [53.360001, -6.325000], // Approximate coordinates for Phoenix Park
            [53.360001, -6.315000],
            [53.350001, -6.315000],
            [53.350001, -6.325000]
        ],
        color: "orange",
    },
];

const imageUrl = '/assets/gerard.jpg'; // Path to your image

const PolygonMap = ({ polygons }) => {
    const [mapCenter, setMapCenter] = useState([53.3498, -6.2603]); // Default to Dublin City
    const [userLocation, setUserLocation] = useState(null);
    const [searchResult, setSearchResult] = useState(null);

    const mapRef = useRef();

    // Get User's Current Location
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const userCoords = [latitude, longitude];
                    setUserLocation(userCoords);
                    setMapCenter(userCoords); // Center map at user's location
                },
                (error) => {
                    console.warn("Error getting location:", error);
                    // If location is unavailable, keep the default map center
                }
            );
        }
    }, []);

    // Add Geocoder Control for Address Search
    const GeocoderControl = () => {
        const map = useMap();
        useEffect(() => {
            const control = new Geocoder().on("markgeocode", (e) => {
                const { lat, lng } = e.latlng;
                setSearchResult({ lat, lng });
                setMapCenter([lat, lng]);
            });

            // Add geocoder control to the map
            control.addTo(map);

            return () => {
                map.removeControl(control);
            };
        }, [map]);

        return null;
    };

    return (
        <MapContainer
            center={mapCenter} // Dynamically set map center
            zoom={13} // Default zoom level
            style={{ height: "500px", width: "100%" }}
            scrollWheelZoom={false} // Disable zooming via scroll
            doubleClickZoom={false} // Disable zooming via double-click
            zoomControl={true} // Enable zoom controls (+/- buttons)
            dragging={true} // Allow map dragging
            touchZoom={false} // Disable pinch zoom on touch devices
            whenCreated={(map) => (mapRef.current = map)} // Reference map instance
        >
            {/* Base Map Tiles */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Render Polygons */}
            {polygons.map((polygon, index) => (
                <Polygon
                    key={index}
                    positions={polygon.coordinates}
                    color={polygon.color || "blue"} // Default color is blue
                >
                    <Popup>
                        {<img
                            src={imageUrl}
                            alt="Overlay Image"
                            style={{
                                width: '100%', // Adjusts the width to fit the popup container
                                height: 'auto', // Keeps the aspect ratio intact
                            }}
                        />}
                    </Popup>
                </Polygon>
            ))}

            {/* User Location Marker */}
            {userLocation && (
                <>
                    <Marker position={userLocation}>
                        <Popup>You are here!</Popup>
                    </Marker>
                    <Circle
                        center={userLocation}
                        radius={100} // Radius in meters
                        color="blue"
                        fillColor="blue"
                        fillOpacity={0.2}
                    />
                </>
            )}

            {/* Display Marker for Search Result */}
            {searchResult && (
                <Marker position={searchResult}>
                    <Popup>
                        <b>Address:</b> {searchResult.lat.toFixed(4)}, {searchResult.lng.toFixed(4)}
                    </Popup>
                </Marker>
            )}

            {/* Add Geocoder Control for Search */}
            <GeocoderControl />
        </MapContainer>
    );
};

export const ReportsAndDocuments = () => {
    return (
        <>
            <Hero backGroundImageSrc={'url(/assets/reports.jpg)'} height={'60vh'}/>
            <PolygonMap polygons={polygonsData} />
        </>
    );
};