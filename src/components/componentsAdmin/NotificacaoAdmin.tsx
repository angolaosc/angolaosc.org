import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DraftsIcon from '@mui/icons-material/Drafts';
import MarkunreadIcon from '@mui/icons-material/Markunread';

export default function NotificacaoAdmin() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <NotificationsIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <DraftsIcon className='text-yellow-400' /><p className='ml-2 pr-2 font-bold text-yellow-400'>
                        Vistas
                    <span className='text-yellow-400 font-bold'> 2</span>
                    </p>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                     <MarkunreadIcon className='text-blue-600' /><p className='ml-2 pr-2 font-bold text-blue-600'>
                        Não vistas
                     <span className='text-blue-500 font-bold'> 3</span>
                     </p>
                </MenuItem>
            </Menu>
        </div>
    );
}