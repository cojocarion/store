import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    cardContentControl: {
        display: 'flex',
        flexDirection: 'column',
    },
    tagsControl: {
        display: 'flex',
    },
}));

const ContentItems = ({details}) => {
    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.cardContentControl}>
                <Typography variant="h6" gutterBottom>
                    E-mail:
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    {details.email}
                </Typography>
            </div>
            <div className={classes.cardContentControl}>
                <Typography variant="h6" gutterBottom>
                    Address:
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    {details.address}
                </Typography>
            </div>
            <div className={classes.cardContentControl}>
                <Typography variant="h6" gutterBottom>
                    Eye color:
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    {details.eyeColor}
                </Typography>
            </div>
            <div className={classes.cardContentControl}>
                <Typography variant="h6" gutterBottom>
                    Age:
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    {details.age}
                </Typography>
            </div>
            <div className={classes.cardContentControl}>
                <Typography variant="h6" gutterBottom>
                    Active or Not:
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    {details.isActive ? 'Active' : 'Inactive'}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Tags:
                </Typography>
                <div className={classes.tagsControl}>
                    {details.tags.map((value) => (
                        <Typography key={Math.random()}>#{value}</Typography>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};
export default ContentItems;
