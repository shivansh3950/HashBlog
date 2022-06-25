import React, { useState } from 'react';
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

const Header = () => {
    const dispath= useDispatch();
    const isLoggendIn=useSelector(state=>state.isLoggendIn);

     const [value, setValue] = useState();
  return <AppBar 
  position="sticky" sx={{background: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);"}}>
    <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>
        {isLoggendIn && <Box display="flex" marginLeft={'auto'} marginRight='auto'>
            <Tabs textColor="inherit" value={value} onChange={(e,val)=>setValue(val)}>
                <Tab LinkComponent={Link} to="/blogs" label="All Blogs"/>
                <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"/>
                <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog"/>
            </Tabs>
        </Box>}
        <Box display="flex" marginLeft="auto">
            {!isLoggendIn && <><Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1,borderRadius: 10}} color="warning">Login</Button>
            <Button onClick={()=>dispath(authActions.logout())} LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1,borderRadius: 10}} color="warning">Signup</Button> </>}
            { isLoggendIn && <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1,borderRadius: 10}} color="warning">Logout</Button>}

        </Box>
    </Toolbar>
  </AppBar>
}

export default Header