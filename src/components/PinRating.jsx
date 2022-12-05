import { useContext, useEffect } from "react";
import { MapContext } from "./mapContext";
import { postRating } from "../mapservice";
import { getRatings } from "../mapservice";

export const RatingForm = () => {

    const { pinId } = useContext(MapContext)

    async function handleRatingChange(e) {
        e.preventDefault()
        try {
            const ratingValue = e.target.value
            const ratingData = {}
            ratingData.ratingValue = ratingValue
            ratingData.pinId = pinId
            const pushRatingValuePin = await postRating(ratingData);
        }
        catch (err) { console.log(err) }
    }

    useEffect(() => {

    }, [pinId])

    return (
        <>
            <legend>Star Rating</legend>
            <form onMouseUp={handleRatingChange} className="rating rating-md">
                <input type="radio" value="1" name="rating-4" className="mask mask-star-2 bg-green-500" />
                <input type="radio" value="2" name="rating-4" className="mask mask-star-2 bg-green-500" />
                <input type="radio" value="3" name="rating-4" className="mask mask-star-2 bg-green-500" />
                <input type="radio" value="4" name="rating-4" className="mask mask-star-2 bg-green-500" />
                <input type="radio" value="5" name="rating-4" className="mask mask-star-2 bg-green-500" />
            </form>

        </>
    );


}