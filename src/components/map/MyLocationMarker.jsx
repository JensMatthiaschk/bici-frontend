import { useState, useEffect } from 'react'
import { myIcon } from './Icons.js'
import { useMap, Marker, Popup } from 'react-leaflet'

function MyLocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      console.log("12323", e.latlng)
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, []);

  return position === null ? null : (
    <Marker position={position} icon={myIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default MyLocationMarker
