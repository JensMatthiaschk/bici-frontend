import Comment from "../Comment"
import { RatingForm } from "../RatingForm"
import { useContext } from "react"
import { MapContext } from "../mapContext"

export const Drawer = () => {
    const { pinId, setPinId } = useContext(MapContext)
    return (

        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                <Comment pin={pinId} />
                <RatingForm />
                <>{pinId}</>
            </ul>
        </div>
    )
}