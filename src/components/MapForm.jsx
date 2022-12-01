import { LatLng } from 'leaflet';
import React, { useContext, useState } from 'react'
import { Form } from 'react-router-dom'
import { postPin } from '../mapservice';
import { MapContext } from './mapContext'


export const action = async ({ request, }) => {

    try {
        const data = new FormData()
        const pinData = Object.fromEntries(await request.formData());
        console.log(pinData)
        //Object.keys(pinData).forEach((k) => (pinData[k] === '' || pinData[k] === undefined) && delete pinData[k]);
        !pinData.camping ? data.append("camping", false) : data.append("camping", pinData.camping)
        !pinData.shower ? data.append("shower", false) : data.append("shower", pinData.shower)
        !pinData.repair ? data.append("repair", false) : data.append("repair", pinData.repair)
        !pinData.events ? data.append("events", false) : data.append("events", pinData.events)
        !pinData.host ? data.append("host", false) : data.append("host", pinData.host)
        !pinData.swim ? data.append("swim", false) : data.append("swim", pinData.swim)
        pinData.description && data.append("description", pinData.description)
        data.append("location", pinData.location)
        //hab ich aus kommentiert wegen can not read unding of undefined of length
        /*  
        for (let i = 0; i < pinData.pin_imgs.length; i++) {
            data.append('pin_images[]', file[i])
        }
        //pinData.pin_img && data.append("pin_imgs", pinData.pin_imgs) */
        console.log('new', pinData)
        console.log("DATA", data)
        const updatePin = await postPin(data);
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

    const latlang = marker.latlng
    console.log('fromForm', latlang)
    return (<>

        <label htmlFor="my-modal-6" className="btn btn-xs btn-circle top-3 right-4 absolute">✕</label>
        <Form method='post' action='/map' encType='multipart/form-data'>
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
                    <input name="location" value={marker.latlng} hidden />
                    {/*<input name="lang" type="json" value={marker.latlng} hidden /> */}
                    <label className="label">
                        <span className="label-text">Description</span>

                    </label>

                    <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="tell somthing about the pin"></textarea>
                    <label className="label">
                        <span className="label-text-alt">Let know other cyclist what they can find here.<br /> Don't leave this blank!</span>

                    </label>
                    <label htmlFor="pin_imgs"></label>
                    <input className="file-input file-input-bordered file-input-md w-full max-w-xs"
                        type="file"
                        name="pin_img"
                        id="pin_img"
                        multiple='multiple'
                        accept='image/png, image/jpg, image/jpeg, image/gif'
                    />
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

