
import { useContext } from "react"
import { MapContext } from "../mapContext.jsx"
import PinComments from "./PinComments.jsx"
import { PinRating } from "./PinRating.jsx"


export const Drawer = () => {
    const { pinId, setPinId } = useContext(MapContext)
    return (

        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                
                <PinRating />
                <PinComments pin={pinId} />
                {/* <>{pinId}</> */}

            </ul>
        </div>
    )
}