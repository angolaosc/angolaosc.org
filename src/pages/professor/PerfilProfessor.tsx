import AvatarProfessor from "../../components/componentsProfessor/AvatarProfessor";
import NotificacaoProfessor from "../../components/componentsProfessor/NotificacaoProfessor";
import Logo from '../../assets/imagens/logo.png'

import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function PerfilProfessor() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 py-4 w-full z-10 flexed z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="">
              <img className='w-28' src={Logo} alt="..." />
            </a>
          </div>
          <div>
            <ul className="flex space-x-4">
              {/* <li>
                <a href="#" className="text-white hover:text-gray-400">Home</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">About</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">Contact</a>
              </li> */}
              <li className='mt-1'>
                {/* notificação */}
                <NotificacaoProfessor />
                {/* fim notificação */}
              </li>
              <li>
                {/* foto de perfil */}
                <AvatarProfessor />
                {/* fim foto de perfil */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* fim navbar */}

      {/* conteudo perfil */}
      <div className="m-4 z-0">

        {/* Foto */}
        <div className="mt-8">
          <img className="w-36 h-36 rounded-full mx-auto" src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt="" width="384" height="512" />
          <div className="ml-72 mt-2">
            <input type="file"  />
          </div>

          <div className="">
            <h1 className="text-xl font-bold">
              Username
            </h1>
            <span className="text-gray-300">Funtions</span>
          </div>
        </div>

      </div>
    </>
  );
}