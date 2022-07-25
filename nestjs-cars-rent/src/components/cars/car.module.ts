import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsResolver } from './car.resolver';
import { CarsService } from './car.service';
// import { Car } from './entities/car';

@Module({
  imports: [],
  providers: [CarsService, CarsResolver],
  exports: [CarsService],
})
export class CarsModule {}