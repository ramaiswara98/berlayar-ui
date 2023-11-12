import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home/Home';
import NavBar from "./component/NavBar/NavBar";
import GetStarted from "./pages/GetStarted/GetStarted";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminPage from "./component/AdminPage/AdminPage";
import Generate from "./pages/Generate/Generate";
import Search from "./pages/Search/Search";
import Storage from "./pages/Storage/Storage";

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
    <Routes>
      <Route
        exact
        path="/get-started"
        element={
          <GetStarted/>
        }
        />
    </Routes>
    <Routes>
      <Route
        exact
        path="/login"
        element={
          <Login/>
        }
        />
    </Routes>
    <Routes>
      <Route
        exact
        path="/sign-up"
        element={
          <SignUp/>
        }
        />
    </Routes>
    <Routes>
      <Route
        exact
        path="/dashboard"
        element={
          <AdminPage content={<Dashboard/> } page={'dashboard'}/>
        }
        />
    </Routes>
    <Routes>
      <Route
        exact
        path="/generate"
        element={
          <AdminPage content={<Generate/> } page={'generate'}/>
        }
        />
    </Routes>
    <Routes>
      <Route
        exact
        path="/search"
        element={
          <AdminPage content={<Search/> } page={'search'}/>
        }
        />
    </Routes>
    <Routes>
      <Route
        exact
        path="/storage"
        element={
          <AdminPage content={<Storage/> } page={'storage'}/>
        }
        />
    </Routes>
   </Router>
  );
}

export default App;
