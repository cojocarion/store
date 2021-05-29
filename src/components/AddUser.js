import {useEffect} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import {getNewItems, addItem} from '../store/actions/usersAction';
import {DialogContentText, DialogContent, Typography} from '@material-ui/core/';

const AddUser = (props) => {
    const {
        users: {newItems},
        getNewItems,
    } = props;

    useEffect(() => {
        getNewItems();
    }, [getNewItems]);

    const useStyles = makeStyles(() => ({
        dialogContentControl: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: 5,
        },
    }));

    const classes = useStyles();

    return (
        <Dialog
            fullWidth
            open={props.open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            onClick={props.onCloseDialog}
        >
            <DialogTitle id="alert-dialog-title">{'Add items'}</DialogTitle>
            <DialogContent>
                {newItems.map((value) => {
                    return (
                        <div
                            key={value._id}
                            className={classes.dialogContentControl}
                        >
                            <Avatar alt="Lorem" src={value.picture} />
                            <DialogContentText id="alert-dialog-description">
                                {`${value.name.first} ${value.name.last}`}
                            </DialogContentText>
                            <Typography>{value.balance}</Typography>
                            <Typography>{value.company}</Typography>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={() => props.addItem(value)}
                            >
                                ADD
                            </Button>
                        </div>
                    );
                })}
            </DialogContent>
        </Dialog>
    );
};

const mapStateToProps = (state) => ({
    users: state.users,
});

export default connect(mapStateToProps, {getNewItems, addItem})(AddUser);
