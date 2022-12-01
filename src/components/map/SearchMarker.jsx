import { useState, useEffect, useContext } from 'react'
import { foundPin } from './Icons.js'
import { useMap, Marker, Popup } from 'react-leaflet'
import { MapContext } from "../mapContext";
import { geoToObj } from '../../latlng.js';

function SearchedMarker() {
    const { searchedMarkers, setSearchedMarkers } = useContext(MapContext);
    const map = useMap();
    useEffect(() => {
        console.log(searchedMarkers)
        if (searchedMarkers.coordinates) {
            map.flyTo(searchedMarkers.coordinates, map.getZoom());
        }
    }, [searchedMarkers]);

    return searchedMarkers.length === 0 ? null : (
        <Marker position={geoToObj(searchedMarkers.coordinates)} icon={foundPin}>
            <Popup>{searchedMarkers.coordinates}</Popup>
        </Marker>
    );
}

export default SearchedMarker
