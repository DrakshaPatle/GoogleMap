

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from '@chakra-ui/react'

import { AspectRatio } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import { TrafficLayer } from '@react-google-maps/api'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'

const center = { lat: 48.8584, lng: 2.2945 }

function Dashboard() {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */(null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const [showTraffic, setShowTraffic] = useState(false);


/** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    return <SkeletonText />
  }



  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })

    console.log(results)

    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }





// this code is for decoding the polyline

  const decode = encoded => {
    var points = [];
    var index = 0,
      len = encoded.length;
    var lat = 0,
      lng = 0;
    while (index < len) {
      var b,
        shift = 0,
        result = 0;
      do {
        b = encoded.charAt(index++).charCodeAt(0) - 63; //finds ascii
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      var dlat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
      lat += dlat;
      shift = 0;
      result = 0;
      do {
        b = encoded.charAt(index++).charCodeAt(0) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      var dlng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
      lng += dlng;

      points.push({ lat: lat / 1e5, lng: lng / 1e5 });
    }
    return points;
  };






  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
  }





  return (

    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
       minWidth='max-content'
      h='100vh'
      w='100vw'
      gap='20'
    >

        <Box
        p={4}
        borderRadius='lg'
        m={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='1'
        alignItems='center'
        // backgroundColor='#E2E8F0
        // '
        w={['100%', '90%', '80%', '70%']}


      >

        <HStack spacing={2} justifyContent='space-between'>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input type='text' placeholder='Origin' ref={originRef} />
            </Autocomplete>
          </Box>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
              />
            </Autocomplete>
          </Box>

          <ButtonGroup>
            <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
              Calculate Route
            </Button>

            <Button onClick={() => setShowTraffic(!showTraffic)}>Toggle Traffic Layer</Button>

            <IconButton
              aria-label='center back'
              icon={<FaTimes />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>


        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          <IconButton
            aria-label='center back'
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center)
              map.setZoom(15)
            }}
          />
        </HStack>

      </Box>

      {/*  */}

      <Box overflowX="auto" overflowY="auto">
        <Box maxW="100%" h="800px" w="1200px" pos="relative">
          {/* <Box as="iframe"
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.3611599827586!2d-122.40636468416356!3d37.78552657976017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806e7c3a952d%3A0x33b603876a69a167!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1615865723251!5m2!1sen!2sus"
        w="100%"
        h="100%"
        pos="absolute"
        top="0"
        left="0"
      />
      */}

          
                  <Box position='absolute' left={0} top={0} h='100%' w='100%'  alignItems='center' 
                  
                  // backgroundColor='#FED7D7'


> 
          {/* Google Map Box */}
          <AspectRatio ratio={16 / 9}>
          <GoogleMap

            center={center}
            zoom={10}
            mapContainerStyle={{ alignItems: 'center', marginTop: "5px", marginLeft: "10px", width: '100%', height: '100%  ', marginBottom:"20px" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={map => setMap(map)}
          >

            <Marker position={center} />

            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}


            {showTraffic && (
              <TrafficLayer />
            )}

          </GoogleMap>
          </AspectRatio>
          </Box>  
        </Box>
      </Box>




    </Flex>
  )
}

export default Dashboard













