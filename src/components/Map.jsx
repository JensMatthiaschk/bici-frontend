import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function Map() {

  const pointsOfInterest = [
    {
    latLong :[52.45724827787064, 13.540072899999998],
    name : "WBS-Codingschool"
    },
    {
      latLong: [52.47678493299386, 13.399603934390937],
    name: "Tempelhof"
    }
  ]


  return (
    <div className="Map">
      <MapContainer center={[52.45724827787064, 13.540072899999998]} zoom={12} scrollWheelZoom={true} style = {{ width: '100vw' , height: '100vh'}}>
      <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=uXMr0o4kkFgSpwtCw09i"
      />
      {pointsOfInterest.map(({latLong, name}) =>
      <Marker key={ latLong } position={ latLong }>
          <Popup>
          {name}. <br /> Easily customizable.
          </Popup>
      </Marker>
      )}
      </MapContainer>

    </div>
  )
}

export default Map
