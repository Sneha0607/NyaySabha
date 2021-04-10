import React, { useEffect, useState } from 'react';
import {CssBaseline} from '@material-ui/core';

import Home from './Home';
import Login from './login';
import Signup from './signup';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import fire from './firebase';
import Dashboard from './Dashboard';
import Create from './create';
import Judge from './judge';
import Lawyer from './lawyer';
import Participant from './participant';
import Viewer from './viewer';

const App = () => {
  const [user, setUser] = useState('');
  const authlistener = () =>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        setUser(user);

      }
      else{
        setUser('');
      }
    });
  };
  useEffect(() =>{
    authlistener();
  }, []);



  return (
    <>
        {user ?
        <>
        <CssBaseline>
        <Router>
        <Switch>
          <Route path = '/' exact component = {Dashboard}/>
          <Route path = '/create' component = {Create}/>
          <Route path = '/judge' component = {Judge}/>
          <Route path = '/lawyer' component = {Lawyer}/>
          <Route path = '/participant' component = {Participant}/>
          <Route path = '/viewer' component = {Viewer}/>
        </Switch>
        </Router>
        </CssBaseline>
        </>  
        : 
        <>
        <CssBaseline>
        <Router>
        <Switch>
          <Route path = '/' exact component = {Home} />
          <Route path = '/login' component = {Login} />
          <Route path = '/signup' component = {Signup} />
          
        </Switch>
        </Router>
        </CssBaseline>
        </>}
    </>
  );
}

export default App;

