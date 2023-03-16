



import React, { useState } from 'react';
// import { Container, Row, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const mapContainerStyle = {
    height: "100%",
    width: "100%",

};

const center = {
    lat: 41.3851,
    lng: 2.1734
};

const options = {
    disableDefaultUI: true,
};


const Dashboard = () => {

    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [response, setResponse] = useState(null);

    const directionsCallback = (res) => {
        if (res !== null) {
            setResponse(res);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (origin !== "" && destination !== "") {
            setResponse(null);
        }
    }
    return (



        <div className="map-container">
            <iframe src="https://maps.google.com/maps?q=Tangesir%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="1300" height="1300"  allowfullscreen></iframe>

        </div>
    );
};

export default Dashboard;