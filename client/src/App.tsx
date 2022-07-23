import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewRestaurantPage from './pages/NewRestaurantPage';
import EditRestaurantPage from './pages/EditRestaurantPage';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/restaurants/new' element={<NewRestaurantPage />} />
        <Route path='/restaurants/:id/edit' element={<EditRestaurantPage />} />
      </Routes>
    </div>
  );
}

export default App;
