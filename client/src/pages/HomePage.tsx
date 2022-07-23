import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';

function HomePage(): JSX.Element {
  const [restaurantss, setRestaurantss] = useState(restaurants);

  return (
    <div className='homePage container'>
      <h1 className='heading--xxl mb-2'>All Restaurants</h1>
      <section className='homePage__section section-md'>
        <Link to='/restaurants/new'>New Restaurant</Link>
        <table className='mt-2'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Restaurant Name</th>
              <th>Restaurant Address</th>
              <th>Restaurant Price Range</th>
              <th>Restaurant Edit</th>
              <th>Restaurant Delete</th>
            </tr>
          </thead>
          <tbody>
            {restaurantss &&
              restaurantss.map((restaurant) => (
                <tr key={restaurant.id}>
                  <td>{restaurant.id}</td>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{restaurant.price_range} stars</td>
                  <td>
                    <Link to={`/restaurants/${restaurant.id}/edit`}>Edit</Link>
                  </td>
                  <td>
                    <Link to=''>Delete</Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default HomePage;
