import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'yelp',
  password: '',
  port: 5432,
});

export default {
  query: (text: string, params: any) => pool.query(text, params),
};
