import React from 'react'
import LoginDialog from './account/LoginDialog'
import {AppBar , Toolbar , styled , Box} from '@mui/material'

const Component = styled(Box)`
height : 100vh;
background : #DCDCDC;
`

const Header = styled(AppBar)`
height : 220px;
background-color : #00bfa5;
box-shadow : none;
`

const Messengers = () => {
  return (
  <Component>
    <Header>
    <Toolbar>
<LoginDialog/>
    </Toolbar>
  </Header>
  </Component>
  )
}

export default Messengers
