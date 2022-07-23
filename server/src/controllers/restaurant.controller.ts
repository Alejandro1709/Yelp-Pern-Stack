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

export { handleGetRestaurants };
