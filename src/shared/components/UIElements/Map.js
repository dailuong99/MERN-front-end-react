// import React, { useEffect, useRef } from "react";
// import "./Map.css";

// const MapView = (props) => {
//   const mapRef = useRef();
//   const { center, zoom } = props;

//   console.log(center);
//   console.log(mapRef);


//   useEffect(() => {
//     const map = new window.google.maps.Map(mapRef.current, {
//       center: props.center,
//       zoom: props.zoom
//     });
  
//     new window.google.maps.Marker({ position: props.center, map: map });
//   }, [center, zoom]);  

//   return (
//     <div
//       ref={mapRef}
//       className={`map ${props.className}`}
//       style={props.style}
//     ></div>
//   );
// };

// export default MapView;


import React, { useRef, useEffect } from 'react';
 
import './Map.css';
 
const Map = props => {
  const mapRef = useRef();
  
  const { center, zoom } = props;
 
  useEffect(() => {
    new window.ol.Map({
      target: mapRef.current.id,
      layers: [
        new window.ol.layer.Tile({
          source: new window.ol.source.OSM()
        })
      ],
      view: new window.ol.View({
        center: window.ol.proj.fromLonLat([center.lng, center.lat]),
        zoom: zoom
      })
    });
  }, [center, zoom]);
 
  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};
 
export default Map;