import React, { useEffect } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { getProfileData, verifier } from '../authservice'
import Navbar from '../components/Navbar'
import ProfileDashboard from '../components/ProfileDashboard'
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
        if (!token.success) return navigate("/login");
    })();

    return (<>
        <Navbar />

        <div className=' bg-gradient-to-b from-accent to-white pt-10'>
            {/* <div className="chat chat-start">
                <div className="chat-bubble">It's over Anakin, <br />I have the high ground.</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-black">You underestimate my power!</div>
            </div> */}
            <div className="flex w-full justify-center mt-5 mb-5"><img src="/assets/bici-logo.png" alt="logo" className="w-52" /></div>
            {profileData.data ?
                <div className=" text-center mb-2">
                    <div className="flex justify-center mb-5 pt-8 ">
                        <img className=" w-24 h-3/5 rounded-full border-solid border-2 border-grey " src={`${profileData.data.avatar_img.aws_url}`} />
                    </div>
                    <div className="text-black">
                        {/* <h3 className='font-bold pb-4 text-base'>Account Details</h3> */}

                        {profileData.data.nickname !== "" ?
                            <>
                                <h6 className='font-bold pb-2 text-lg'>Welcome Back!</h6>
                                <p className='text-lg pb-4'>{profileData.data.nickname}</p>
                            </> : null}

                        {profileData.data.bikeType !== "" ?
                            <>
                                <h6 className='font-bold  pb-2 text-lg'>My bike style</h6>
                                <p className='text-lg pb-4'>{profileData.data.bikeType}</p>
                            </> : null}
                        {profileData.data.description ?
                            <>
                                <h6 className='font-bold  pb-2 text-lg'>About me</h6>
                                <p className='text-lg pb-4'> {profileData.data.description}</p>
                            </>
                            : null}
                        {profileData.data.address ?
                            <>
                                <h6 className='font-bold pb-2 text-lg'>address</h6>
                                <p className='text-lg pb-4'>{profileData.data.address}</p>
                            </>
                            : null}
                        {profileData.data.cell ?
                            <>
                                <h6 className='font-bold  pb-2 text-lg'>cellphone number</h6>
                                <p className='text-lg pb-4'>{profileData.data.cell}</p>
                            </>
                            : null}
                        {profileData.data.birthday ?
                            <>
                                <h6 className='font-bold  pb-2 text-lg'>birthday</h6>
                                <p className='text-lg pb-4'>{new Date(profileData.data.birthday).toLocaleDateString('en-IN')}</p>
                            </>
                            : null}
                        {profileData.data.description === "" || profileData.data.address === "" || profileData.data.cell === "" || profileData.data.birthday === "" ?
                            <>
                                <p className='text-lg mt-4 mb-2'>Please complete filling out your profile details</p>
                                <label htmlFor='ProfileForm' className="btn btn-lg">Edit Profile</label>
                            </>
                            : ""}
                        <ProfileForm />
                    </div>
                </div>
                :
                <>
                    <p className='text-sm mt-4 mb-2'>Please complete filling out your profile details</p>
                    <label htmlFor='ProfileForm' className="btn btn-sm">Edit Profile</label>
                    <ProfileForm />
                </>
            }
        </div>
        <div className='flex justify-center place-content-around bg-white '>
            <ProfileDashboard />
        </div>
    </>
    )

}
export default Profile