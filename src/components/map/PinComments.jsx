import React, { useContext, useState, useEffect } from 'react'
import { getMapComments, postMapComment } from '../../mapservice';
import { MapContext } from '../mapContext'
import moment from 'moment'
import { UserContext } from '../userContext';


const PinComments = (props) => {
    const [commentData, setCommentData] = useState();
    const { pinId, setPinId } = useContext(MapContext)
    const { userProfileData, setUserProfileData } = useContext(UserContext)

    console.log("pin_id1", pinId)
    console.log("CommentData", commentData)
    console.log('userProfileData', userProfileData)


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const commentBody = event.target.elements[0].value
            const formData = {}
            formData.comment = commentBody
            formData.pin_id = pinId
            console.log("pin_id2", formData.pin_id)
            postMapComment(formData).then((newComment) => {
                console.log("newComment", newComment);
                newComment.data.userprofile = userProfileData
                setCommentData([...commentData, newComment.data])
                event.target.reset()
            })
        }
        catch (err) { console.log(err) }
    }

    useEffect(() => {
        const data = { pinId }
        const comments = getMapComments(data).then(data => setCommentData(data.data))
    }, [pinId])


    return (
        <>
            <h3>Comments</h3>
            <div className="flex flex-col w-full mb-4 mt-4">
                {commentData && commentData.reverse().map((e) => e.comment ?
                    <div key={e._id} className="flex space-x-3">
                        <div className="flex flex-shrink-0">
                            {e.userprofile.avatar_img?.aws_url ? <img src={`${e.userprofile.avatar_img?.aws_url}`} alt="no" className="h-8 w-8 object-fill rounded-full" /> :
                                <img src='https://images.unsplash.com/photo-1507965613665-5fbb4cbb8399?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="" className="h-8 w-8 object-fill rounded-full" />
                            }
                        </div>
                        <div className="flex space-x-2 flex-col mb-5">
                            <div className="block w-full">
                                <div className="bg-gray-100 rounded-xl px-2 pb-2 w-full break-words">
                                    <div className="font-medium w-full break-words">
                                        <a href="#" className="hover:underline text-sm">
                                            <small> {e.userprofile?.nickname ? e.userprofile.nickname : e.user.name}</small>
                                        </a>
                                    </div>
                                    <div className="text-xs w-56 break-words">
                                        {e.comment}
                                    </div>
                                </div>
                                <div className="flex justify-start items-center text-xs w-full">
                                    <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
                                        <a href="#" className="hover:underline">
                                            <small>Like</small>
                                        </a>
                                        <small className="self-center">.</small>
                                        <a href="#" className="hover:underline">
                                            <small>Reply</small>
                                        </a>
                                        <small className="self-center">.</small>
                                        <a href="#" className="hover:underline">
                                            <small>{moment(e.createdAt).fromNow()}</small>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : "")}
            </div>

            {/* //FORM */}
            <form method='GET' onSubmit={handleSubmit} action='/comment'>
                <div className="form-control">
                    <textarea type="text" name="comment"
                        className="textarea textarea-bordered h-24 w-full mb-0" placeholder="your comment here, be nice an precice! ">
                    </textarea>
                    <div className="modal-action">
                        <button className="btn btn-sm w-24" type="submit">comment</button>
                    </div>
                </div>
            </form >
        </>
    )
}

export default PinComments