import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

dotenv.config();

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgres://postgres:root@127.0.0.1:5009/shortlink',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  entityPrefix: 'app_',
  migrationsRun: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  logging: process.env.NODE_ENV === 'development',
};

export default config;
