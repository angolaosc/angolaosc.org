import CardsVideo from '../../../../../src/components/componetsAluno/CardsVideoAulas/CardsVideo'
import Titulo from '../../../../components/componetsAluno/Header/Titulo';
import './Aulas.css'
function Aulas() {
    return ( 
        <div>
        <Titulo titulo="Aulas"/>
        <div className="w-full h-180 flex justify-center">
    <div className="card-container">
    <CardsVideo/>
    <CardsVideo/>
    <CardsVideo/>
    <CardsVideo/>
    <CardsVideo/>
    <CardsVideo/>
    <CardsVideo/>
    <CardsVideo/>
    <CardsVideo/>
    <CardsVideo/>
    <CardsVideo/>
    <CardsVideo/>
    <CardsVideo/>
    <CardsVideo/>
    <CardsVideo/>
    </div>
  </div>
    </div>
     );
}

export default Aulas;