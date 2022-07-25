import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './car.service';
// import { NewCarInput } from './dto/new-car.input';
// import { Car } from './entities/car';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => String)
  public async cars() {
    return 'Hello welcome';
    // return await this.carsService.getAllCars().catch((err) => {
    //   throw err;
    // });
  }

//   @Mutation((returns) => Car)
//   public async addNewCar(
//     @Args('newCarData') newCarData: NewCarInput,
//   ): Promise<Car> {
//     return await this.carsService.addCar(newCarData).catch((err) => {
//       throw err;
//     });
//   }
}