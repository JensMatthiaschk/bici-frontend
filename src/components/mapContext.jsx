import { createContext, useState } from 'react';

export const MapContext = createContext();

const MapContextProvider = (props) => {
    const [marker, setMarker] = useState('');
    const [searchedMarkers, setSearchedMarkers] = useState([]);
    const [searchToggle, setSearchToggle] = useState(false)


    return (
        <MapContext.Provider value={{
            marker, setMarker,
            searchedMarkers, setSearchedMarkers,
            searchToggle, setSearchToggle
        }}>
            {props.children}
        </MapContext.Provider>
    );
}




export default MapContextProvider;

