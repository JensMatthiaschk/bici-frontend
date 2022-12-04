import React from "react";

export const RatingForm = ({ pinId }) => {

    pinId = { pinId }

    async function handleRatingChange(e) {
        e.preventDefault()
        try {
            const data = new FormData()
            console.log(e.target.value)
            // console.log("DATA", data)
            // const updatePin = await postRating(data);
        }
        catch (err) { console.log(err) }
    }

    return (
        <>
            {/* <form method='post' onSubmit={handleRatingChange} action='/map' encType='multipart/form-data'>
                <div className="form-control">
                    <fieldset>
                        <legend>Star Rating</legend>
                        <label>
                            <input type="radio" name="stars" value="5" />{" "}
                            ★★★★★
                        </label>
                        <label>
                            <input type="radio" name="stars" value="4" /> ★★★★
                        </label>
                        <label>
                            <input type="radio" name="stars" value="3" /> ★★★
                        </label>
                        <label>
                            <input type="radio" name="stars" value="2" /> ★★
                        </label>
                        <label>
                            <input type="radio" name="stars" value="1" /> ★
                        </label>
                    </fieldset>
                </div>
            </form> */}

            <form method='post' onChange={handleRatingChange} action='/map' encType='multipart/form-data'>
                <div className="form-control">
                    <legend>Star Rating</legend>
                    <div className="rating">
                        <input type="radio" value="1" name="rating-1" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" value="2" name="rating-2" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" value="3" name="rating-3" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" value="4" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" value="5" name="rating-5" className="mask mask-star-2 bg-green-500" />
                    </div>
                </div>
            </form>
        </>
    );


}