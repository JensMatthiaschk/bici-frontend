import React, { useContext, useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import LocationMarkers from './LocationMarkers.jsx'
import MyLocationMarker from './MyLocationMarker.jsx'
import MapForm from '../MapForm.jsx'
import { MapContext } from '../mapContext.jsx'
import SearchedMarker from './SearchMarker.jsx'
import { useMapEvents } from 'react-leaflet/hooks'
import DragPinLoading from './DragPinLoading.jsx'
import { Drawer } from './Drawer.jsx'




function Map() {
  const { searchedMarkers, setSearchedMarkers } = useContext(MapContext)
  const { pinId, setPinId } = useContext(MapContext)



  const pointsOfInterest = [
    {
      id: 1,
      latLong: [52.45724827787064, 13.540072899999998],
      name: "WBS-Codingschool"
    },
    {
      id: 2,
      latLong: [52.47678493299386, 13.399603934390937],
      name: "Tempelhof"
    }
  ]

  useEffect(() => {
    console.log("><<<>>>>>>>", searchedMarkers)
  }, [searchedMarkers])

  // console.log("Comments arrived", commentData)

  /* function DragPinLoadingComponent() {
    const map = useMapEvents({
      moveend: (e) => {

        console.log(e.target.getBounds())


      },
    })
    return null
  }
 */
  return (
    <div className="Map">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <MapContainer center={[52.45724827787064, 13.540072899999998]} zoom={12} scrollWheelZoom={true} style={{ width: '100vw', height: '100vh' }}>
            <TileLayer
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
              url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=uXMr0o4kkFgSpwtCw09i"
            />
            {pointsOfInterest.map(({ latLong, name }) =>
              <Marker key={latLong} position={latLong}>
                <Popup autoPan={true}>

                  <figure><img src="https://placeimg.com/400/225/arch" alt="Album" /></figure>

                  <h2 className="card-title">{name}</h2>
                  <p>Easily customizable. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ea et eligendi qui possimus assumenda sed at perferendis atque eius sunt, fuga, impedit, corporis voluptates tempora non iusto. Recusandae, iusto!</p>
                  <div className="card-actions justify-end">
                    <label htmlFor="my-drawer" className="btn btn-sm btn-info drawer-button">More Info</label>
                  </div>

                </Popup>
              </Marker>
            )}
            <MyLocationMarker />
            <LocationMarkers />
            <DragPinLoading />
            <SearchedMarker />
          </MapContainer>
        </div>
        {/* <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <Comment pin={pinId} />
            <RatingForm pin={pinId} />
            <>{pinId}</>
          </ul>

        </div> */}
        <Drawer />
      </div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box scrollbar-hide">
          <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
          <MapForm />

        </div>
      </div>
    </div>
  )
}

export default Map
