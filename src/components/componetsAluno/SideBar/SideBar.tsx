import React, { useState } from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotesIcon from '@mui/icons-material/Notes';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import FotoAvatar from "../Avatar/FotoAvatar";
import '../../../layouts/Default.css'

 interface LayoutProps  { 
    nome: string;
  }


  const SideBar = (props: LayoutProps) => {
    const menus = [
        { name: "Home", link: "/Home", icon: HomeOutlinedIcon },
        { name: "Sebentas", link: "/", icon:ClassOutlinedIcon },
        { name: "Provas", link: "/", icon:DescriptionOutlinedIcon  },
        { name: "Aulas", link: "/", icon: VideocamOutlinedIcon},
        { name: "Mentorias", link: "/", icon: AssignmentOutlinedIcon, margin: true },
        { name: "Exercicios", link: "/", icon: TagOutlinedIcon},
        { name: "Loja", link: "/loja", icon:  ShoppingCartOutlinedIcon},
        { name: "Aulas ao vivo", link: "/", icon: SmartDisplayOutlinedIcon },
        { name: "Sair", link: "/", icon: LogoutOutlinedIcon },
      ];
  const [open, setOpen] = useState(false);
  return (
    <section className="flex gap-6 z-0 vw-full pt-20 fixed">
      <div
        className={`bg-blue-800 min-h-screen ${
          open ? "open" : "close"
        } duration-500 text-gray-100 px-4`}
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
        <div className="flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-4 font-medium p-2 hover:bg-black rounded-md`}
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
  );
};
export default SideBar;



