
import React, { useEffect, useContext, useState } from 'react'
import { useMapEvents } from 'react-leaflet/hooks'
import { Marker, Popup } from 'react-leaflet'
import { MapContext } from '../mapContext.jsx'
import { getPinData } from './pinutiles.js'
import { geoToArr, geoToObj } from '../../latlng.js'
import { hostIcon, eventIcon, repairIcon, swimIcon, showerIcon, campIcon, defaultIcon } from "./Icons.js"

export default function DragPinLoading() {
  const [firstLoad, setFirstLoad] = useState(true)
  const { bounds, setBounds } = useContext(MapContext)
  const { mapPins, setMapPins } = useContext(MapContext)
  const { pinId, setPinId } = useContext(MapContext)
  const map = useMapEvents({
    moveend: (e) => {


      setBounds(e.target.getBounds())

    },

  })
  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false)
      return
    }
    getPinData(bounds).then((pins) => setMapPins(pins))

  }, [bounds, 1])

  console.log('outside', mapPins)

  console.log(mapPins.length)

  const markerColor = (pin) => {
    if (pin.camping) return campIcon
    else if (pin.host) return hostIcon
    else if (pin.reapir) return repairIcon
    else if (pin.shower) return showerIcon
    else if (pin.host) return hostIcon
    else if (pin.swim) return swimIcon
    else if (pin.event) return eventIcon
    else return defaultIcon
  }

  return mapPins.length === 0 ? null : (<>


    {
      mapPins.map((pin) =>
        <Marker key={pin._id} position={geoToObj(pin.location.coordinates)} icon={markerColor(pin)}>
          <Popup autoPan={true}>

            <figure><img src="https://placeimg.com/400/225/arch" alt="Album" /></figure>

            <h2 className="card-title"></h2>
            <p>{pin.description}</p>

            {/* <label htmlFor="my-drawer1" className="btn btn-primary drawer-button">1Open drawer</label> */}
            <button className="btn" onClick={() => setPinId(pin._id)}><label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label></button>
          </Popup>

        </Marker>
      )
    }
    {console.log('pinId', pinId)}




  </>
  );



}