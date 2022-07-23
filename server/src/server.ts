import express, { Request, Response } from 'express';
import restaurantRoutes from './routes/restaurant.routes';
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
app.use('/api/v1/restaurants', restaurantRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Api');
});

const port = process.env.PORT || 3020;

app.listen(port, () =>
  console.log(
    `Server is up and running on port ${port} in ${process.env.NODE_ENV} mode`
  )
);
