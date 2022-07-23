import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';
import RestaurantsTable from '../components/RestaurantsTable';
import { restaurants } from '../data/restaurants';

function HomePage(): JSX.Element {
  const [restaurantss, setRestaurantss] = useState(restaurants);

  return (
    <div className='homePage container mt-2'>
      <Alert message='Testing' variant='info' />
      <h1 className='heading--xxl mb-2'>All Restaurants</h1>
      <section className='homePage__section section-md'>
        <Link to='/restaurants/new'>New Restaurant</Link>
        <RestaurantsTable restaurants={restaurantss} />
      </section>
    </div>
  );
}

export default HomePage;
