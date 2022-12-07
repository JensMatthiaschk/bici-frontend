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
          <button types="submit" className="btn btn-square p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 font-medium"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </Form>
    </div>
  );
}
