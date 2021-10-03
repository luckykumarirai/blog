import * as React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
const useStyles = makeStyles({
    menuButton: {
      marginRight:'2px',
    },
    title: {
      flexGrow: 1,
    },
});
export default function Navbar() {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div" className={classes.title}>
                Blog
            </Typography>
            <Typography sx={{ m: 1, p: 1, border: 1 }} variant="h6" color="inherit" component="div" as={Link} to="/createblog" >
                Createblog
            </Typography>
            <Typography sx={{ m: 1, p: 1, border: 1 }} variant="h6" color="inherit" component="div" as={Link} to="/signup" >
                Signup
            </Typography>
            <Typography sx={{ m: 1, p: 1, border: 1 }} variant="h6" color="inherit" component="div" as={Link} to="/login" >
                Login
            </Typography>
            <Typography sx={{ m: 1, p: 1, border: 1 }} variant="h6" color="inherit" component="div" as={Link} to="/logout" >
                Logout
            </Typography>
            </Toolbar>
        </AppBar>
        </Box>
    );
}