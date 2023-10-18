/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Outlet } from 'react-router-dom'
import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import {useState} from 'react';
import './HomeProfessorAtivo.css'
import NavbarProfessor from '../../../components/componentsProfessor/Navbar/NavbarProfessor';

export default function HomeProfessorAtivo() {

    const [open, setOpen] = useState(false);
    const menus = [
        { name: "Home", link: "/HomeProfessorAtivo", icon: HomeOutlinedIcon },
        { name: "Agenda", link: "Sebentas", icon:ClassOutlinedIcon },
        { name: "Calendário", link: "calendarioProfessorAtivo", icon:DescriptionOutlinedIcon  },
        { name: "Aulas", link: "/Aulas", icon: VideocamOutlinedIcon},
        { name: "Mentorias", link: "/", icon: AssignmentOutlinedIcon, margin: true },
        { name: "Exercicios", link: "/", icon: TagOutlinedIcon},
        { name: "Loja", link: "/loja", icon:  ShoppingCartOutlinedIcon},
        { name: "Aulas ao vivo", link: "/", icon: SmartDisplayOutlinedIcon },
        { name: "Sair", link: "/", icon: LogoutOutlinedIcon, margin: true },

      ];
    return (
        
        <div>
            <div className='layout'>
                <NavbarProfessor avatar={true} button={false}/>
                <section className="flex gap-6 z-0 h-full pt-20 fixed"> 
      <div
        className={`bg-[#333333] min-h-screen ${
          open ? "open" : "close"
        } duration-500 text-white px-4`}
      >
        <div className="py-3 flex justify-end">
        {/* <div className={open ? 'avatar': 'avatarHidden'}>
        <FotoAvatar/>
        <p>{props.nome}</p>
        <p>Estudante</p>
      </div> */}
          <MenuIcon
          sx={{
            cursor:'pointer'
          }}
            onClick={() => setOpen(!open)}
          />
         
        </div>
        <div className="flex flex-col gap-2 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-s font-Roboto  gap-3.5 font-medium p-2 hover:bg-[#0101B4] rounded-md`}
            >
              <div>{React.createElement(menu?.icon,)}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        
        </div>

      </div>
     
    </section>
                    <div className={`content ${
                  open ? "content1":'content2'
                }`}>
                <Outlet/>
                </div>

            </div>
        </div>
    )
}