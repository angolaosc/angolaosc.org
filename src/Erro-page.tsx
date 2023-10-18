import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <div className="text-center self-center items-center justify-items-center mt-80" id="error-page">
                <h1 className="text-5xl font-bold pb-3">Oops!</h1>
                <p className="text-xl mt-1">Desculpe, ocorreu um erro inesperado.</p>
                <p className="text-sm mt-2">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}   