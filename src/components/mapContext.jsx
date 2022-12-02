import { createContext, useState } from 'react';

export const MapContext = createContext();

const MapContextProvider = (props) => {
    const [marker, setMarker] = useState('');
    const [searchedMarkers, setSearchedMarkers] = useState([]);
    const [searchToggle, setSearchToggle] = useState(false)
    const [bounds, setBounds] = useState([])
    const [mapPins, setMapPins] = useState('')
    const [pinId, setPinId] = useState('')



    return (
        <MapContext.Provider value={{
            marker, setMarker,
            searchedMarkers, setSearchedMarkers,
            searchToggle, setSearchToggle,
            bounds, setBounds,
            mapPins, setMapPins,
            pinId, setPinId
        }}>
            {props.children}
        </MapContext.Provider>
    );
}




export default MapContextProvider;

