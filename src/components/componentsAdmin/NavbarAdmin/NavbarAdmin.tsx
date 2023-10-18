import BotaoCriarConta from "../../Buttons/BotaoCriarConta";
import BotaoEntrar from "../../Buttons/BotaoEntrar";
import Logo from '../../../assets/imagens/logo.png'
import { useState } from "react";
import AvatarAdmin from "../AvatarAdmin";
import NotificacaoAdmin from "../NotificacaoAdmin";
import { NavLink } from "react-router-dom";
interface props{
  button: boolean;
  avatar: boolean;
}
function NavbarAdmin(props: props) {

  const [appear, setAppear] = useState(props.button);
  const [appearAvatar, setAppearAvatar] = useState(props.avatar)
  
  return ( 
        <div>
        <nav className="bg-[#0101B4] py-5 w-full fixed z-10 max-w-full">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <NavLink to="/HomeProfessorAtivo">
              <img className='w-28' src={Logo} alt="..." />
            </NavLink>
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
              {appear &&
              <>
              </>}
              <div>
                {appearAvatar &&
                    <div className="flex justify-center items-center w-100 ">
                    {/* <Notification />
                    <FotoAvatar/> */}
                    <NotificacaoAdmin/>
                    <AvatarAdmin/>
                    </div>
                }
                
        
      </div>
            </ul>
          </div>
        </div>
      </nav>
        </div>
     );
}

export default NavbarAdmin;