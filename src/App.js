import React from 'react';
import AppBar from '@mui/material/AppBar';
import { makeStyles } from '@material-ui/styles';
import Appcontainer from './components/container'


const useStyles = makeStyles(theme => ({
  App: {
    fontFamily: 'Rajdhani',
    background: '#f5f5f5',
    overflow: 'hidden',
  },
  AppBar: {
    height: '50px',
  },
  AppBarText: {
      textAlign: 'center',
      fontSize: '35px',
      padding: '5px',
      fontFamily: 'Rajdhani',
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <AppBar position='fixed' style={{background: '#FF0000'}} className={classes.AppBar}>
        <div className={classes.AppBarText}>InJozi Coding Challenge</div>
      </AppBar>
      <Appcontainer />
    </div>
  );
}

export default App;
