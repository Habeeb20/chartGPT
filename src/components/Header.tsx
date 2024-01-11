import React from 'react';
import AppBar from "@mui/material/AppBar"
import ToolBar from "@mui/material/Toolbar"
import Logo from './shared/Logo';
import { useAuth } from '../context/AuthContext';
import NavigationLink from './shared/NavigationLink';


const Header = () => {
  const auth = useAuth()
  return (
    <AppBar sx={{bgcolor: "transparent", position:"static", boxShadow:"none"}}>
        <ToolBar sx={{display:"flex"}}>
          <Logo />
          <div>
            {auth?.isLoggedIn ? (
               <>
               <NavigationLink bg='#000fffc' to='/chat' text='Go to Chat' textColor='white'/ >
               <NavigationLink  bg='#51538' textColor='white' to='Logout' text='logout' onClick={auth.logout}/>
               </> 
               ):(
                <>
                <NavigationLink bg='#000fffc' to='/login' text='Login' textColor='white'/ >
               <NavigationLink  bg='#51538' textColor='white' to='/signup' text='signup'/>
                  
                </>
               ) }

          </div>
        </ToolBar>
    </AppBar>

   
  )
}

export default Header
