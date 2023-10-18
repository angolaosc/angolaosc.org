import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

interface props{
    isOpen:boolean;
    onClose:()=>void;
    mensagem:string;
}
const DialogNotificacaoDropDown = (props:props) => {
  return (
    <Dialog open={props.isOpen} onClose={props.onClose}>
      <DialogTitle>Notificação</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {props.mensagem}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogNotificacaoDropDown;