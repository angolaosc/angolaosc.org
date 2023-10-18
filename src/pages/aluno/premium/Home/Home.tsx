import "./Home.css";
import logo from '../../../../assets/imagens/imagem01.png';
import Cards from "../../../../components/componetsAluno/Cards/Cards";
import { Link } from "react-router-dom";

function Home() {
  return (
<div className="layout-home">

        <div className="header">

          <div className="headerText">
            <h1>
              Estude
              <p className="Connosco">Connosco</p>
            </h1>
            <p className="Alcance">Alcance o sucesso estudantil</p>
          
          <img src={logo} className="logo" alt="Estudante" width={400} />
        </div>
      </div>

      <div className="separador-layout">
        <div className="separador">
          Matérias
        </div>
      </div>

      <div className="w-full h-180 flex justify-center">
        <div className="card-container">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        
        </div>
      </div>
    <Link to='/AssistirAula'></Link>

      </div>
     );
}

export default Home;