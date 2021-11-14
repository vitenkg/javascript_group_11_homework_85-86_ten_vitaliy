import React from 'react';
import {AppBar, Grid, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import RegisteredUser from "./MenuUser/RegisteredUser";
import Anon from "./MenuUser/Anon";

const useStyles = makeStyles(theme => ({
  mainLink: {
    color: "inherit",
    textDecoration: 'none',
    '$:hover': {
      color: 'inherit'
    }
  },
  staticToolbar: {
    marginBottom: theme.spacing(2)
  }
}));

const AppToolbar = () => {
  const classes = useStyles();
  const user = useSelector(state => state.users.user)
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="h6">
              <Link to="/" className={classes.mainLink}>Music BOX</Link>
            </Typography>
            <Grid>
              {
                user ? <RegisteredUser user={user}/> : <Anon/>
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.staticToolbar}/>
    </>
  );
};

export default AppToolbar;