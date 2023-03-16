
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp  from './components/NavbarComp'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';

const App = () => {
  return (
    <BrowserRouter>
     <NavbarComp/>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;


// import 'bootstrap/dist/css/bootstrap.min.css'

// import React, { useState } from 'react';
// import { Navbar, Nav, Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

// const mapContainerStyle = {
//   height: "100vh",
//   width: "100%",
// };

// const center = {
//   lat: 41.3851,
//   lng: 2.1734
// };

// const options = {
//   disableDefaultUI: true,
// };

// function App() {
//   const [origin, setOrigin] = useState("");
//   const [destination, setDestination] = useState("");
//   const [response, setResponse] = useState(null);

//   const directionsCallback = (res) => {
//     if (res !== null) {
//       setResponse(res);
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (origin !== "" && destination !== "") {
//       setResponse(null);
//     }
//   }

//   return (
//     <div>



//       <Navbar bg="dark" variant="dark" fixed="top">
//         <Container>
//           <Navbar.Brand href="#home">My App</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>




//       <Container fluid>

//         <Row>


//           <Col md={3} className="bg-light sidebar">

//             {/* <Form onSubmit={handleSubmit}>


//               <Form.Group>
//                 <Form.Label>Origin</Form.Label>
//                 <Form.Control type="text" placeholder="Enter origin" value={origin} onChange={(e) => setOrigin(e.target.value)} />
//               </Form.Group>


//               <Form.Group>
//                 <Form.Label>Destination</Form.Label>
//                 <Form.Control type="text" placeholder="Enter destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
//               </Form.Group>
//               <Button variant="primary" type="submit">Submit</Button>
//             </Form> */}



            
//           </Col>



//           <Col md={9} className="map-container">
//             <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
//               <GoogleMap
//                 mapContainerStyle={mapContainerStyle}
//                 center={center}
//                 zoom={10}
//                 options={options}
//               >
//                 {response !== null && (
//                   <DirectionsRenderer
//                     directions={response}
//                   />
//                 )}

//                 {origin !== "" && destination !== "" && (
//                   <DirectionsService
//                     options={{
//                       destination: destination,
//                       origin: origin,
//                       travelMode: 'DRIVING'
//                     }}
//                     callback={directionsCallback}
//                   />
//                 )}
//               </GoogleMap>
//             </LoadScript>
//           </Col>



//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default App;
