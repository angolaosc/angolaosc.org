import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import api from '../../../services/Api';

interface UserData {
    nome: string;
    nivel_academico: string;
    instituicao: string;
    area_formacao: string;
    genero: string;
    email: string;
    telefone: string;
    data_nascimento: string;
    obs: string;
    endereco: string;
    estado: string;
    id_usuario: number;
}

const columns: GridColDef[] = [
    { field: 'nome', headerName: 'NOME', width: 188 },
    { field: 'nivel_academico', headerName: 'NÍVEL ACADEMICO', width: 140 },
    { field: 'instituicao', headerName: 'INSTITUIÇÃO', width: 130 },
    { field: 'area_formacao', headerName: 'AREA DE FORMAÇÃO', width: 130 },
    { field: 'genero', headerName: 'GENERO', width: 130 },
    { field: 'email', headerName: 'E-MAIL', width: 148 },
    { field: 'telefone', headerName: 'TELEFONE', width: 130 },
    { field: 'data_nascimento', headerName: 'DATA DE NASCIMENTO', width: 100 },
    { field: 'endereco', headerName: 'ENDEREÇO', width: 150 },
    { field: 'estado', headerName: 'ESTADO', width: 150 },
];

export default function TableProfessor() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/teachers');
                if (response.status !== 200) {
                    throw new Error('Erro ao buscar os dados da API');
                }
                setTimeout(() => {
                    const data: UserData[] = response.data.map((item: any) => ({
                        nome: item.userData.nome,
                        nivel_academico: item.userData.nivel_academico,
                        instituicao: item.userData.instituicao,
                        area_formacao: item.userData.area_formacao,
                        genero: item.userData.genero,
                        email: item.userData.email,
                        telefone: item.userData.telefone,
                        data_nascimento: item.userData.data_nascimento,
                        obs: item.obs,
                        endereco: item.endereco,
                        estado: item.estado,
                        id_usuario: item.id_usuario
                    }));
                    setData(data);
                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                    <small className='ml-4 mt-2'>Carregando dados...</small>
                </Box>
            ) : (
                <div className='bg-white pt-6 shadow rounded-md'>
                    <div className='px-5 pb-0'>
                        <h1 className='text-lg leading-6 font-medium text-gray-900'>
                            <strong>Número de professores:</strong> {data.length}
                        </h1>
                    </div>

                    <div className='py-4 px-4'>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={data}
                                columns={columns}
                                pageSize={5}
                                checkboxSelection
                                getRowId={(row) => row.nome}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}