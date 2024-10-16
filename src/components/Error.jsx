import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();

    return (
        <div>
            <h1>Page not found!!!</h1>
            <p className="text-lg font-bold">{err.status}:{err.statusText}</p>
        </div>
    )
}

export default Error;