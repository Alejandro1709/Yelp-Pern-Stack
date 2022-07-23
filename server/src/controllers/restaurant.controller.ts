import { Request, Response } from 'express';
import Restaurant from '../types/restaurant';
import db from '../../db';

const handleGetRestaurants = async (req: Request, res: Response) => {
  try {
    const result = await db.query('SELECT * FROM restaurants');
    const restaurants: Array<Restaurant> = result.rows;

    res.status(200).json({
      success: true,
      data: {
        count: result.rowCount,
        restaurants: restaurants,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const handleGetSingleRestaurant = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM restaurants WHERE id = $1', [
      id,
    ]);

    const restaurants: Array<Restaurant> = result.rows;

    res.status(200).json({
      success: true,
      data: {
        count: result.rowCount,
        restaurant: restaurants[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const handleCreateRestaurant = async (req: Request, res: Response) => {
  const { name, location, price_range } = req.body;

  try {
    const result = await db.query(
      'INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *',
      [name, location, price_range]
    );

    const restaurant: Restaurant = result.rows[0];

    res.status(201).json({
      success: true,
      data: {
        count: 1,
        restaurants: restaurant,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const handleUpdateRestaurant = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, location, price_range } = req.body;

  try {
    const result = await db.query(
      'UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *',
      [name, location, price_range, id]
    );

    const restaurant: Restaurant = result.rows[0];

    res.status(200).json({
      success: true,
      data: {
        count: 1,
        restaurants: restaurant,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const handleDeleteRestaurant = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await db.query('DELETE FROM restaurants WHERE id = $1', [id]);

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  handleGetRestaurants,
  handleGetSingleRestaurant,
  handleCreateRestaurant,
  handleUpdateRestaurant,
  handleDeleteRestaurant,
};
