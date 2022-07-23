import React, { useState, createContext } from 'react';

export const RestaurantContext = createContext({});

type Props = {
  children: Array<JSX.Element> | JSX.Element;
};

export const RestaurantContextProvider = (props: Props) => {
  const [restaurants, setRestaurants] = useState([]);
  return (
    <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
      {props.children}
    </RestaurantContext.Provider>
  );
};
