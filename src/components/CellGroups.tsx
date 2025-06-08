import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Polygon, Marker } from '@react-google-maps/api';
import geoJson from '../assets/ie.json';
import { Box, Typography, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const countyCoordinates = {
    'Dublin': { lat: 53.349805, lng: -6.26031 },
    'Cork': { lat: 51.8985, lng: -8.4756 },
    'Galway': { lat: 53.2707, lng: -9.0568 },
    'Limerick': { lat: 52.6638, lng: -8.6267 },
    'Waterford': { lat: 52.2583, lng: -7.1194 },
    'Wexford': { lat: 52.3361, lng: -6.4629 },
    'Kilkenny': { lat: 52.6541, lng: -7.2448 },
    'Kerry': { lat: 52.1545, lng: -9.5669 },
    'Clare': { lat: 52.9045, lng: -9.4905 },
    'Mayo': { lat: 53.8008, lng: -9.5228 },
    'Donegal': { lat: 54.6538, lng: -8.1096 },
    'Sligo': { lat: 54.2766, lng: -8.4761 },
    'Leitrim': { lat: 54.1937, lng: -8.0189 },
    'Roscommon': { lat: 53.6272, lng: -8.1894 },
    'Westmeath': { lat: 53.534, lng: -7.4653 },
    'Longford': { lat: 53.7274, lng: -7.7939 },
    'Offaly': { lat: 53.2734, lng: -7.4886 },
    'Laois': { lat: 53.0322, lng: -7.2994 },
    'Tipperary': { lat: 52.4735, lng: -8.1619 },
    'Carlow': { lat: 52.8365, lng: -6.9341 },
    'Kildare': { lat: 53.212, lng: -6.8199 },
    'Meath': { lat: 53.6054, lng: -6.6564 },
    'Louth': { lat: 53.9142, lng: -6.5416 },
    'Monaghan': { lat: 54.249, lng: -6.9681 },
    'Cavan': { lat: 53.991, lng: -7.3607 },
    'Wicklow': { lat: 52.9801, lng: -6.0498 }
};

const cellLeaders = {
    'Dublin': { name: 'John Doe', contact: 'john.doe@example.com', image: `/assets/gerard.jpg` },
    'Wicklow': { name: 'Jane Smith', contact: 'jane.smith@example.com', image: `/assets/gerard.jpg` },
    'Kildare': { name: 'Michael Brown', contact: 'michael.brown@example.com', image: `/assets/gerard.jpg` },
    'Meath': { name: 'Sarah Johnson', contact: 'sarah.johnson@example.com', image: `/assets/gerard.jpg` },
    'Galway': { name: 'Sarah Bopsy', contact: 'sarah.johnson@example.com', image: `/assets/gerard.jpg` },
    'Donegal': { name: 'Sarah Bopsy', contact: 'sarah.johnson@example.com', image: `/assets/gerard.jpg` },
    'Louth': { name: 'Sarah Bopsy', contact: 'sarah.johnson@example.com', image: `/assets/gerard.jpg` },
    // Add more counties and leaders here
};

const CountyMap = (countyMapProps: any) => {
    const [geoJsonData, setGeoJsonData] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [autocomplete, setAutocomplete] = useState(null);
    const [selectedCounty, setSelectedCounty] = useState(null);

    useEffect(() => {
        setGeoJsonData(geoJson);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                () => console.log('Geolocation not supported or permission denied')
            );
        }
    }, []);

    const getCountyCoordinates = (countyName) => {
        if (!geoJsonData) return [];
        const county = geoJsonData.features.find(
            (feature) => feature.properties.name === countyName
        );
        if (county) {
            return county.geometry.coordinates[0].map((coord) => ({
                lat: coord[1],
                lng: coord[0],
            }));
        }
        return [];
    };

    const handlePlaceChanged = () => {
        if (autocomplete !== null) {
            const place = autocomplete.getPlace();
            if (place.geometry) {
                setUserLocation({
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                });
            }
        } else {
            console.log('Autocomplete is not loaded yet!');
        }
    };

    const handlePolygonClick = (countyName) => {
        setSelectedCounty(countyName);
    };

    const handleClose = () => {
        setSelectedCounty(null);
    };

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={countyCoordinates[countyMapProps.submittedCounty]}
                zoom={8}
            >
                <Marker position={countyCoordinates[countyMapProps.submittedCounty]} />

                {Object.keys(cellLeaders).map((county) => (
                    <Polygon
                        key={county}
                        paths={getCountyCoordinates(county)}
                        options={{
                            fillColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
                            fillOpacity: 0.4,
                            strokeColor: '#FF0000',
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                        }}
                        onClick={() => handlePolygonClick(county)}
                    />
                ))}
            </GoogleMap>

            <Modal open={!!selectedCounty} onClose={handleClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 300,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    textAlign: 'center'
                }}>
                    <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6">Cell Leader for {selectedCounty}</Typography>
                    <img src={cellLeaders[selectedCounty]?.image} alt={cellLeaders[selectedCounty]?.name} style={{ width: '100%', borderRadius: '8px', margin: '10px 0' }} />
                    <Typography variant="body1">Name: {cellLeaders[selectedCounty]?.name}</Typography>
                    <Typography variant="body1">Contact: {cellLeaders[selectedCounty]?.contact}</Typography>
                </Box>
            </Modal>
        </LoadScript>
    );
};

export default CountyMap;
