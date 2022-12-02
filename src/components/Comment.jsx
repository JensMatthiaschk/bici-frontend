import React, { useContext, useState, useEffect } from 'react'
import { Form } from 'react-router-dom'
import { mapComment } from '../mapservice';
import { MapContext } from './mapContext'
/* export const action = async ({ request }) => {

    try {
        const formData = Object.fromEntries(await request.formData());
        console.log(formData)
        const comment = await mapComment(formData);
    }
    catch (err) {
        console.log(err)

    }
}
 */

const Comment = (props) => {
    const [comment, setComment] = useState('')
    const [input, setInput] = useState('')
    const { pinId, setPinId } = useContext(MapContext)


    const handleChange = (event) => {

        setInput(event.target.value)

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setComment(input)
    }


    useEffect(() => {
        const formData = {}
        formData.comment = comment
        formData.pin_id = pinId
        console.log(formData)
        console.log(comment, pinId)

        try {

            (async () => {
                await mapComment(formData);

            })();
        }
        catch (err) {
            console.log(err)

        }

    }, [comment])

    return (

        <form onSubmit={handleSubmit}>
            <div className="form-control">

                <textarea type="text" onChange={handleChange} name="comment"
                    className="textarea textarea-bordered h-24 w-full" placeholder="your comment here, be nice an precice! ">

                </textarea>

                <div className="modal-action">

                    <button className="btn w-24" type="submit"  >comment</button>


                </div>


            </div>

        </form >
    )
}

export default Comment