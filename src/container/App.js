import React from "react";
import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Home from "./../pages/Home";
import Add from './../pages/Add';
import Edit from './../pages/Edit';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add" element={<Add />}/>
        <Route path="/edit/:id" element={<Edit />}/>
      </Routes>
    </>
  );
};

export default App;
