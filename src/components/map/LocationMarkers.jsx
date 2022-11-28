import { useMapEvents, Marker, Popup } from 'react-leaflet'
import React, { useState } from 'react'


function LocationMarkers() {
  /* const initialMarkers = [{
    latlng: [51.505, -0.09], // search current location

    location: "",

  }]; */
  const [markers, setMarkers] = useState('');
  const [actual, setActual] = useState()
  console.log(markers)
  const map = useMapEvents({
    click(e) {

      fetch(`http://dev.virtualearth.net/REST/v1/Locations/${e.latlng.lat},${e.latlng.lng}?o=json&key=AoqHihRk2OT53P1kI_39CCr6qbxPrJ4bQwJG-9au9bz-CQ0bjbPllLhnOOlCX2kA`)
        .then(res => res.json())
        .then(data => {

          if (data.resourceSets[0].resources.length) {
            setMarkers({
              latlng: e.latlng,
              location: data.resourceSets[0].resources[0].name

            });
            console.log(markers)


          } else {
            setActual({
              latlng: e.latlng,
              location: "No location found"

            })
            console.log(actual)
          }
        })

    }
  });


  return (

    <React.Fragment >
      {markers.latlng ?
        <Marker position={markers.latlng} >

          <div className='card  bg-base-100 '>
            <Popup className='bg-transparent'>
              <div className="card  w bg-base-100 ">

                <div className="card-body">
                  {markers.location}
                  <div className="card-actions justify-end">
                    <label htmlFor="my-modal-6" className="btn btn-sm">Set a Pin</label>




                  </div>
                </div>
              </div>
            </Popup>
          </div>
        </Marker> : null}
    </React.Fragment>
  );
}

export default LocationMarkers