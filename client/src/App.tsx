import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import EditRestaurantPage from './pages/EditRestaurantPage';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/restaurants/:id' element={<RestaurantPage />} />
        <Route path='/restaurants/:id/edit' element={<EditRestaurantPage />} />
      </Routes>
    </div>
  );
}

export default App;
