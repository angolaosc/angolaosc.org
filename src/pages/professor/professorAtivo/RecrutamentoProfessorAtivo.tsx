import { Box, Grid } from "@mui/material";
import RecrutamentoProfessor from "../../../components/componentsProfessor/CardsProfessores/RecrutamentoProfessor";
import Titulo from "../../../components/componetsAluno/Header/Titulo";


export default function RecrutamentoProfessorAtivo() {
    return (
        <div>
            <Titulo titulo="Recrutamento" />
            <div className="w-full h-180 flex justify-center">
                <div className="card-container">
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
        </div>
    );
}