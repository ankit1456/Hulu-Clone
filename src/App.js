import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Results from "./Components/Results";
import Login from "./Components/Login";
import Movie from "./Components/Banner";
import requests from "./request";
import { auth } from "./firebase";
import { useStateValue } from "./stateManagement/stateProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  const [selectedCategory, setSelectedCategory] = useState(
    requests.fetchTrending
  );
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "LOGIN",
          payload: authUser,
        });
      } else {
        dispatch({
          type: "LOGIN",
          payload: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return !user ? (
    <Login />
  ) : (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/movie/:id'>
            <Movie selectedCategory={selectedCategory} />
          </Route>
          <Route path='/'>
            <Header />
            <Navbar setSelectedCategory={setSelectedCategory} />
            <Results selectedCategory={selectedCategory} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
