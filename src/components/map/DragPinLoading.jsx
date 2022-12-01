
import React, { useEffect, useContext } from 'react'
import { useMapEvents } from 'react-leaflet/hooks'
import { Marker, Popup } from 'react-leaflet'
import { MapContext } from '../mapContext.jsx'
import { getPinData } from './pinutiles.js'
import { geoToArr, geoToObj } from '../../latlng.js'

export default function DragPinLoading() {
  const { bounds, setBounds } = useContext(MapContext)
  const { mapPins, setMapPins } = useContext(MapContext)

  const map = useMapEvents({
    moveend: (e) => {


      setBounds(e.target.getBounds())

    },

  })
  useEffect(() => {
    getPinData(bounds).then((pins) => setMapPins(pins))

  }, [bounds])

  console.log('outside', mapPins)

  console.log(mapPins.length)

  const pinOnMap = mapPins


  return mapPins.length === 0 ? null : (<>
    {
      mapPins.map((pin) =>
        <Marker key={pin.location.coordinates} position={geoToObj(pin.location.coordinates)}>
          <Popup autoPan={true}>

            <figure><img src="https://placeimg.com/400/225/arch" alt="Album" /></figure>

            <h2 className="card-title"></h2>
            <p>{pin.description}</p>
            <div className="card-actions justify-end">
              <label htmlFor="my-drawer" className="btn btn-sm btn-info drawer-button">More Info</label>
            </div>

          </Popup>
        </Marker>
      )
    }
  </>
  );



}