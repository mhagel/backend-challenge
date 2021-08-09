import Router from 'express-promise-router';
import { pool } from '../db';

const router = Router();

// Create new user
router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const queryRes = await pool.query('INSERT INTO "user" (name) VALUES ($1) RETURNING id', [name]);
    res.send(queryRes.rows?.[0]);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const queryRes = await pool.query('SELECT * FROM "user"');
    res.send(queryRes.rows);
  } catch (e) {
    res.status(500).send(e.message);
  } 
});

export { router };