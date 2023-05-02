import React from 'react'
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';
import { useState} from 'react';

const HeaderMenu = () => {
    const [open, setOpen] = useState(false);
    
    const handleClose = () => {
        setOpen(null);
    };

  return (
    <>
      <MoreVert/>
      <Menu
      
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default HeaderMenu
