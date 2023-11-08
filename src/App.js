import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home/Home';
import NavBar from "./component/NavBar/NavBar";

function App() {
  return (
   <Router>
    <Routes>
      <Route
        exact
        path="/"
        element={
          <NavBar content={<Home/>}/>
        }
        />
    </Routes>
   </Router>
  );
}

export default App;
