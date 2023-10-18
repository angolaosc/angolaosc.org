import React, { useState, useEffect } from 'react';
import logo from '../../../assets/imagens/logo.png'
import capa from '../../../assets/imagens/image.png'
import './DialogMaterias.css'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import livro from '../../../layouts/Pai-Rico-Pai-Pobre-Robert-T.-Kiyosaki.pdf'
interface Props {
  open: boolean;
  close: () => void;
}
function DialogMaterias({ open, close }: Props) {


  // codigo para mostrar livro vindo da bd na tela

  // const [livroConteudo, setLivroConteudo] = useState('');

  // useEffect(() => {
  //   fetch('src/layouts/Pai-Rico-Pai-Pobre-Robert-T.-Kiyosaki.pdf')
  //     .then((response) => response.text())
  //     .then((data) => setLivroConteudo(data))
  //     .catch((error) => console.error('Erro ao importar o livro:', error));
  // }, []);
  return (
    <div>

      <Dialog
        sx={{
          color: 'black'
        }}
        open={open}
        onClose={close}>
        <DialogTitle>
          <img src={logo} className='img' width={150} alt="logo" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>

            <pre>
              <h1><strong>Pai Rico Pai Pobre</strong></h1>
              <p>

                <p>
                  <br />
                  Como dizer “obrigado” quando há tantos a quem agradecer? <br />Obviamente este livro é um
                  <br />
                  agradecimento a meus pais, poderosos modelos de vida, <br />e a minha mãe, que me ensinou o
                  <br />
                  amor e a bondade.</p>
                <br />
                Aos pais de Kim,<br />
                Winnie e Bill Meyer, por terem criado uma filha tão<br />maravilhosa. Agradeço a Sharon
                Lechter por reunir os pedaços<br />deste livro em meu computador. Ao marido de Sharon, Mike,
                por ser um grande<br />especialista em direito e propriedade intelectual e a seus filhos, Phillip,
                Shelly e Rick,<br />por sua participação e cooperação. Agradeço a Keith Cunningham por seus
                conhecimentos<br />financeiros e por sua inspiração. A Larry e Lisa Clark pelo dom da <br />amizade e
                do incentivo.<br />A Rolf Parta pelo gênio técnico. A Anne Nevin, Bobbi DePorter e Joe Chapon
                por sua compreensão do aprendizado.<br />A DC e Hohn Harrison, Jannie Tay, Sandy Khoo,
                Richard e Veronica Tan, Peter Johnston e Suzi Dafnis, Jacqueline Seow, a Ny hl Henson,
                Michael e Monette Hamlin,<br />Edwin e Camilla Khoo, K.C. e Jessica See, pelo apoio profissional;
                a Kevin e Sara da InSync pelos gráficos brilhantes.<br />A John e Shari Burley, Bill e Cindy
                Shopoff, Van Tharp, Diane Kennedy,<br />.


              </p>
            </pre>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color="success">
            Baixar
          </Button>
          <Button onClick={close} variant='contained' color="error">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogMaterias;