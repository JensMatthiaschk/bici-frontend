
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

  const Images = [
    {
      avatar_img: "https://biciappimages.s3.eu-central-1.amazonaws.com/pin_images/Placeholder_view_vector.svg.png"
    },
    {
      avatar_img: "https://biciappimages.s3.eu-central-1.amazonaws.com/pin_images/Placeholder_view_vector.svg.png"
    },
    {
      avatar_img: "https://biciappimages.s3.eu-central-1.amazonaws.com/pin_images/Placeholder_view_vector.svg.png"
    },
    {
      avatar_img: "https://biciappimages.s3.eu-central-1.amazonaws.com/pin_images/Placeholder_view_vector.svg.png"
    }
  ]

  console.log('filteredPins', filteredPins)



  return filteredPins.length === 0 ? null : (<>


    {
      filteredPins.map((pin) =>
        <Marker key={pin._id} position={geoToObj(pin.location.coordinates)} icon={markerColor(pin)}>
          <Popup autoPan={true} className="p-0 m-0">

            <div className="w-56 h-52 rounded-xl overflow-hidden">
              <div className="carousel w-full h-32">
                {Images.map((img, i) => {
                  const count = i + 1
                  return (
                    <div id={"popUpSlide" + `${count}`}
                      style={{
                        "background-image": `url("https://biciappimages.s3.eu-central-1.amazonaws.com/pin_images/Placeholder_view_vector.svg.png")`,
                        "background-repeat": "no-repeat",
                        "background-size": "cover",
                      }}
                      className="carousel-item relative w-full">
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                        <a href={"#popUpSlide" + `${count - 1}`} className="btn btn-circle bg-indigo-200/30 hover:bg-indigo-500/30 border-0 w-3 font-extralight">❮</a>
                        <a href={"#popUpSlide" + `${count + 1}`} className="btn btn-circle bg-indigo-200/30 hover:bg-indigo-500/30 border-0 w-3 font-extralight">❯</a>
                      </div>
                    </div >
                  )
                })}
              </div >

              <div className="w-full h-6 px-4 py-5">
                <p className="m-0 h-6">{pin.description}</p>
              </div>

              {/* <label htmlFor="my-drawer1" className="btn btn-primary drawer-button">1Open drawer</label> */}
              <div className="flex justify-end relative right-2">
                <label htmlFor="my-drawer" className="btn btn-sm drawer-button bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-0" onClick={() => setPinId(pin._id)}>More Info</label>
              </div>
            </div>
          </Popup>

        </Marker>
      )
    }
    {console.log('pinId', pinId)}




  </>
  );



}



// <div className="carousel w-full h-60 mb-10">
//   {Images.map((img, i) => {
//     const count = i + 1
//     return (
//       <div id={"slide" + `${count}`}
//         style={{
//           "background-image": `url("https://biciappimages.s3.eu-central-1.amazonaws.com/pin_images/Placeholder_view_vector.svg.png")`,
//           "background- repeat": "no-repeat",
//           "background-size": "contain",
//         }}
//         className="carousel-item relative w-full">
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <a href={"#slide" + `${count - 1}`} className="btn btn-circle w-8 h-4 p-0">❮</a>
//           <a href={"#slide" + `${count + 1}`} className="btn btn-circle w-8 h-4 p-0">❯</a>
//         </div>
//       </div >
//     )
//   })}
// </div >