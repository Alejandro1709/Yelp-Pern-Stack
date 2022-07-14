import express, { Request, Response } from 'express';
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

app.get('/api/v1/restaurants', (req: Request, res: Response) => {
  res.send('Getting Restaurants');
});

const port = process.env.PORT || 3020;

app.listen(port, () =>
  console.log(
    `Server is up and running on port ${port} in ${process.env.NODE_ENV} mode`
  )
);
