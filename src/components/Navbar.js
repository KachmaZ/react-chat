import React from 'react';
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import { LOGIN_ROUTE } from '../utils/consts'

const Navbar = () => {
    const user = false;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary">
                <Toolbar variant="dense">
                    <Grid container justifyContent={"flex-end"}>
                        {user ?
                            <Button variant="outlined">Выйти</Button>
                            :
                            <NavLink to={LOGIN_ROUTE}>
                                <Button variant="outlined">Логин</Button>
                            </NavLink>
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;