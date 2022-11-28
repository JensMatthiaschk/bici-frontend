import React from 'react'
import { Outlet } from 'react-router-dom'
import MapForm from '../components/MapForm'







const Landing = () => {
    return (<>
        <Outlet />
        <div>Landing</div>

        <label htmlFor="my-modal-6" className="btn">open modal</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                <MapForm />

            </div>
        </div>


    </>)
}

export default Landing