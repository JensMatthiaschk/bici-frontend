import { useEffect } from "react";
import {
    Form,
    json,
    redirect,
    useActionData,
    useNavigate,
} from "react-router-dom";
import { register } from "../utils.jsx";

export async function action({ request }) {
    try {
        const formData = Object.fromEntries(await request.formData());
        const response = await register(formData);

        if (!response.ok) {
            console.log(response)
            return json({ error: "Email already exists." });
        }
        return redirect("/login");
    } catch (error) {
        console.error(error);
    }
};


export default function Register() {
    const actionData = useActionData()
    return (
        <div className="RegisterForm">
            <Form method="post" action="/register">
                <fieldset
                    style={{ display: "flex", flexDirection: "column", rowGap: 10 }}
                >
                    <label htmlFor="name">name</label>
                    <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        id="name"
                        required
                    //defaultValue="asd"
                    />
                    <label htmlFor="email">email</label>
                    <input
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
                    <input
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        id="password"
                        required
                        //defaultValue="asd"
                        minLength={8}
                        onInvalid={() => "Please enter minium 8 chracters"}
                    />
                    <button type="submit" style={{ backgroundColor: "lightblue" }}>
                        Register
                    </button>
                </fieldset>
            </Form>
        </div>
    )
}