import './CardsVideoAulas.css'
import {useState} from 'react'
import capa from '../../../assets/imagens/nasty.jfif'
import AssistirAula from '../../../pages/aluno/premium/AssistirAula/AssistirAula';
import { useNavigate } from 'react-router-dom';
function Cards() {
    const navigate = useNavigate();
    const handleClickOpen = () => {
        navigate('/AssistirAula')
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    const [open, setOpen] = useState(false);

   
    return ( 
    <div>
        <section className="card-video">
            <a>
                <img src={capa}  width={175.14} alt="Capa" />
            </a>

            <div className="titulo-video">Física <br /><p className="views-video">1k visualizações</p></div>
            
            
            <div className="footer-video">
                <p className='see-video' onClick={handleClickOpen}>Assistir Agora</p>
            </div>
        </section>
    </div>
     );
}

export default Cards;