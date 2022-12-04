import React, { useContext, useState, useEffect } from 'react'
import { getMapComments, mapComment } from '../mapservice';
import { MapContext } from './mapContext'


const Comment = (props) => {
    const [commentData, setCommentData] = useState();
    const [comment, setComment] = useState('')
    const [input, setInput] = useState('')
    const { pinId, setPinId } = useContext(MapContext)


    console.log("pin_id1", pinId)

    // const handleChange = (event) => {
    //     setInput(event.target.value)
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const commentBody = event.target.elements[0].value
            const formData = {}
            formData.comment = commentBody
            formData.pin_id = pinId
            console.log("pin_id2", formData.pin_id)
            const sendComment = await mapComment(formData)
            //setComment(input)
        }
        catch (err) { console.log(err) }
    }

    useEffect(() => {
        const comments = getMapComments(pinId)
        setCommentData(comments)
    }, [pinId])


    // useEffect(() => {
    //     const formData = {}
    //     formData.comment = comment
    //     formData.pin_id = pinId
    //     console.log(formData)
    //     console.log(comment, pinId)

    //     try {

    //         (async () => {
    //             await mapComment(formData);

    //         })();
    //     }
    //     catch (err) {
    //         console.log(err)

    //     }

    // }, [comment])

    return (

        <form method='GET' onSubmit={handleSubmit} action='/comment'>
            <div className="form-control">
                <textarea type="text" name="comment"
                    className="textarea textarea-bordered h-24 w-full" placeholder="your comment here, be nice an precice! ">
                </textarea>
                <div className="modal-action">
                    <button className="btn w-24" type="submit"  >comment</button>
                </div>
            </div>
        </form >
    )
}
