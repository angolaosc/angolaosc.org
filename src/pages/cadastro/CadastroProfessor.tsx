import { ChangeEvent, FormEvent, useRef, useState } from "react";

import './Cadastrar.css'
import { Alert, Avatar, Button } from "@mui/material";

import Logo from '../../assets/imagens/logo.png'

import React from 'react';
import Input from '@mui/material/Input';
import api from '../../services/Api';
import { NavLink } from "react-router-dom";

// Definindo a interface para os dados do formulário de login
interface CadastroFormValues {
    // fotoPerfil?: string;
    nome: string;
    nivel_academico: string;
    instituicao: string;
    area_formacao: string;
    genero: string;
    email: string;
    telefone: string;
    password: string;
    data_nascimento: string;
    obs: string;
    endereco: string;
    estuda: string;
}

// utilização do componente
const CadastroProfessor: React.FC = () => {
    const [formData, setFormData] = useState<CadastroFormValues>({
        nome: '',
        nivel_academico: '',
        instituicao: '',
        area_formacao: '',
        genero: '',
        email: '',
        telefone: '',
        password: '',
        data_nascimento: '',
        obs: '',
        endereco: '',
        estuda: '',
    });

    const [password1, setPassword1] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const clearForm = () => {
        setFormData({
            nome: '',
            nivel_academico: '',
            instituicao: '',
            area_formacao: '',
            genero: '',
            email: '',
            telefone: '',
            password: '',
            data_nascimento: '',
            obs: '',
            endereco: '',
            estuda: '',
        });
        setPassword1('');
    };

    const cadastrarUsuario = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);
        setErrorMessage(null);
        setSuccessMessage(null);

        try {
            if (formData.password !== password1) {
                throw new Error('A senha e a confirmação de senha não coincidem.');
            }
            console.log('Dados do formulário:', formData);
            const response = await api.post('/teachers', formData);
            console.log('Resposta do servidor:', response.data);
            clearForm();
            setSuccessMessage('Cadastro realizado com sucesso.');
            // console.log('Resposta do servidor:', response.data);
        } catch (error) {
            setErrorMessage(error.message || 'Erro ao enviar os dados. Por favor, verifique os campos e tente novamente.');
            console.error('Erro ao enviar os dados:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="conteudo">
            <div className="cardLogin">
                <div className="header-position">
                    <img src={Logo} alt="Logo" className="logoLogin w-48" />
                    <h2 className="descritionHeader">Crie a sua conta</h2>
                </div>
                <br />
                <form onSubmit={cadastrarUsuario}>
                    {/* input username e senha */}
                    <div className="inputsLogin position-inputs">
                        <div className="mt-4">
                            <input
                                type="text"
                                name="nome"
                                required
                                placeholder="Nome completo"
                                className="inputName"
                                value={formData.nome}
                                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="number"
                                    name="telefone"
                                    required
                                    placeholder="Número de telefone"
                                    value={formData.telefone}
                                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                                />
                            </div>
                            <div>
                                <input
                                    type="date"
                                    id="data"
                                    name="data_nascimento"
                                    required
                                    placeholder="Data de nascimento"
                                    value={formData.data_nascimento}
                                    onChange={(e) => setFormData({ ...formData, data_nascimento: e.target.value })}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="instituicao"
                                    required
                                    placeholder="Instituição Frequentada"
                                    value={formData.instituicao}
                                    onChange={(e) => setFormData({ ...formData, instituicao: e.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                {/* Area de formação */}
                                <select name="area_formacao" id="pet-select"
                                    value={formData.area_formacao}
                                    onChange={(e) => setFormData({ ...formData, area_formacao: e.target.value })}
                                >
                                    <option value="">-- Area de formação --</option>
                                    <option value="ensino primário">Ensino primário</option>
                                    <option value="ensino secundário">Ensino secundário</option>
                                    <option value="ensino médio">Ensino médio</option>
                                    <option value="graduação">Graduação</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                {/* Area de formação */}
                                <select name="nivel_academico" id="pet-select"
                                    value={formData.nivel_academico}
                                    onChange={(e) => setFormData({ ...formData, nivel_academico: e.target.value })}
                                >
                                    <option value="">-- Nivel academico --</option>
                                    <option value="10ª classe">10ª Classe</option>
                                    <option value="11ª classe">11ª Classe</option>
                                    <option value="12ª classe">12ª classe</option>
                                    <option value="13ª classe">13ª Classe</option>
                                    <option value="1º ano">1º ano da faculdade</option>
                                    <option value="2º ano">2º ano da faculdade</option>
                                    <option value="3º ano">3º ano da faculdade</option>
                                    <option value="4º ano">4º ano da faculdade</option>
                                    <option value="5º ano">5º ano da faculdade</option>
                                    <option value="6º ano">6º ano da faculdade</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                {/* Genero */}
                                <select name="genero" id="pet-select"
                                    value={formData.genero}
                                    onChange={(e) => setFormData({ ...formData, genero: e.target.value })}
                                >
                                    <option value="">-- Qual o seu sexo --</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="femenino">Femenino</option>
                                    <option value="prefiro não dizer">Prefiro não dizer</option>
                                </select>
                            </div>
                            {/* <div className="mb-4">
                                <select name="nivel_academico" id="pet-select"
                                    value={formData.nivel_academico}
                                    onChange={(e) => setFormData({ ...formData, nivel_academico: e.target.value })}
                                >
                                    <option value="">-- Qual o estado academico --</option>
                                    <option value="frequentando">Frequentando</option>
                                    <option value="concluido">Concluido</option>
                                </select>
                            </div> */}
                            <div className="mb-4">
                                <select name="estado" id="pet-select"
                                    value={formData.estuda}
                                    onChange={(e) => setFormData({ ...formData, estuda: e.target.value })}
                                >
                                    <option value="">-- Estudante --</option>
                                    <option value="sim">Sim</option>
                                    <option value="não">Não</option>
                                </select>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="endereco"
                                    required
                                    placeholder="Endereço"
                                    value={formData.endereco}
                                    onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="obs"
                                    required
                                    placeholder="observação"
                                    value={formData.obs}
                                    onChange={(e) => setFormData({ ...formData, obs: e.target.value })}
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="Senha"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    id="password"
                                    name="password1"
                                    value={password1}
                                    onChange={(e) => setPassword1(e.target.value)}
                                    required
                                    placeholder="Confirmar a sua senha"
                                />
                            </div>
                        </div>
                    </div>

                    {/* button entrar e cancelar */}
                    <div className="button-position">
                        <Button type="submit" variant="contained" color="primary" name="btnCadastrar" disabled={isLoading}>
                            {isLoading ? 'Enviando...' : 'Cadastrar'}
                        </Button>
                        <Button href="/" variant="contained" color="error" className="btnCancelarLogin">Cancelar</Button>
                    </div>
                    <div>
                        {errorMessage && <Alert severity="error" className="error-message">{errorMessage}</Alert>}
                        {successMessage && <Alert severity="success">{successMessage}</Alert>}
                    </div>
                </form>
                <div className="criarConta-position mb-10">
                    <p>Já tenho uma conta <NavLink to="/" className="font-bold text-blue-400
                        hover:text-blue-500">
                        Entrar
                    </NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default CadastroProfessor;