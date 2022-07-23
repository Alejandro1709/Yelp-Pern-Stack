import React from 'react';
import Restaurant from '../types/restaurant';
import RestaurantCell from './RestaurantCell';

type Props = {
  restaurants: Array<Restaurant>;
};

function RestaurantsTable({ restaurants }: Props) {
  return (
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
        {restaurants &&
          restaurants.map((restaurant) => (
            <RestaurantCell key={restaurant.id} restaurant={restaurant} />
          ))}
      </tbody>
    </table>
  );
}

export default RestaurantsTable;
