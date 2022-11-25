import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifier } from '../authservice'
import Navbar from '../components/Navbar'
import ProfileForm from './ProfileForm'


export const Profile = () => {
    const navigate = useNavigate();


    (async () => {
        const token = await verifier();
        // console.log('tok1', token)
        if (!token) return navigate("/login");

    })();


    return (<>

        <Navbar />

        <div>Profile</div>
        <div>
            <label htmlFor="ProfileForm"
                className=" bg-slate-300 text-center text-sky-700 p-2 rounded-full hover:bg-sky-700 hover:text-white cursor-pointer">
                Edit Profile
            </label>
            <ProfileForm />
        </div>
    </>
    )
}
export default Profile