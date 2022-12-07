import { createContext, useState } from "react";

export const MapContext = createContext();

const MapContextProvider = (props) => {
  const [marker, setMarker] = useState("");
  const [searchedMarkers, setSearchedMarkers] = useState([]);
  const [searchToggle, setSearchToggle] = useState(false);
  const [bounds, setBounds] = useState([]);
  const [mapPins, setMapPins] = useState([]);
  const [pinId, setPinId] = useState("");
  const [commentData, setCommentData] = useState([]);
  const [pinRatings, setPinRatings] = useState([]);
  const [drawerPin, setDrawerPin] = useState([]);

  const [filter, setFilter] = useState({
    camping: true,
    events: true,
    host: true,
    repair: true,
    shower: true,
    swim: true,
  });

  return (
    <MapContext.Provider
      value={{
        filter,
        setFilter,
        marker,
        setMarker,
        searchedMarkers,
        setSearchedMarkers,
        searchToggle,
        setSearchToggle,
        bounds,
        setBounds,
        mapPins,
        setMapPins,
        pinId,
        setPinId,
        commentData,
        setCommentData,
        pinRatings,
        setPinRatings,
        drawerPin,
        setDrawerPin,
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
};

export default MapContextProvider;
