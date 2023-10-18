// Importação das imagens
import Logo from '../assets/imagens/logo.png'
import ImagemBanner from '../assets/imagens/imagem02.png'
import imagemProfessores from '../assets/imagens/imagem03.png'
import CardTestemhos from '../assets/cards/cardTestemunhas.png'

// importação do css
import "./Index.css";

// importação de componentes
import AulasCategory from '../components/Cards/Category/AulasCategory';
import ContagemHome from '../components/Cards/cantagem/ContagemHome';
import BotaoSejaAluno from '../components/Buttons/BotaoSejaAluno';
import BotaoEntrar from '../components/Buttons/BotaoEntrar';
import BotaoCriarConta from '../components/Buttons/BotaoCriarConta';
import BotaoEncontrarProfessor from '../components/Buttons/BotaoEncontrarProfessor';
import Nav from '../components/componetsAluno/Nav/Nav';

export default function Index() {

  return (
    <>
      {/* Navbar */}
      <Nav avatar={false} button={true}/>
      {/* fim navbar */}

      <div className='z-0'>
        {/* Banner */}
        <div className="bg-blue-500 py-44">
          <div className="container mx-auto flex justify-rigth">
            {/* Title */}
            <h1 className="text-white text-xl font-black">
              <h1 className='text-title'>
                <p className='py-14'>Estude</p>
                <p className='text-title2'>Connosco</p>
              </h1>

              {/* descriçao - texto abaixo do title */}
              <div className='descriction mt-8'>
                <span className='text-white font-normal'>
                  Neste ano lectivo e alcance o sucesso estudántil
                </span>
              </div>

              {/* button seja um aluno */}
              <div className='position-button mt-4'>
                <BotaoSejaAluno />
              </div>
            </h1>
          </div>

          {/* imagem banner */}
          <div className='container mx-auto flex items-center justify-center mr-1 mb-16 pb-2'>
            {/* <img className='w-16 imagemBanner' src={ImagemBanner} alt="..." /> */}
          </div>
        </div>
        {/* fim banner */}

        {/* rodapé */}
        <div className='bg-slate-700 h-10'>
          <div className='container text-center pt-3 ml-48'>
            <p className='text-gray-200'>Todos os direitos reservados, desenvolvido por <a href="">Dev Codes</a></p>
          </div>          
        </div>
        {/* fim do rodapé */}


      </div>


    </>
  );
}