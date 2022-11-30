import { createContext, useState } from 'react';

export const MapContext = createContext();

const MapContextProvider = (props) => {
    const [marker, setMarker] = useState('');
    const [searchedMarkers, setSearchedMarkers] = useState([]);



    return (
        <MapContext.Provider value={{ marker, setMarker, searchedMarkers, setSearchedMarkers }}>
            {props.children}
        </MapContext.Provider>
    );
}




export default MapContextProvider;

