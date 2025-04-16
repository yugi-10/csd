import React, { useEffect, useState, useContext } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { useContext } from 'react';
import UserContext from  './UserContext';
import '../css_files/Track.css';

const containerStyle = {
  width: '100%',
  height: '100vh'
};
async function getCoordinates(address) {
  if (!address) {
    throw new Error('Address is not defined');
  }
  const encodedAddress = encodeURIComponent(address);
  const response = await fetch(`https://us1.locationiq.com/v1/search?key=pk.<ACCESS_TOKEN>&q=${encodedAddress}&format=json`);
  const data = await response.json();
  // console.log(data);
  if (data && data.length > 0) {
    const location={
    lat: parseFloat(data[0].lat),
    lng : parseFloat(data[0].lon)
    };
    return location;
  } else {
    throw new Error('No results found');
  }
}

function Track() {
  const { user } = useContext(UserContext);
  const userAddress = user.address;
  console.log(userAddress);
  const [location, setLocation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null); // New state for current location
  const [speed, setSpeed] = useState(0); 
 // Get current location

 if (!user) {
  alert('Access Restricted! To track your activites,kindely log in or sign up')
  // return <div><h1>User not exits</h1></div>;
}
 let watchId;
 if (navigator.geolocation) {
  watchId = navigator.geolocation.watchPosition((position) => {
    if (position) {
    setCurrentLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
    const speedInCmPerMs = (position.coords.speed !== null ? position.coords.speed : 0) * 10/1000; // Convert speed to cm/s
    setSpeed(speedInCmPerMs);
    console.log(`Speed: ${speedInCmPerMs} cm/ms`); // Log the speed

    if (speedInCmPerMs > 0) {
      console.log('Speed limit exceeded');
      alert('Speed limit exceeded');
    }

  }
  
  }, (error) => {
    console.error("Error getting geolocation:", error);
  });
} else {
  alert("Geolocation is not supported by this browser.");
}
  // const { user } = useContext(UserContext);
  // console.log(user);

  
  useEffect(() => {
    getCoordinates(userAddress).then(location => {
      setLocation(location);
    }).catch(error => {
      console.error(error);
    });

    setTimeout(() => {
      setSpeed(10); // Change this value to whatever you want
      // setNotification('Bus speed limit exceeded');
      console.log('Bus speed limit exceeded');
      alert('Bus speed limit exceeded'); 
    }, 15000);
    return () => {
      
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }

    };
  }, [userAddress]);

  return (
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location ? location : { lat: 0, lng: 0 }}
        zoom={10}
      >
        {location && <Marker position={location} />}
        {currentLocation && <Marker position={currentLocation} />} {/* New marker for current location */}
      </GoogleMap>
    </LoadScript>
  );
}


// function Track() {
//   const { user } = useContext(UserContext);
//   console.log(user);

//   const userAddress=user.address;
//   console.log(userAddress);
//   const [location, setLocation] = useState(null);
//   const [speed, setSpeed] = useState(0); // New state for speed
//   const [notification, setNotification] = useState(null);
//   useEffect(() => {
//     let watchId;  //speed
//     if (navigator.geolocation) {
//       watchId=navigator.geolocation.watchPosition((position) => {  //watch id && getcurrentposition/watch position
//         setLocation({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//         setSpeed(position.coords.speed); 
//         // Inside watchPosition callback
       
// if (position.coords.speed > 0) {
//   setNotification('Bus speed limit exceeded');
//   console.log('Bus speed limit exceeded');
// }// Update speed
//     },
//     (error) => {
//       console.error("Error getting geolocation:", error);
//     },
//     {
//       enableHighAccuracy: true // Enable high accuracy for better speed calculation
//     }
//       );
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//       // Cleanup function to stop watching the user's position when the component unmounts
//       return () => {
//         if (watchId) {
//           navigator.geolocation.clearWatch(watchId);
//         }
//       };
//   }, []);
// //  console.log(Speed: ${speed ? speed : 0} m/s); // Log the speed
//   console.log(`Speed: ${speed ? speed : 0}m/s`);
//   return (
//     <LoadScript
//       googleMapsApiKey="Apkey "
//        >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={location ? location : { lat: 0, lng: 0 }} // Conditionally set center
//         zoom={10}
//       >
//        {location && <Marker position={location} />}
//        {/* {userAddress && <Marker position={userAddress} />} */}
//       </GoogleMap>
//     </LoadScript>
//   );
// }

export default Track;
