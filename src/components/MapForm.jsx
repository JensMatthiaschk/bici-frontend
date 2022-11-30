import { LatLng } from 'leaflet';
import React, { useContext, useState } from 'react'
import { Form } from 'react-router-dom'
import { postPin } from '../mapservice';


import { MapContext } from './mapContext'


export const action = async ({ request, }) => {

    try {

        const pinData = Object.fromEntries(await request.formData());
        Object.keys(pinData).forEach((k) => (pinData[k] === '' || pinData[k] === undefined) && delete pinData[k]);
        console.log('new', pinData)
        const updatePin = await postPin(pinData);



    }
    catch (err) { console.log(err) }
}



const mapForm = () => {
    const { marker, setMarker } = useContext(MapContext)
    const [camp, setcamp] = useState(false)
    const [shower, setShower] = useState(false)
    const [repair, setRepair] = useState(false)
    const [events, setEvents] = useState(false)
    const [host, setHost] = useState(false)
    const [swim, setSwim] = useState(false)
    const handleChange = () => setMarker(e.target.value)
    const latlang = marker.latlng
    console.log('fromForm', latlang)
    return (<>

        <Form method='post' action='/map'>
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
                        <input name="events" type="checkbox" value={events} className="checkbox" onChange={() => setEvents(!events)} />
                    </label>
                    <label className="label cursor-pointer">
                        <span className="label-text">Host</span>
                        <input name="host" type="checkbox" value={host} className="checkbox" onChange={() => setHost(!host)} />
                    </label>
                    <label className="label cursor-pointer">
                        <span className="label-text">Place to swim or refresh</span>
                        <input name="swim" type="checkbox" value={swim} className="checkbox" onChange={() => setSwim(!swim)} />
                    </label>
                    <input name="location" value={marker.latlng} onChange={handleChange} hidden />
                    {/*<input name="lang" type="json" value={marker.latlng} hidden /> */}
                    <label className="label">
                        <span className="label-text">Description</span>

                    </label>

                    <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="tell somthing about the pin"></textarea>
                    <label className="label">
                        <span className="label-text-alt">Let know other cyclist what they can find here.<br /> Don't leave this blank!</span>

                    </label>
                    <div className="modal-action">

                        <button className="btn w-24" type="submit"  >
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

