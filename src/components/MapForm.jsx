import React, { useState } from 'react'
import { Form } from 'react-router-dom'

export const action = async ({ request }) => {

    try {
        const pinData = Object.fromEntries(await request.formData());


        console.log(pinData)


    }
    catch (err) { console.log(err) }
}



const mapForm = () => {
    const [camp, setcamp] = useState(false)
    const [shower, setShower] = useState(false)
    const [repair, setRepair] = useState(false)
    const [events, setEvents] = useState(false)
    const [host, setHost] = useState(false)


    return (<>

        <Form method='post' action='/'>
            <div className="form-control">
                <fieldset>
                    <label className="label cursor-pointer">
                        <span className="label-text">camp</span>
                        <input name="camping" type="checkbox" value={camp} className="checkbox" onChange={() => setcamp(!camp)} />
                    </label>
                    <label className="label cursor-pointer">
                        <span className="label-text">Shower</span>
                        <input name="shower" type="checkbox" value={shower} className="checkbox" onChange={() => setShower(!shower)} />
                    </label>
                    <label className="label cursor-pointer">
                        <span className="label-text">Repair Station</span>
                        <input name="repair" type="checkbox" value={repair} className="checkbox" onChange={() => setRepair(!repair)} />
                    </label>
                    <label className="label cursor-pointer">
                        <span className="label-text">Event</span>
                        <input name="event" type="checkbox" value={events} className="checkbox" onChange={() => setEvents(!events)} />
                    </label>
                    <label className="label cursor-pointer">
                        <span className="label-text">Host</span>
                        <input name="host" type="checkbox" value={host} className="checkbox" onChange={() => setHost(!host)} />
                    </label>
                    <label className="label">
                        <span className="label-text">Description</span>

                    </label>

                    <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="tell somthing about the pin"></textarea>
                    <label className="label">
                        <span className="label-text-alt">Your bio</span>

                    </label>
                    <div className="modal-action">

                        <button className="btn w-24" type="submit" >
                            {/*  Close Modal */}
                            <label htmlFor="my-modal-6" className="btn w-24 border-none bg-transparent"> Pin it!</label>
                        </button>

                    </div>
                </fieldset>

            </div>

        </Form>


    </>)
}

export default mapForm