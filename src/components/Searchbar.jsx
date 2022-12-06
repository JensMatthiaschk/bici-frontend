import React, { useContext, useState } from "react";
import { Form } from "react-router-dom";
import { MapContext } from "../components/mapContext";
import { useMap, Marker, Popup } from "react-leaflet";
const initialSearch = window.location.search.split("=")[1] || "";

export default function Searchbar() {
  const [search, setSearch] = useState(initialSearch);
  const { searchedMarkers, setSearchedMarkers } = useContext(MapContext);
  const { searchToggle, setSearchToggle } = useContext(MapContext);
  console.log("search", searchedMarkers);

  const handleSearchSubmit = (e) => {
    setSearchToggle(false);
    e.preventDefault();
    const placeSearched = `https://dev.virtualearth.net/REST/v1/Locations/?query=${search}&maxResults=1&key=AoqHihRk2OT53P1kI_39CCr6qbxPrJ4bQwJG-9au9bz-CQ0bjbPllLhnOOlCX2kA`;
    console.log(placeSearched);

    fetch(placeSearched)
      .then((res) => res.json())
      .then((data) => {
        if (data.resourceSets[0].estimatedTotal > 0) {
          setSearchedMarkers(data.resourceSets[0].resources[0].point);
          console.log("a", searchedMarkers);
        } else {
          setSearchedMarkers([]);
          console.log("b", searchedMarkers);
        }
      });
  };

  return (
    <div>
      <Form onSubmit={handleSearchSubmit}>
        <div className="input-group">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="input input-bordered"
            name="query"
          />
          <button types="submit" className="btn  btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </Form>
    </div>
  );
}
