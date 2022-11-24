import React from 'react';
import { Form, useActionData } from 'react-router-dom';


const ProfileForm = () => {
    const actionData = useActionData()
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-slate-300 text-center">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className="text-sky-600 pb-4 text-1xl uppercase font-bold">Edit Profile</h2>
                    <Form method="post" action="/profile">
                        <fieldset
                            style={{ display: "flex", flexDirection: "column", rowGap: 10 }}
                        >
                            <label htmlFor="nickname">nickname</label>
                            <input className="input input-bordered w-full max-w-xs"
                                type="text"
                                name="nickname"
                                autoComplete="nickname"
                                id="nickname"
                                required
                            //defaultValue="asd"
                            />
                            <label htmlFor="address">email</label>
                            <input className="input input-bordered w-full max-w-xs"
                                type="text"
                                name="address"
                                autoComplete="address"
                                id="address"
                                required
                            //defaultValue="asd@asd.com"
                            />
                            {actionData?.error ? (
                                <p style={{ color: "red" }}>{actionData.error}</p>
                            ) : null}
                            <label htmlFor="password">password</label>
                            <input className="input input-bordered w-full max-w-xs"
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                id="password"
                                required
                                //defaultValue="asd"
                                minLength={5}
                                onInvalid={() => "Please enter minium 5 chracters"}
                            />
                            <button type="submit" style={{ backgroundColor: "lightblue" }}>
                                Register
                            </button>
                        </fieldset>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default ProfileForm