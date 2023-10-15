import React from 'react';
import { Route, Routes } from "react-router-dom";
import NoMatchPage from './pages/NoMatchPage';
import TutorialsPage from './pages/TutorialsPage';
import HomePage from './pages/HomePage';

const Router = () => (
  <Routes>
    <Route 
        exact path="/" 
        element={
            <HomePage />
        } 
    />
    <Route 
        path="/tutorials" 
        element={
            <TutorialsPage />
        } 
    />
    <Route 
        path="*" 
        element={
            <NoMatchPage />
        } 
    />
  </Routes>
);

export default Router;