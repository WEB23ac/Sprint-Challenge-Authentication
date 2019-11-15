import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

import JokesPage from './components/JokesPage';
import Login from './components/Login';
import UserForm from './components/UserForm';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" >
              WEB Auth Sprint
    </Typography>
            <Link href='/register' color='inherit'>Register</Link>
            <Link href='/login' color="inherit">Login</Link>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path='/register' component={UserForm} />
          <PrivateRoute path='/jokes' component={JokesPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
