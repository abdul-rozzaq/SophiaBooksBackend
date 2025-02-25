import { SequelizeModuleOptions } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';

dotenv.config()

export const getDatabaseConfig = (): SequelizeModuleOptions => {
    const dbType = process.env.DBTYPE ?? 'postgres'

    console.log('Database type', dbType.toUpperCase())

    if (dbType == 'postgres') {
        return {
            dialect: 'postgres',
            host: process.env.PGHOST || '127.0.0.1',
            port: Number(process.env.PGPORT || 5432),
            username: process.env.PGUSER || 'postgres',
            password: process.env.PGPASSWORD || 'postgres_password',
            database: process.env.DBNAME || 'sophiabooks',
            autoLoadModels: true,
            synchronize: true,
            // sync: { force: true }, 
        }
    } else {
        return {
            dialect: 'sqlite',
            storage: '.db/db.sqlite3',
            autoLoadModels: true,
            synchronize: true,
            // sync: { force: true },
        };
    }
}
