import React from 'react';
import { Form, useActionData, redirect } from 'react-router-dom';
import { updateUser } from '../authservice';

export async function action({ request }) {
    try {
        const formData = Object.fromEntries(await request.formData());
        const updatedUserData = await updateUser(formData);
        // console.log("updatedUserData", updatedUserData)
    } catch (error) {
        console.error(error);
    }
};


const ProfileForm = () => {
    const actionData = useActionData()
    return (
        <>
            <input type="checkbox" id="ProfileForm" className="modal-toggle" />
            <label htmlFor="ProfileForm" className="modal cursor-pointer">
                <label htmlFor="ProfileForm" className="btn btn-xs btn-circle top-3 right-4 absolute">✕</label>
                <label className="modal-box relative scrollbar-hide" htmlFor="">

                    <h2 className="text-sky-600 pb-4 text-1xl uppercase font-bold text-center">Edit Profile</h2>
                    <Form method="post" action="/profile" encType="multipart/form-data">
                        <fieldset className="flex flex-col items-center gap-3"
                        >
                            <label htmlFor="nickname">nickname</label>
                            <input className="input input-bordered w-full max-w-xs"
                                type="text"
                                name="nickname"
                                autoComplete="nickname"
                                id="nickname"
                            //defaultValue="asd"
                            />
                            <label htmlFor="address">address</label>
                            <input className="input input-bordered w-full max-w-xs"
                                type="text"
                                name="address"
                                autoComplete="address"
                                id="address"
                            //defaultValue="asd@asd.com"
                            />
                            {/* {actionData?.error ? (
                                <p style={{ color: "red" }}>{actionData.error}</p>
                            ) : null} */}
                            <label htmlFor="description">description</label>
                            <textarea className="input input-bordered h-32 w-full max-w-xs"
                                type="text"
                                name="description"
                                id="description"
                                //defaultValue="asd"
                                minLength={5}
                                onInvalid={() => "Please enter minium 5 chracters"}
                            />
                            <label htmlFor="bikeType">bike type</label>
                            <input className="input input-bordered w-full max-w-xs"
                                type="text"
                                name="bikeType"
                                id="bikeType"
                            //defaultValue="asd"
                            />
                            <label htmlFor="cell">cell</label>
                            <input className="input input-bordered w-full max-w-xs"
                                type="text"
                                name="cell"
                                id="cell"
                                //required
                                //defaultValue="asd"
                                minLength={5}
                                onInvalid={() => "Please enter minium 5 chracters"}
                            />
                            <label htmlFor="birthday">birthday</label>
                            <input className="input input-bordered w-full max-w-xs"
                                type="date"
                                name="birthday"
                                id="birthday"
                            />
                            <label htmlFor="avatar_img">upload avatar image</label>
                            <input className="file-input file-input-bordered w-full max-w-xs"
                                type="file"
                                name="avatar_img"
                                id="avatar_img"
                            />
                            <button type="submit" className="btn btn-sm">
                                Submit
                            </button>
                        </fieldset>
                    </Form>
                </label>
            </label>
        </>
    )
}

export default ProfileForm