import React from "react";
import { AppBar, makeStyles, Toolbar, Button } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: "none",
    },
    button: {
        color: theme.palette.getContrastText(yellow[500]),
        backgroundColor: yellow[500],
        "&:hover": {
            backgroundColor: yellow[700],
        },
    },
    appBarTitle: {
        flexGrow: '1',
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar>
                    <h1 className={classes.appBarTitle}>Glazed</h1>
                </Toolbar>
            </AppBar>
            <div>
                <h1>Welcome to my Glazed recruitment exercise!</h1>
                <h3>By: João Reis</h3>
            </div>
        </div>
    );
};

export default Header;
