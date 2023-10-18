import {createBrowserRouter} from "react-router-dom";

import Index from './pages/Index'
import Login from "./pages/login/Login";
import Default from "./layouts/Default";
import Home from "./pages/aluno/premium/Home/Home";
import Sebentas from "./pages/aluno/premium/Sebentas/Sebentas";
import Aulas from "./pages/aluno/premium/Aulas/Aulas";
import AssistirAula from "./pages/aluno/premium/AssistirAula/AssistirAula";
import HomeProfessor from "./pages/professor/HomeProfessor";
import HomeProfessorAtivo from "./pages/professor/professorAtivo/HomeProfessorAtivo";
import RecrutamentoProfessorAtivo from "./pages/professor/professorAtivo/RecrutamentoProfessorAtivo";
import CalendárioProfessorAtivo from "./pages/professor/professorAtivo/CalendarioProfessorAtivo";
import ErrorPage from "./Erro-page";
import HomeAdmin from "./pages/admin/HomeAdmin";
import Cadastrar from "./pages/cadastro/Cadastrar";
import Dashboard from "./pages/admin/Dashboard";
import ListProfessores from "./pages/admin/ListProfessores";
import ListAlunos from "./pages/admin/ListAlunos";
import CadastroProfessor from "./pages/cadastro/CadastroProfessor";

export const router = createBrowserRouter([
    // Routa index do projecto
    // {
    //     path: "/",
    //     element: <Index/>,
    //     errorElement: <ErrorPage />,
    // },
    {
        path: "/",
        element: <Login/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/CriarConta",
        element: <Cadastrar/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/CriarContaProfessor",
        element: <CadastroProfessor/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/HomeAluno",
        element: <Default/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "/HomeAluno",
                element: <Home/>
            },
            {
                path: "Sebentas",
                element: <Sebentas/>
            },
            {
                path: "Aulas",
                element: <Aulas/>
            },
            {
                path: "AssistirAula",
                element: <AssistirAula/>
            }
        ],

    },
    {
        path: "/HomeProfessor",
        element: <HomeProfessor/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/HomeProfessorAtivo",
        element: <HomeProfessorAtivo/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "/HomeProfessorAtivo",
                element: <RecrutamentoProfessorAtivo/>
            },
            {
                path: "calendarioProfessorAtivo",
                element: <CalendárioProfessorAtivo/>
            }

        ],
    },
    {
        path: "/HomeAdmin",
        element: <HomeAdmin/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "/HomeAdmin",
                element: <Dashboard/>
            },
            {
                path: "ListaProfessores",
                element: <ListProfessores/>
            },
            {
                path: "Aluno",
                element: <ListAlunos/>
            }
        ],
    }
]);