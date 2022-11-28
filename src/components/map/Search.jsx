
import { useEffect, useState } from 'react';


function SearchField() {

  const searchParams = window.location.search
  console.log(searchParams)

  const [sesh, setSesh] = useState(null);
  useEffect(() => {
    const searchParams = () => {

      fetch(`https://dev.virtualearth.net/REST/v1/Locations/${searchParams}?&maxResults=1&key=AoqHihRk2OT53P1kI_39CCr6qbxPrJ4bQwJG-9au9bz-CQ0bjbPllLhnOOlCX2kA`)
        .then(res => res.json())
        .then(data => {
          setSesh(data.resourceSets[0].resources[0].point)
          console.log(data.resourceSets[0].resources[0].point)

        })
    };

  }, [searchParams]);
  function handelChange(e) {
    setSesh(e.target.value)
    console.log(sesh)
  }
  return (
    <>

    </>
  )
}



export default SearchField