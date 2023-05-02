import React from 'react'
import { Dialog, styled, Box } from '@mui/material';


const dialogStyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
};

const ChatDialog = () => {
  return (
    <Dialog 
    open={true} 
    BackdropProps={{style: {backgroundColor: 'unset'}}}
    PaperProps={{ sx: dialogStyle }}
    maxWidth={'md'}
>
</Dialog>
  )
}

export default ChatDialog
