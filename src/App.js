import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar/index';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomePage from './components/HomePage';
const useStyles = makeStyles((theme) => ({
  item: {
    flex: '1',
    backgroundColor: 'rgba(223,225,235,0.2)'
  }
}))
function App() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item><SideBar /></Grid>
      <Grid item className={classes.item}>
        <HomePage />
      </Grid>
    </Grid>
  );
}

export default App;
