import {useMapEvents, Marker, Popup} from 'react-leaflet'
import React, {useState} from 'react'


function LocationMarkers() {
    const initialMarkers = [{
      latlng: [51.505, -0.09],
      location:"dfjwoifjoewij",
      description: "LOL "
    }];
    const [markers, setMarkers] = useState(initialMarkers);
  
    const map = useMapEvents({
      dblclick(e) {
        
        fetch(`http://dev.virtualearth.net/REST/v1/Locations/${e.latlng.lat},${e.latlng.lng}?o=json&key=AoqHihRk2OT53P1kI_39CCr6qbxPrJ4bQwJG-9au9bz-CQ0bjbPllLhnOOlCX2kA`)
        .then(res => res.json())
        .then(data => 
          setMarkers((prevValue) => [...prevValue, {
            latlng: e.latlng,
            location:data.resourceSets[0].resources[0].name,
            description: "LOL "
          }]))
        
      }
    });
  
    return (
      <React.Fragment >
        {markers.map(marker => <Marker key={marker.latlng} position={marker.latlng} >
          <Popup className='bg-transparent'>
            <div className="card  w-100 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Album"/></figure>
                <div className="card-body">
                  {marker.location}
                  <div className="card-actions justify-end">
                    <label htmlFor="my-drawer" className="btn btn-sm btn-info drawer-button">More Info</label>
                  </div>
                </div>
              </div>
          </Popup>
        </Marker>)}
      </React.Fragment>
    );
  }

  export default LocationMarkers