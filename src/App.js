import React from "react";
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";






function App() {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div className="content-wrapper">
                  <Route path="/profile" component={Profile} />
                  <Route path="/dialogs" component={Dialogs} />
              </div>


          </div>
      </BrowserRouter>

  );
}

export default App;
