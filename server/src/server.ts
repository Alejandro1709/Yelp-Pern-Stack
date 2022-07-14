import express, { Request, Response } from 'express';
import Restaurant from './types/restaurant';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const restaurants: Array<Restaurant> = [
  {
    id: 1,
    name: 'Mcdonalds',
    location: 'New Yourk, USA',
    priceRange: 4,
  },
  {
    id: 2,
    name: 'Burguer King',
    location: 'Las Vegas, USA',
    priceRange: 3,
  },
];

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

app.get('/api/v1/restaurants', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: {
      count: restaurants.length,
      restaurants,
    },
  });
});

app.get('/api/v1/restaurants/:id', (req: Request, res: Response) => {
  const foundRestaurant = restaurants.find((r) => r.id === +req.params.id);

  res.status(200).json({
    success: true,
    data: {
      count: 1,
      restaurants: foundRestaurant,
    },
  });
});

app.post('/api/v1/restaurants', (req: Request, res: Response) => {
  const { name, location, priceRange } = req.body;

  const newRestaurant: Restaurant = {
    id: restaurants.length + 1,
    name,
    location,
    priceRange,
  };

  restaurants.push(newRestaurant);

  res.status(200).json({
    success: true,
    data: {
      count: 1,
      restaurants: newRestaurant,
    },
  });
});

const port = process.env.PORT || 3020;

app.listen(port, () =>
  console.log(
    `Server is up and running on port ${port} in ${process.env.NODE_ENV} mode`
  )
);
