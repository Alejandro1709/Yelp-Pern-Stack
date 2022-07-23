import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import Alert from '../components/Alert';
import Restaurant from '../types/restaurant';

function EditRestaurantPage(): JSX.Element {
  const [restaurant, setRestaurant] = useState<Restaurant>();

  const { id } = useParams();

  const parsedId = id && parseInt(id);

  useEffect(() => {
    const foundRestaurant = restaurants.find((res) => res.id === parsedId);

    setRestaurant(foundRestaurant);

    return () => {
      setRestaurant(undefined);
    };
  }, [parsedId]);

  return (
    <div className='homePage container mt-2'>
      <Alert message='Loading...' variant='info' />
      <h1 className='heading--xxl mb-2'>{restaurant && restaurant.name}</h1>
      <section className='homePage__section section-md'>
        <p className='mb-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis unde
          voluptatem, hic numquam ipsum tempora aliquid, molestias accusantium
          pariatur ut quia, fugit sunt. Ullam porro perspiciatis est aperiam
          amet illo.
        </p>
        <p className='content-lg mb-2'>{restaurant?.location}</p>
        <Link to='/'>Go Back</Link>
      </section>
    </div>
  );
}

export default EditRestaurantPage;
