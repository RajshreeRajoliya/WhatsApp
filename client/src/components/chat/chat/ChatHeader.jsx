import React from 'react'
import { Box, Typography, styled } from '@mui/material';
import { Search, MoreVert } from '@mui/icons-material';

const Header = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;
    
const Image = styled('img')({
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '50%'
});

const ChatHeader = () => {
  return (
    <Header>
    <Image src='' alt="display picture" />  
    <Box>
        <Typography>Name</Typography>
        <Typography>Online Status</Typography>
    </Box>
    <Box>
<Search/>
<MoreVert/>
    </Box>
    </Header>
  )
}

export default ChatHeader
