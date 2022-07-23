import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';
import RestaurantFinder from '../apis/RestaurantFinder';
import RestaurantsTable from '../components/RestaurantsTable';
import { RestaurantContext } from '../context/RestaurantContext';

function HomePage(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const { restaurants, setRestaurants } = useContext(RestaurantContext);

  const fetchRestaurants = async () => {
    try {
      setIsLoading(true);
      const response = await RestaurantFinder.get('/');
      setRestaurants(response.data.data.restaurants);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
    return () => {};
  }, []);

  return (
    <div className='homePage container mt-2'>
      {isLoading && <Alert message='Loading...' variant='info' />}
      <h1 className='heading--xxl mb-2'>All Restaurants</h1>
      <section className='homePage__section section-md'>
        <Link to='/restaurants/new'>New Restaurant</Link>
        <RestaurantsTable restaurants={restaurants} />
      </section>
    </div>
  );
}

export default HomePage;
