import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface card{
    numero:number;
    titulo:string;
}

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
);

export default function CardContagem(props: card) {
    return (
        <Card sx={{ minWidth: 275 }} className='bg-gradient-to-r from-cyan-500 to-blue-500'>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                   <p className='text-slate-200 mb-2'>Quantidade de {props.titulo}</p>
                </Typography>
                <Typography variant="h5" component="div">
                    <div>

                    </div>
                    <div>
                        <strong className='font-bold text-5xl text-slate-50'>{props.numero}</strong>
                        <span className='text-sm text-slate-300'> {props.titulo}</span>
                    </div>
                </Typography>
            </CardContent>
        </Card>
    );
}