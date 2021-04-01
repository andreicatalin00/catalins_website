import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header'
import Body from './components/PlaceToVisit'
import Table from './components/Table'
import CustomizedTimeline from './components/Timeline'
import GitHubUser from './containers/GitHubUser'
import MediaCard from './components/MediaCard'

const useStyles = makeStyles((theme) => ({
root:{
  minHeight: '100vh',
  backgroundImage:`url(${process.env.PUBLIC_URL + "/bkg.jpg"})`,
  backgroundRepeat: 'no-repeat'
}
}));
function App() {
  const classes = useStyles();
  return <div className={classes.root}>
    <CssBaseline />
    <Header />
    <CustomizedTimeline />
    <Body />
    <MediaCard />
    <p />
    <Table />
    <GitHubUser />

  </div>;
}

export default App;
