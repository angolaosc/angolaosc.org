import { ChangeEvent, FormEvent, useState } from "react";

import './Login.css'
import { Button } from "@mui/material";

import Logo from '../../assets/imagens/logo.png'
import Nav from "../../components/componetsAluno/Nav/Nav";
import { NavLink } from "react-router-dom";

// Definindo a interface para os dados do formulário de login
interface LoginFormValues {
    username: string;
    password: string;
}

// utilização do componente
const Login: React.FC = () => {
    const [formData, setFormData] = useState<LoginFormValues>({
        username: '',
        password: '',
    });

    const verificarValor = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const fazerLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Dados do formulário:', formData);
        // Realizar a lógica de autenticação aqui
    };

    return (
        <div className="conteudo">
            <div className="cardLogin">
                <div className="header-position">
                    <img src={Logo} alt="Logo" className="logoLogin w-48" />
                    <h2 className="descritionHeader">Iniciar sessão</h2>
                </div>
                <br />
                <form onSubmit={fazerLogin}>
                    {/* input username e senha */}
                    <div className="inputsLogin position-inputs">
                        <div>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={verificarValor}
                                required
                                placeholder="E-mail ou Nome de usuário"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={verificarValor}
                                required
                                placeholder="Senha"
                            />
                        </div>
                    </div>

                    {/* esquece senha and criar conta */}
                    <div className="forgetSenha-position">
                        <p>Recuperar a minha <a href="" className="font-bold text-blue-400
                        hover:text-blue-500">
                            senha
                        </a></p>
                    </div>

                    {/* button entrar e cancelar */}
                    <div className="ml-12 mb-4 mt-4">
                        <Button type="submit" variant="contained" color="primary">Entrar</Button>
                        <Button href="/" variant="contained" color="error" className="btnCancelarLogin">Cancelar</Button>
                    </div>

                    <div className="criarConta- mb-10 ml-14">
                        <p>Não tens uma conta? <NavLink to="/CriarConta" className="font-bold text-yellow-400
                        hover:text-yellow-500">
                            criar conta
                        </NavLink></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;