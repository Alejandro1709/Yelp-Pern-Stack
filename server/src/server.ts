import express, { Request, Response } from 'express';
import db from '../db';
import Restaurant from './types/restaurant';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Api');
});

app.get('/api/v1/restaurants', async (req: Request, res: Response) => {
  const result = await db.query('SELECT * FROM restaurants');
  const restaurants: Array<Restaurant> = result.rows;

  res.status(200).json({
    success: true,
    data: {
      count: result.rowCount,
      restaurants: restaurants,
    },
  });
});

app.get('/api/v1/restaurants/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
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
});

app.post('/api/v1/restaurants', async (req: Request, res: Response) => {
  const { name, location, price_range } = req.body;

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
});

app.patch('/api/v1/restaurants/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, location, price_range } = req.body;

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
});

app.delete('/api/v1/restaurants/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.query('DELETE FROM restaurants WHERE id = $1', [id]);

  res.status(200).json({
    success: true,
    data: {},
  });
});

const port = process.env.PORT || 3020;

app.listen(port, () =>
  console.log(
    `Server is up and running on port ${port} in ${process.env.NODE_ENV} mode`
  )
);
