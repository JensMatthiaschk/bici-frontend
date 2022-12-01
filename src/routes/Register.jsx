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
        await register(formData);

        return redirect("/profile");
    } catch (error) {
        console.error(error);
    }
};


export default function Register() {
    const actionData = useActionData()
    return (
        <div className="RegisterForm ">
            <Form method="post" action="/signup">
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
                        value={"123@" + Math.random() + ".com"}
                        id="emailR"
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
                        value={"123123"}
                        required
                        //defaultValue="asd"
                        minLength={5}
                        onInvalid={() => "Please enter minium 5 chracters"}
                    />
                    {/* <input className="input input-bordered w-full max-w-xs"
                        ref={passwordConfirmationRef}
                        type="password"
                        placeholder="Confirm Password"
                    /> */}
                    <button type="submit" className="btn">
                        Register
                    </button>
                </fieldset>
            </Form>
        </div>
    )
}
