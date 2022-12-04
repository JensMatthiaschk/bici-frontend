import React, { useContext, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import LocationMarkers from './LocationMarkers.jsx'
import MyLocationMarker from './MyLocationMarker.jsx'
import MapForm from '../MapForm.jsx'
import { MapContext } from '../mapContext.jsx'
import SearchedMarker from './SearchMarker.jsx'
import { useMapEvents } from 'react-leaflet/hooks'
import DragPinLoading from './DragPinLoading.jsx'
import Comment from '../Comment.jsx'
import { RatingForm } from '../RatingForm.jsx'




function Map() {
  const { searchedMarkers, setSearchedMarkers } = useContext(MapContext)
  const { pinId, setPinId } = useContext(MapContext)







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

            <MyLocationMarker />
            <LocationMarkers />
            <DragPinLoading />
            <SearchedMarker />
          </MapContainer>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <Comment pin={pinId} />
            <RatingForm pin={pinId} />
            <>{pinId}</>
          </ul>

        </div>
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
