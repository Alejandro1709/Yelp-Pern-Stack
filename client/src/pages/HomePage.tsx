import React from 'react';
import { Link } from 'react-router-dom';

function HomePage(): JSX.Element {
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
            <tr>
              <td>1</td>
              <td>Mcdonalds</td>
              <td>Las Vegas, USA</td>
              <td>5 stars</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Burguer King</td>
              <td>San Francisco, USA</td>
              <td>5 stars</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Taco Bell</td>
              <td>Miami, USA</td>
              <td>5 stars</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default HomePage;
