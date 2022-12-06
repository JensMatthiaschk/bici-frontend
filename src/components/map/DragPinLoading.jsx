
import React, { useEffect, useContext, useState } from 'react'
import { useMapEvents } from 'react-leaflet/hooks'
import { Marker, Popup } from 'react-leaflet'
import { MapContext } from '../mapContext.jsx'
import { getPinData } from './pinutiles.js'
import { geoToArr, geoToObj } from '../../latlng.js'
import {
  hostIcon, eventIcon, repairIcon, swimIcon, showerIcon, campIcon, defaultIcon,
  green, blue, red, orange, purple, yellow, darkgreen, lightblue, redish, white
} from "./Icons.js"

export default function DragPinLoading() {
  const [firstLoad, setFirstLoad] = useState(true)
  const [renderPins, setRenderPins] = useState([])
  const { bounds, setBounds } = useContext(MapContext)
  const { mapPins, setMapPins } = useContext(MapContext)
  const { pinId, setPinId } = useContext(MapContext)
  const { filter, setFilter } = useContext(MapContext)
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
    getPinData(bounds, filter).then((pins) => setMapPins(pins))

  }, [bounds])

  console.log('outside', mapPins)

  console.log(mapPins.length)


  const markerColor = (pin) => {
    const asArray = Object.entries(pin);
    const filtered = asArray.filter(([key, value]) => typeof value === 'boolean' && value === true)
    if (filtered.length > 1) { return defaultIcon }
    else if (pin.camping) return redish
    else if (pin.host) return purple
    else if (pin.repair) return orange
    else if (pin.shower) return green
    else if (pin.swim) return blue
    else if (pin.events) return yellow
    else return white
  }

  // filter mapPins by filter object where value is true  

  const filteredPins = mapPins.filter((pin) => {
    const asArray = Object.entries(pin);
    const filtered = asArray.filter(([key, value]) => typeof value === 'boolean' && value === true)
    if (filtered.length > 1) { return true }
    else if (pin.camping) return filter.camping
    else if (pin.host) return filter.host
    else if (pin.repair) return filter.repair
    else if (pin.shower) return filter.shower

    else if (pin.swim) return filter.swim
    else if (pin.events) return filter.events
    else return false

  })



  console.log('filteredPins', filteredPins)



  return filteredPins.length === 0 ? null : (<>


    {
      filteredPins.map((pin) =>
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