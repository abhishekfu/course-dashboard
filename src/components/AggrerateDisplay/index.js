import React, { useState, useEffect } from 'react';
import AggrerateDisplayItem from '../AggrerateDisplayItem/index'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import { BASE_URL } from '../../constants'
import axios from 'axios';
export const fetchData = async () => {
    return await axios.get(`${BASE_URL}/dashboard`);
}
function AggrerateDisplay({ classes }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchData().then((res) => {
            setError('');
            setData(res.data);
        })
            .catch((e) => {
                console.error(e);
                setError('Unable to load data');
            })



    }, [])
    if (!data) {
        return (
            <Grid item>
                <div data-testid='loading'>Loading...</div>
            </Grid>

        )
    }
    return (
        <Grid item className={classes.root}>
            <Grid container>
                {error && <div>{error}</div>}
                {data.map(dataitem => <AggrerateDisplayItem data-testid='datainfo' key={dataitem.id} dataitem={dataitem} />)}
            </Grid>
        </Grid>
    )
}
export default withStyles(styles)(AggrerateDisplay);