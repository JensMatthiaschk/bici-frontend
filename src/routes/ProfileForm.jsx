import React, { useState } from 'react';
import { Form, useActionData, redirect } from 'react-router-dom';
import { updateUser } from '../authservice';
import useForceUpdate from 'use-force-update';

export async function action({ request }) {
    try {
        const data = new FormData();
        const formInput = Object.fromEntries(await request.formData());
        console.log("formInput", formInput)
        //Object.keys(formInput).forEach((k) => (formInput[k] === '' || formInput[k] === undefined) && delete formInput[k]);
        formInput.nickname && data.append("nickname", formInput.nickname)
        formInput.address && data.append("address", formInput.address)
        formInput.description && data.append("description", formInput.description)
        formInput.bikeType && data.append("bikeType", formInput.bikeType)
        formInput.cell && data.append("cell", formInput.cell)
        formInput.birthday && data.append("birthday", formInput.birthday)
        formInput.avatar_img && data.append("avatar_img", formInput.avatar_img)
        console.log("DATA", data)
        const updatedUserData = await updateUser(data);
        location.reload()
        // console.log("updatedUserData", updatedUserData)
    } catch (error) {
        console.error(error);
    }
};


const ProfileForm = () => {
    const actionData = useActionData()
    const forceUpdate = useForceUpdate();


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
                            <label htmlFor="address">Postleitzahl/PostalCode</label>
                            <input className="input input-bordered w-full max-w-xs"
                                type="number"
                                placeholder="write at least your Postleitzahl so you can find riders in your area"
                                name="address"

                                id="address"
                            //defaultValue="asd@asd.com"
                            />

                            <label htmlFor="description">description</label>
                            <textarea className="input input-bordered h-32 w-full max-w-xs"
                                type="text"
                                placeholder="Describe your Riding Style and what are your here for?"
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
                                placeholder="MTB? Road? Gravel? E-Bike? Travel?"
                            />
                            <label className="mb-0" htmlFor="cell">PhoneNumber</label>
                            <input className="input mt-0 input-bordered w-full max-w-xs"
                                type="text"
                                name="cell"
                                id="cell"
                                placeholder="it will not be public"
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
                                accept='image/png, image/jpg, image/jpeg, image/gif'
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