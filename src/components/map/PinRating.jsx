import { useContext, useEffect, useState } from "react";
import { MapContext } from "../mapContext";
import { postRating } from "../../mapservice";
import { getRatings } from "../../mapservice";

export const PinRating = () => {
    const { pinId } = useContext(MapContext)
    const [ratings, setRatings] = useState()

    useEffect(() => {
        const data = { pinId }
        const comments = getRatings(data).then(data => setRatings(data.data))
    }, [pinId])

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

    console.log("RATINGS", ratings)

    return (
        <>
            <div className="mb-4">
                <legend className="mb-2">Average Rating</legend>
                <form onMouseUp={handleRatingChange} className="rating rating-md">
                    <input type="radio" value="1" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" value="2" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" value="3" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" value="4" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" value="5" name="rating-4" className="mask mask-star-2 bg-green-500" />
                </form>
            </div>
        </>
    );


}