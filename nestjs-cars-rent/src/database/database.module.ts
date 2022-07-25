import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "63010616",
      "database": "royalrent",
      "entities": ["dist/**/entities/*{.ts,.js}"],
      "synchronize": true,
      "migrations": ["dist/migrations/*{.ts,.js}"],
      "cli": {
        "migrationsDir": "src/migrations"
      }
    }
  )],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(connection: Connection) {
    if (connection.isConnected) console.log('DB Connected Successfully!');
  }
}
