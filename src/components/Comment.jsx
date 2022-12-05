import React, { useContext, useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
import { mapComment } from '../mapservice';
import { MapContext } from './mapContext'
import { getCommentData } from '../authservice';



const Comment = (props) => {

    const [firstLoad, setFirstLoad] = useState(true)
    const [comment, setComment] = useState('')
    const [input, setInput] = useState('')
    const { pinId, setPinId } = useContext(MapContext)
    const [comments, setComments] = useState([])

    useEffect(() => {
        /*  if (firstLoad) {
             setFirstLoad(false)
             return
         } */
        console.log('getcom', pinId)
        // create object key value pair for pinId
        const pinIdObj = { pin_id: pinId }
        console.log('pinIdObj', pinIdObj)
        getCommentData(pinIdObj)
            .then((data) => setComments(data))

            .then(console.log('hallo', comments))




    }, [pinId])




    const handleChange = (event) => {

        setInput(event.target.value)

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setComment(input)
        setInput('')
    }


    useEffect(() => {
        const formData = {}
        formData.comment = comment
        formData.pin_id = pinId
        console.log('wor', formData)
        console.log(comment, pinId)
        if (firstLoad) {
            setFirstLoad(false)
            return
        }
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

                <textarea type="text" value={input} onChange={handleChange} name="comment"
                    className="textarea textarea-bordered h-24 w-full" placeholder="your comment here, be nice an precice! ">

                </textarea>

                <div className="modal-action">

                    <button className="btn w-24" type="submit"  >comment</button>


                </div>


            </div>

        </form >
    )
}
