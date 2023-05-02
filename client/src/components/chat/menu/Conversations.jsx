import { useState, useEffect, useContext } from 'react';
import React from 'react'
import { getUsers } from '../../../service/api';
import { Box, styled, Divider } from '@mui/material';
import Conversation from './Conversation';

const Conversations = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            let data = await getUsers();
            setUsers(data);
            // setUsers(fiteredData);
        }
        fetchData();
    }, []);

  return (
    <Box>
{
    users.map(user => (
        <Conversation user={user}/>
    ))
}
    </Box>
  )
}

export default Conversations
