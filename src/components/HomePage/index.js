import React from 'react';
import {Grid,Container, Typography} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import UserInfo from '../UserInfo';
import AggrerateDisplay from '../AggrerateDisplay';
import IndividualDisplay from '../IndividualDisplay';
function HomePage({classes}) {
    return (
        <Container maxWidth='lg'>
        <Grid container direction='column'>
            <UserInfo/>
            <Typography data-testid='heading' className={classes.text}>Dashboard</Typography>
            <Typography data-testid='subheading' className={classes.subtext}>Mobile UX/UI Design course</Typography>
            <AggrerateDisplay/>
            <IndividualDisplay/>
        </Grid>
        </Container>
    )
}
export default withStyles(styles)(HomePage);