import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddUser from '../components/AddUser';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    const [toggleDialog, setToggleDialog] = useState(false);

    const toggleDialogHandler = () => {
        setToggleDialog((currState) => !currState);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        React Store
                    </Typography>
                    <Button color="inherit" onClick={toggleDialogHandler}>
                        Add
                    </Button>
                </Toolbar>
            </AppBar>
            {toggleDialog && (
                <AddUser
                    open={toggleDialog}
                    onCloseDialog={toggleDialogHandler}
                />
            )}
        </div>
    );
}
