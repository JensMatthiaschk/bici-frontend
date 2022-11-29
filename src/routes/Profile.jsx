import React, { useEffect } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { getProfileData, verifier } from '../authservice'
import Navbar from '../components/Navbar'
import ProfileForm from './ProfileForm'

export async function loader() {
    return getProfileData();
    // const data = await getProfileData();
    // console.log("loader", data);
    // return data;
}

export const Profile = () => {
    const navigate = useNavigate();
    const profileData = useLoaderData();
    console.log('ProfileData', profileData);
    //const birthday = new Date(profileData.data.birthday).toLocaleTimeString('en-IN')


    (async () => {
        const token = await verifier();
        // console.log('tok1', token)
        if (!token) return navigate("/login");

    })();

    return (<>

        <Navbar />
        {profileData.data ?
            <div className="text-center mb-3">
                <div className="flex justify-center mb-5">
                    <img className="w-14 rounded-full" src={`${profileData.data.avatar_url ? profileData.data.avatar_url : ''}`} />
                </div>
                <h3 className='font-bold'>Account Details</h3>
                {profileData.data.nickname !== "" ?
                    <>
                        <h6 className='font-bold text-sm'>Your nickname</h6>
                        <p className='text-sm'>{profileData.data.nickname}</p>
                    </> : null}
                {profileData.data.bikeType !== "" ?
                    <>
                        <h6 className='font-bold text-sm'>My bike style</h6>
                        <p className='text-sm'>{profileData.data.bikeType}</p>
                    </> : null}

                {profileData.data.description ?
                    <>
                        <h6 className='font-bold text-sm'>About me</h6>
                        <p className='text-sm'>about me: {profileData.data.description}</p>
                    </>
                    : null}

                {profileData.data.address ?
                    <>
                        <h6 className='font-bold text-sm'>address</h6>
                        <p className='text-sm'>{profileData.data.address}</p>
                    </>
                    : null}
                {profileData.data.cell ?
                    <>
                        <h6 className='font-bold text-sm'>cellphone number</h6>
                        <p className='text-sm'>{profileData.data.cell}</p>
                    </>
                    : null}
                {profileData.data.birthday ?
                    <>
                        <h6 className='font-bold text-sm'>birthday</h6>
                        <p className='text-sm'>{new Date(profileData.data.birthday).toLocaleDateString('en-IN')}</p>
                    </>
                    : null}
                {profileData.data.description === "" || profileData.data.address === "" || profileData.data.cell === "" || profileData.data.birthday === "" ?
                    <>
                        <p className='text-sm mt-4 mb-2'>Please complete filling out your profile details</p>
                        <label htmlFor='ProfileForm' className="btn btn-sm">Edit Profile</label>
                    </>
                    : ""}
                <ProfileForm />
            </div>
            :
            <>
                <p className='text-sm mt-4 mb-2'>Please complete filling out your profile details</p>
                <label htmlFor='ProfileForm' className="btn btn-sm">Edit Profile</label>
                <ProfileForm />
            </>
        }
    </>
    )

}
export default Profile