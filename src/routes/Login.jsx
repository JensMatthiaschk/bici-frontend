import React from 'react'
import { Form, redirect, useNavigate } from 'react-router-dom'
import { login } from '../authservice';




export const action = async ({ request }) => {

    try {
        const formData = Object.fromEntries(await request.formData());
        console.log(request)
        await login(formData)
        console.log(formData)
        return redirect(`/profile`)

    }
    catch (err) { console.log(err) }
}


export const Login = () => {

    return (
        <div>
            <Form method="post" action="/login" className="mt-4">
                <fieldset
                // style={{ display: "flex", flexDirection: "column", rowGap: 10 }}
                >
                    <label htmlFor="Email or UserName" >Email or username</label>
                    <br />
                    <input className="input input-bordered w-full max-w-xs mt-2 mb-4"
                        type="text"
                        name="email"
                        //autoComplete=""
                        id="email"
                        required
                    />
                    <br />
                    <label htmlFor="password">password</label>
                    <br />
                    <input className="input input-bordered w-full max-w-xs mt-2 mb-4"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        id="passwordL"
                        required
                    />
                    <br />
                    <button type="submit" className='btn mt-2'>
                        Login
                    </button>
                </fieldset>
            </Form>
        </div>
    )
}
export default Login
