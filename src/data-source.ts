import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const isProd = !!process.env.DATABASE_URL;

export default new DataSource(
  isProd
    ? {
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: ['src/**/*.entity.ts'],
        migrations: ['src/migrations/*.ts'],
        ssl: { rejectUnauthorized: false },
      }
    : {
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: ['src/**/*.entity.ts'],
        migrations: ['src/migrations/*.ts'],
      },
);