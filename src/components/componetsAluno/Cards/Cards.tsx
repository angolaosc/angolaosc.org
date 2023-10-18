import './Cards.css'
import Capa from'../../../assets/imagens/image.png'
import DialogMaterias from '../Dialog/DialogMaterias';
interface Livro{
    titulo?: string;
    visualizações?:number;
    livro?:string;
     // o prop livro vai receber o livro da api depois vai ser passada para o dialogMaterias que vai ter uma props para mostrar o livro no modal e para baixar
}

import {useState} from 'react'
function Cards() {
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    const [open, setOpen] = useState(false);

   
    return ( 
    <div>
        <DialogMaterias open={open} close={handleClose}/>
        <section className="card">
            <a>
                <img src={Capa} width={175.14} alt="Capa" />
            </a>

            <div className="titulo">Física <br /><p className="views">1k visualizações</p></div>
            
            
            <div className="footer">
                <p className='see' onClick={handleClickOpen}>Ver agora</p>
                <p className='download'>Baixar</p>
            </div>
        </section>
    </div>
     );
}

export default Cards;