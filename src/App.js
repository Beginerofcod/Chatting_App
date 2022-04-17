import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';
// import ChatBot from 'react-simple-chatbot';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">

      {!user ? (
         <Login />
      ) : (

        <div className="app_body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>


        </div>
      )}
    </div>
  );
}

export default App;