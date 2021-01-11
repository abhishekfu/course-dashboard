import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
function SideBar({classes}) {
    return (
        <Grid container className={classes.container}>
            <Grid item className={classes.root}>
            <Grid container className={classes.innerContainer} justify='center' alignItems='center'>
                 <Typography data-testid='title' align='center' variant='h3' className={classes.text}>C</Typography>
            </Grid>
                
            </Grid>
        </Grid>
    )
}
export default  withStyles(styles)(SideBar);