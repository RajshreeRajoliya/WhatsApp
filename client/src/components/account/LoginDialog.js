import React from 'react'
import { Dialog, Typography , Box , List , ListItem } from '@mui/material'
import { qrCodeImage } from '../../constants/data'
const dialogStyle = {
    height : '96%',
    marginTop : '12%',
    width : '60%',
    maxWidth : '100%',
    maxHeight : '100%',
    boxShadow : 'none',
    overflow : 'none',
}

const LoginDialog = () => {
  return (
   <Dialog
   open={true}
   PaperProps={{sx : dialogStyle}}
   >
<Box>
    <Box>
        <Typography>To use WhatsApp on your computer:</Typography>
        <List>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
        </List>
        <img src={qrCodeImage} alt='qrCode'/>
    </Box>
</Box>
   </Dialog>
  )
}

export default LoginDialog
