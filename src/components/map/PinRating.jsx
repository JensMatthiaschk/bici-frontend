import { useContext, useEffect, useState } from "react";
import { MapContext } from "../mapContext";
import { postRating } from "../../mapservice";
import { getRatings } from "../../mapservice";
import { FaStar } from "react-icons/fa"

export const PinRating = () => {
    const { pinId, pinRatings, setPinRatings } = useContext(MapContext)
    // const [pinRatings, setPinRatings] = useState()
    const [ratingInput, setRatingInput] = useState()
    const [hover, setHover] = useState(null)

    useEffect(() => {
        const data = { pinId }
        const comments = getRatings(data).then(data => setPinRatings(data.data))
    }, [pinId])

    async function handleRatingChange(e) {
        e.preventDefault()
        try {
            const ratingValue = e.target.value
            //const ratingValue = ratingInput
            console.log("RATINGVALUE", ratingValue)
            const ratingData = {}
            ratingData.ratingValue = ratingValue
            ratingData.pinId = pinId
            console.log("RAtiNGDATA", ratingData)
            postRating(ratingData);
        }
        catch (err) { console.log(err) }
    }

    // console.log("RATINGS", ratings)
    // console.log("RATINGINPUT", ratingInput)

    return (
        <>
            <p className="relative bottom-5 font-normal">rate this place</p>
            <div className="flex relative bottom-4">
                <br />
                {
                    [...Array(5)].map((star, i) => {
                        const ratingValueCurrent = i + 1
                        return (
                            <label>
                                <input
                                    name="rating"
                                    type="radio"
                                    value={ratingValueCurrent}
                                    onClick={handleRatingChange}
                                />
                                <FaStar
                                    className="star"
                                    color={ratingValueCurrent <= (hover || ratingInput) ? "#FFC107" : "grey"}
                                    size={30}
                                    onMouseEnter={() => setHover(ratingValueCurrent)}
                                    onMouseLeave={() => setHover(null)}
                                />
                            </label>
                        )
                    })
                }
            </div >
        </>


        // <>
        //     <div className="mb-4">
        //         <legend className="mb-2">Average Rating</legend>
        //         <form onMouseUp={handleRatingChange} className="rating rating-lg rating-half">
        //             <input type="radio" value="1" name="rating-4" className="mask mask-star-2 bg-green-500" />
        //             <input type="radio" value="2" name="rating-4" className="mask mask-star-2 bg-green-500" />
        //             <input type="radio" value="3" name="rating-4" className="mask mask-star-2 bg-green-500" />
        //             <input type="radio" value="4" name="rating-4" className="mask mask-star-2 bg-green-500" />
        //             <input type="radio" value="5" name="rating-4" className="mask mask-star-2 bg-green-500" />
        //         </form>
        //     </div>
        // </>
    );


}