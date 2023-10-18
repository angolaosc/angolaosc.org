import './Titulo.css'

interface props{
    titulo:string;
}
function Titulo(props: props) {
    return ( 
        <div className="Titulo-layout">
        <div className="Titulo">
          {props.titulo}
        </div>
      </div>
     );
}

export default Titulo;