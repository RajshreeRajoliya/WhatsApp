import React from 'react'
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';
import { useState} from 'react';

const HeaderMenu = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(null);
    };

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };   
  return (
    <>
      <MoreVert onClick={handleClick}/>
      <Menu
      
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
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
