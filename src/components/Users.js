import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getUsers, deleteItem} from '../store/actions/usersAction';
import CardItem from '../UI/Card';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 20,
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Users = (props) => {
    const classes = useStyles();
    const {
        users: {users},
        getUsers,
    } = props;
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <div className={classes.container}>
            {users.length === 0 && <h1>no data</h1>}
            <Grid container spacing={3} className={classes.root}>
                {users.map((u) => {
                    return (
                        <React.Fragment key={u._id}>
                            <Grid item xs={3}>
                                <CardItem
                                    details={u}
                                    onRemoveItem={() => props.deleteItem(u._id)}
                                />
                            </Grid>
                        </React.Fragment>
                    );
                })}
            </Grid>
        </div>
    );
};

const mapStateToProps = (state) => ({
    users: state.users,
});

export default connect(mapStateToProps, {getUsers, deleteItem})(Users);
