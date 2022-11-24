import React, {useEffect} from 'react'
import "leaflet-geosearch/dist/geosearch.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";



function MapSearch () {
    const map = useMap();
    useEffect(() => {
      const provider = new OpenStreetMapProvider();
  
      const searchControl = new GeoSearchControl({
        provider,
        marker: {
          icon
        }
      });
  
      map.addControl(searchControl);
  
      return () => map.removeControl(searchControl);
    }, []);
  
    return null;
  }

  export default MapSearch 