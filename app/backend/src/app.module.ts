import { Module } from '@nestjs/common';
import { DictumModule } from './dictum/dictum.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // Here goes the entities
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.HOST ?? 'localhost',
      port: parseInt(process.env.DATABASE_PORT!) ?? 1433,
      username: process.env.DATABASE_USER ?? 'sa',
      password: process.env.DATABASE_PASSWORD ?? 'YourStrong!Passw0rd',
      database: process.env.DATABASE ?? 'test',
      entities: [],
      // synchronize: true,
      options: {
        encrypt: false,
        trustServerCertificate: true,
      },
    }),
  ],
})
export class AppModule {}
