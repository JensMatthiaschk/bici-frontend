import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifier } from '../authservice'
import Navbar from '../components/Navbar'


export const Profile = () => {
    const navigate = useNavigate();


    (async () => {
        const token = await verifier();
        console.log('tok1', token)
        if (!token) return navigate("/login");

    })();


    return (<>

        <Navbar />

        <div>Profile</div>


    </>
    )
}
export default Profile