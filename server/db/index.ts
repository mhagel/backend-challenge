import { Pool, PoolConfig, QueryArrayConfig } from 'pg';

const poolConfig: PoolConfig = {
  connectionString: 'postgres://postgres:postgres@localhost:5432/regen_backend_challenge',
};

const pool = new Pool(poolConfig);

export { pool };
