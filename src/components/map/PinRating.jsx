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
    const [postRatingsAnswer, setPostRatingAnswer] = useState()

    useEffect(() => {
        const data = { pinId }
        const comments = getRatings(data).then(data => setPinRatings(data.data))
    }, [pinId])

    async function handleRatingChange() {
        // e.preventDefault()
        try {
            // ratingValue = e.target.value
            const ratingData = {}
            ratingData.ratingValue = ratingInput
            ratingData.pinId = pinId
            postRating(ratingData).then(data => setPostRatingAnswer(data));
        }
        catch (err) { console.log(err) }
    }

    //console.log("RATINGS", ratings)
    // console.log("RATINGINPUT", ratingInput)
    // console.log("postRatingsAnswer", postRatingsAnswer)
    // console.log("ratingInput", ratingInput)

    return (
        <div className="px-4 mb-10">
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
                                    onClick={() => { handleRatingChange(), setRatingInput(ratingValueCurrent) }}
                                />
                                <FaStar
                                    className="star mask mask-star-2"
                                    color={ratingValueCurrent <= (hover || ratingInput) ? "#fb923c" : "grey"}
                                    size={30}
                                    onMouseEnter={() => setHover(ratingValueCurrent)}
                                    onMouseLeave={() => setHover(null)}
                                />
                            </label>
                        )
                    })
                }
            </div >
            {postRatingsAnswer?.success ? <p className="text-green-500 bg-lime-100 rounded w-fit px-3 mb-4">rated successfully!</p> : ""}
        </div>


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