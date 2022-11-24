import { useRouteError } from "react-router-dom";


export default function ErrorPage() {

    const error = useRouteError();

    return (

        <div>
            <h1>uuuuhhh, something went wrong! </h1>
            <p>{error.message}</p>
        </div>
    )
}