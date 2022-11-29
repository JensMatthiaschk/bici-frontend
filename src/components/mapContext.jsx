import { createContext, useState } from 'react';

export const MapContext = createContext();

const MapContextProvider = (props) => {
    const [marker, setMarker] = useState('');


    return (
        <MapContext.Provider value={{ marker, setMarker }}>
            {props.children}
        </MapContext.Provider>
    );
}




export default MapContextProvider;

