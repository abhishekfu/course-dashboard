import React from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function UserInfo({ classes }) {
    return (
        <Grid item className={classes.root}>
            <Grid container direction='row-reverse' >
                <Grid item>
                    <Grid container spacing={1} alignItems='center'>
                        <Grid item>
                            <Grid container direction='column'>
                                <Typography data-testid='username' align='right' className={classes.text}>cody simmons</Typography>
                                <Typography data-testid='designation' align='right' className={classes.subtext}>lecturer</Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <AccountCircleIcon fontSize='large'/>
                        </Grid>
                        <Grid item>
                            <ExpandMoreIcon className={classes.icon} fontSize='large'/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}
export default withStyles(styles)(UserInfo);