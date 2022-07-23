import React, { useState, createContext } from 'react';
import { restaurants } from '../data/restaurants';
import Restaurant from '../types/restaurant';
export const RestaurantContext = createContext({});

type Props = {
  children: Array<JSX.Element> | JSX.Element;
};

export const RestaurantContextProvider = (props: Props) => {
  const [restaurantss, setRestaurantss] =
    useState<Array<Restaurant>>(restaurants);
  return (
    <RestaurantContext.Provider value={{ restaurantss, setRestaurantss }}>
      {props.children}
    </RestaurantContext.Provider>
  );
};
