import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './ProjectOne/Home';
import "./App.css";
import SinglePage from './ProjectOne/SinglePage';

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:id' element={<SinglePage/>}/>
        </Routes>
    </>
  );
};

export default App;
