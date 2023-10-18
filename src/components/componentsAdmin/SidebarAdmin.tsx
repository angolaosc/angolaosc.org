import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarAdmin: React.FC = () => {
    return (
        <aside className="bg-gray-800 text-white w-64 p-4 h-screen fixed left-0 top-0">
            <div className="text-xl font-semibold">Admin</div>
            <ul className="mt-6">
                <li className="mb-3">
                    <NavLink to="/HomeAdmin" className="block text-gray-300 hover:text-white hover:text-xl">
                    <i className="bi bi-speedometer2"></i> <span className='ml-1'>Dashboard</span>
                    </NavLink>
                </li>
                <li className="mb-3">
                    <NavLink to="ListaProfessores" className="block text-gray-300 hover:text-white hover:text-xl">
                    <i className="bi bi-person-workspace"></i> <span className='ml-1'>Professores</span>
                    </NavLink>
                </li>
                <li className="mb-3">
                    <NavLink to="Aluno" className="block text-gray-300 hover:text-white hover:text-xl">
                    <i className="bi bi-people"></i> <span className='ml-1'>Alunos</span>
                    </NavLink>
                </li>
                <li className="mb-3">
                    <a href="#" className="block text-gray-300 hover:text-white hover:text-xl">
                    <i className="bi bi-camera-video"></i> <span className='m-1'>Aulas</span>
                    </a>
                </li>
                <li className="mb-3">
                    <a href="#" className="block text-gray-300 hover:text-white hover:text-xl">
                    <i className="bi bi-journal-bookmark-fill"></i> <span className='ml-1'>Sebentas</span>
                    </a>
                </li>
                <li className="mb-3">
                    <a href="#" className="block text-gray-300 hover:text-white hover:text-xl">
                    <i className="bi bi-hash"></i> <span className='ml-1'>Exercícios</span>
                    </a>
                </li>
                <li className="mb-3">
                    <a href="#" className="block text-gray-300 hover:text-white hover:text-xl">
                    <i className="bi bi-envelope-at"></i> <span className='ml-1'>Solicitações</span>
                    </a>
                </li>
                <li className="mb-3">
                    <a href="#" className="block text-gray-300 hover:text-white hover:text-xl">
                    <i className="bi bi-chat-square-quote"></i> <span className='ml-1'>Opniões</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default SidebarAdmin;
