import React from 'react';
import {Grid,Container, Typography} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function IndividualDisplayItem({classes,dataitem}) {
    return (
       <Grid container justify='space-between' alignItems='center' className={classes.container}>
            <Grid item>
                <Grid container alignItems='center'>
                <AccountCircleIcon className={classes.icon}/>
                <Typography className={classes.name}>{dataitem.name}</Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Typography className={classes.marks}>{dataitem.marks}</Typography>
            </Grid>
       </Grid>
    )
}
export default withStyles(styles)(IndividualDisplayItem);