import { NavLink } from "react-router-dom";

export default function BotaoEntrar() {
    return (
        <>
        {/* Botão seja um aluno */}
            <div>
                <NavLink
                    to="/Home"
                    className="inline-block rounded-md border border-transparent bg-blue-400 px-4 py-2 text-center font-bold text-white hover:bg-blue-500"
                >
                    Iniciar Sessão
                </NavLink>
            </div>
        </>
    );
}