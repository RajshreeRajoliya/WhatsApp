import { useState, useEffect, useContext } from 'react';
import React from 'react'
import { getUsers } from '../../../service/api';
import { Box, styled, Divider } from '@mui/material';
import Conversation from './Conversation';
import { AccountContext } from '../../../context/AccountProvider';

const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;
const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;

const Conversations = () => {
    const [users, setUsers] = useState([]);
    const {account} = useContext(AccountContext);
    useEffect(() => {
        const fetchData = async () => {
            let data = await getUsers();
            setUsers(data);
           
        }
        fetchData();
    }, []);

  return (
    <Component>
{
    users.map(user => (
        user.sub !== account.sub &&
       <>
       <Conversation user={user}/>
       <StyledDivider/>
       </>
    ))
}
    </Component>
  )
}

export default Conversations
