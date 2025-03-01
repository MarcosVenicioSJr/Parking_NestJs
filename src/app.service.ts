import { Injectable } from '@nestjs/common';
import { ParkingRepository } from './repositories/parking-repository';
import { CarDto } from './dtos/car';

@Injectable()
export class AppService {
  constructor(private repository: ParkingRepository) {}
  getHello(): string {
    return 'Hello World!';
  }

  create(createCar: CarDto) {
    this.repository.create(createCar.licensePlate);

    return 'Car added successfully';
  }
}
