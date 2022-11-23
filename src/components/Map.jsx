import React from 'react'
import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function Map() {

  const pointsOfInterest = [
    {
      id: 1,
    latLong :[52.45724827787064, 13.540072899999998],
    name : "WBS-Codingschool"
    },
    {
      id: 2,
      latLong: [52.47678493299386, 13.399603934390937],
    name: "Tempelhof"
    }
  ]

  function LocationMarker() {
    const [position, setPosition] = useState(null);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }, []);

    return position === null ? null : (
      <Marker position={ position }>
        <Popup>You are here</Popup>
      </Marker>
      );
    }

  return (
<div className="Map"> 
 <div className="drawer">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
        <MapContainer center={[52.45724827787064, 13.540072899999998]} zoom={12} scrollWheelZoom={true} style = {{ width: '100vw' , height: '100vh'}}>
        <TileLayer
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=uXMr0o4kkFgSpwtCw09i"
        />
        {pointsOfInterest.map(({latLong, name}) =>
        <Marker key={ latLong } position={ latLong }>
            <Popup>
              <div className="card  w-100 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Album"/></figure>
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>Easily customizable.</p>
                  <div className="card-actions justify-end">
                    <label htmlFor="my-drawer" className="btn btn-sm btn-info drawer-button">More Info</label>
                  </div>
                </div>
              </div>
              
              
            </Popup>
        </Marker>
        )}
        <LocationMarker/>
        </MapContainer>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
           
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Map
