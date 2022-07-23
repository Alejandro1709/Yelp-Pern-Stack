import React from 'react';
import { Link } from 'react-router-dom';
import Restaurant from '../types/restaurant';

type Props = {
  restaurant: Restaurant;
};

function RestaurantCell({ restaurant }: Props) {
  return (
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
  );
}

export default RestaurantCell;
