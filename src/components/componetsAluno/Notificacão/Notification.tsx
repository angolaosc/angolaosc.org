import { useRef } from 'react';
import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import NotificationIcon from '@mui/icons-material/NotificationImportant';


function Notification() {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return ( 
        <div className='pr-8'>
    <NotificationIcon
     onClick={handleClick}
     sx={{width:50, height:35, color:'cyan', cursor: 'pointer'}}
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
         <MenuItem>Definições</MenuItem>
         <MenuItem>Sair</MenuItem>
       </Menu>
     </div>
     );
}

export default Notification;