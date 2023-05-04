import React from 'react'
import { styled, Box, Typography } from "@mui/material";
import {useContext} from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { setConversation } from '../../../service/api';

const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`
const Image = styled('img') ({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
})


const Conversation = ({user}) => {
    const { setPerson , account } = useContext(AccountContext);

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub });
    }
  return (
   <Component onClick={() => getUser()}>
{
    console.log(user)
}
               <Box>
                <Image src={user.picture} alt="display picture" />
                
            </Box>

<Box>
    <Typography>{user.name}</Typography>
</Box>
    
   </Component>
  )
}

export default Conversation
