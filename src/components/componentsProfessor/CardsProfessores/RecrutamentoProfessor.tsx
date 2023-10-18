import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function RecrutamentoProfessor() {
    return (
        <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Há 3 dias
                    </Typography>
                    <Typography variant="h5" component="div">
                        Professor de Química
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Publicado por - Manuel Ndongala
                    </Typography>
                    <Typography variant="body2">
                        <h1 className='font-bold'>Requesitos</h1>
                        <br />
                        {'Entendimento de química funcamental, e que esteja disponível de segunda á sexta no período matinal'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Ver mais</Button>
                    <Button size="small" >Candidatar-se</Button>
                </CardActions>
            </Card>
        </Grid>

    );
}