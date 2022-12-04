import { LatLng } from 'leaflet';
import React, { useContext, useState, useRef } from 'react'
import { Form } from 'react-router-dom'
import { postPin } from '../mapservice';
import { MapContext } from './mapContext'




const mapForm = () => {
    const imgInput = useRef()

    const handleMapFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const data = new FormData()
            const photoArray = Object.values(imgInput.current.files)
            console.log("Photos", photoArray)
            !e.target.elements.camping.value ? data.append("camping", false) : data.append("camping", e.target.elements.camping.value)
            !e.target.elements.shower.value ? data.append("shower", false) : data.append("shower", e.target.elements.shower.value)
            !e.target.elements.repair.value ? data.append("repair", false) : data.append("repair", e.target.elements.repair.value)
            !e.target.elements.events.value ? data.append("events", false) : data.append("events", e.target.elements.events.value)
            !e.target.elements.host.value ? data.append("host", false) : data.append("host", e.target.elements.host.value)
            !e.target.elements.swim.value ? data.append("swim", false) : data.append("swim", e.target.elements.swim.value)
            e.target.elements.description.value && data.append("description", e.target.elements.description.value)
            data.append("location", marker.latlng)
            photoArray.forEach((img) => data.append("pin_imgs", img))
            console.log("DATA", data.swim)
            const updatePin = await postPin(data);
        }
        catch (err) { console.log(err) }
    }

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
        <form method='post' onSubmit={handleMapFormSubmit} action='/map' encType='multipart/form-data'>
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

                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="tell somthing about the pin"></textarea>
                    <label className="label">
                        <span className="label-text-alt">Let know other cyclist what they can find here.<br /> Don't leave this blank!</span>
                    </label>
                    <label htmlFor="pin_imgs"></label>
                    <input className="file-input file-input-bordered file-input-md w-full max-w-xs"
                        ref={imgInput}
                        type="file"
                        name="pin_imgs"
                        id="pin_imgs"
                        multiple
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

        </form>

    </>)
}

export default mapForm

