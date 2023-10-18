// src/components/FotoAvatar.jsx
import { useRef } from 'react';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import avatar from'../../../assets/imagens/avatar.png'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsIcon from '@mui/icons-material/Settings';




const FotoAvatar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [selectedImage, setSelectedImage] = useState<string | null>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    // Simular o clique no input do tipo arquivo
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
       <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <Avatar
        alt="Avatar"
        src={!selectedImage ? avatar : selectedImage}
        sx={{ width: 50, height: 50, cursor: 'pointer' }}
        onClick={handleClick}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
    
        <MenuItem onClick={handleAvatarClick} ><img src={!selectedImage ? avatar : selectedImage} className='rounded-lg pr-1'  width={30} alt="" />Perfil</MenuItem>
        <hr />
        <MenuItem><SettingsIcon sx={{paddingRight:'3px'}}/> Definições</MenuItem>
        <MenuItem><LogoutOutlinedIcon sx={{paddingRight:'2px'}}/>Sair</MenuItem>
      </Menu>
    </div>
  );
};

export default FotoAvatar;
