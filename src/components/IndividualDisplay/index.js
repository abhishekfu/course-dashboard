import React, { useState,useEffect } from 'react';
import { Grid, Paper, Typography, MenuItem, FormControl, Select, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import IndividualDisplayItem from '../IndividualDisplayItem';
import {BASE_URL} from '../../constants'

const fetchData = async()=>{
    return await axios.get(`${BASE_URL}/students`);
}
function IndividualDisplay({ classes }) {
    const [sort, setSort] = useState('desc');
    const [data,setData]=useState(null);
    const [error,setError]=useState('');
    useEffect(() => {
        fetchData()
            .then((res)=>{
                setError('');
                setData(res.data)
            })
            .catch((e)=>{
                console.error(e);
                setError('Unable to load data');
            })
    }, [])
    useEffect(() => {
        if(!data){
            return
        } 
        const newData=data.slice();
        if(sort==='desc'){
            newData.sort((a,b)=>b.marks-a.marks)
        }else if(sort==='asc'){
            newData.sort((a,b)=>a.marks-b.marks)
        }
        setData(newData);
    }, [sort])
    return (
        <Grid item xs={3}>
            <Paper>
                <Grid container direction='column'>
                    <Grid item>
                        <Grid container className={classes.container} justify='space-between' alignItems='center'>
                            <Typography className={classes.text}>Students by average mark</Typography>

                            <FormControl className={classes.input}>
                                <Select
                                    className={classes.input}
                                    value={sort}
                                    onChange={(e) => setSort(e.target.value)}
                                    disableUnderline
                                    IconComponent={ExpandMoreIcon}
                                >
                                    <MenuItem value="desc" className={classes.input}>Descending</MenuItem>
                                    <MenuItem value="asc" className={classes.input}>Ascending</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Divider />

                    <Grid item className={classes.list}>
                        {error && <div>{error}</div>}
                        {data?(
                           data.map(dataitem=><IndividualDisplayItem key={dataitem.id} dataitem={dataitem}/>)

                        ):(<div/>)}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}
export default withStyles(styles)(IndividualDisplay);