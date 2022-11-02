import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import {AppBar,Toolbar, Typography} from '@material-ui/core';

import useStyles from './styles';

const Header = () => {
        const classes = useStyles();

    return(
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant ="h5" className={classes.title}>
                    Restaurant Guru
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;