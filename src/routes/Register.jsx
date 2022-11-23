import { useRef } from "react";
import {

    Form,
    json,
    redirect,
    useActionData,
    useNavigate,
} from "react-router-dom";
import { register } from "../authservice";

export async function action({ request }) {
    try {
        const formData = Object.fromEntries(await request.formData());
        console.log(formData)
        const response = await register(formData);

        if (!response.ok) {
            return json({ error: "Email already exists." });
        }
        return redirect("/login");
    } catch (error) {
        console.error(error);
    }
};


export default function Register() {
    const actionData = useActionData()
    const passwordConfirmationRef = useRef();
    return (
        <div className="RegisterForm">
            <Form method="post" action="/register">
                <fieldset
                    style={{ display: "flex", flexDirection: "column", rowGap: 10 }}
                >
                    <label htmlFor="name">name</label>
                    <input className="input input-bordered w-full max-w-xs"
                        type="text"
                        name="name"
                        autoComplete="name"
                        id="name"
                        required
                    //defaultValue="asd"
                    />
                    <label htmlFor="email">email</label>
                    <input className="input input-bordered w-full max-w-xs"
                        type="email"
                        name="email"
                        autoComplete="email"
                        id="email"
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
                    <input className="input input-bordered w-full max-w-xs"
                        ref={passwordConfirmationRef}
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <button type="submit" style={{ backgroundColor: "lightblue" }}>
                        Register
                    </button>
                </fieldset>
            </Form>
        </div>
    )
}
