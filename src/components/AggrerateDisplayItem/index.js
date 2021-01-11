import React from 'react';
import { Grid, Paper, IconButton, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
function AggrerateDisplayItem({ classes, dataitem }) {
    return (
        <Grid item xs={3} className={classes.container}>
            <Paper elevation={1}>
                <Grid container className={classes.root}>
                    <Grid item>
                        {dataitem.type === 'profiles' ?
                            <IconButton className={classes.person}>
                                <PersonOutlineIcon />
                            </IconButton> :
                            <IconButton className={classes.chart}>
                                <ShowChartIcon />
                            </IconButton>}
                    </Grid>
                    <Grid item>
                        <Grid container direction='column'>
                            <Typography className={classes.text}>
                                {dataitem.line1}
                                {dataitem.line2 && <span className={classes.line}>{dataitem.line2}</span>}
                            </Typography>
                            <Typography className={classes.subtext}>
                                {dataitem.title}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}
export default withStyles(styles)(AggrerateDisplayItem);