import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
root:{
  minHeight: '100vh',
  backgroundImage:`url(${process.env.PUBLIC_URL + "/bkg.jpg"})`,
  backgroundRepeat: 'no-repeat'
}
}));
function Body() {
  const classes = useStyles();
  return (<div><h2>.
  </h2>
  <h2>.
  </h2>
  <h2>.
  </h2>
  </div>
  );
}

export default Body;
