import React from 'react';
import { useContext, useState } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { Box, styled } from '@mui/material';

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;


const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
})
const Header = () => {
    const { account } = useContext(AccountContext);
  return (
    <>
    <Component>
        <Image src={account.picture}  />
       
    </Component>
   
</>
  )
}

export default Header
