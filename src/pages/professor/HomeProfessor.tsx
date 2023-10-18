import Logo from '../../assets/imagens/logo.png'
import AvatarProfessor from '../../components/componentsProfessor/AvatarProfessor';
import NotificacaoProfessor from '../../components/componentsProfessor/NotificacaoProfessor';
import './HomeProfessor'

// importação para grids
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RecrutamentoProfessor from '../../components/componentsProfessor/CardsProfessores/RecrutamentoProfessor';

// const para Grid
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function HomeProfessor() {
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

      <div className="z-0 m-6 mt-8  sm:m-3 sm:mt-8 ">
        <div>
          <h1 className='text-2xl font-bold'>Vagas para recrutar</h1>
        </div>

        {/* Grid para cards de recrutament */}
        <div className='mt-6 sm:mt-8 md:mt-8'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={5} columns={20} className='flex space-x-2 sm:space-x-48 md:space-x-2'>
              <RecrutamentoProfessor />
              <RecrutamentoProfessor />
              <RecrutamentoProfessor />
              <RecrutamentoProfessor />
              <RecrutamentoProfessor />
              <RecrutamentoProfessor />
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
}