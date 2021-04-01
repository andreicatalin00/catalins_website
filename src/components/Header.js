import React, { useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';


const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: "center",
        alignItems:"center",
        height: '120vh',
        fontFamily : 'Nunito',

    },
    appbar: {
        background : 'none',
    },
    appbarTitle :{
        flexGrow: '1',
    },
    appbarWrapper :{
        width: '80%',
        margin: '0 auto',
    },
    icon: {
        color: '#fff',
        fontSzie: '1rem',
    },
    container:{
        textAlign: "center",
        fontSize: "3.5rem"
    },
    colorText : {
        color: '#5EFF3D'
    },
    title:{
        color:"#fff",
    },
    goDown:{
        color: '#fff',
        fontSize: '3rem'
    }
}));
function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(()=>{
      setChecked(true);
  },[])
  return (<div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
          <Toolbar className = {classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>Catalin's <span className={classes.colorText}>Resume.</span></h1>
          <IconButton>
              <SortIcon className = {classes.icon}/>
          </IconButton>
          </Toolbar>
      </AppBar>
      
      <Collapse in={checked}
      { ...(true ? { timeout: 1000} : {})}
      collapsedHeight={50}
      >
      <div className={classes.container}>
          <h1 className={classes.title}>Welcome!</h1>
          <IconButton>
              <ExpandMoreIcon className={classes.goDown}/>
          </IconButton>
      </div>
      </Collapse>
  </div>
  );
}

export default Header;