import { Injectable } from '@nestjs/common';
import { ParkingRepository } from './repositories/parking-repository';
import { CreateCarDto } from './dtos/createCar';

@Injectable()
export class AppService {
  constructor(private repository: ParkingRepository) {}
  getHello(): string {
    return 'Hello World!';
  }

  create(createCar: CreateCarDto) {
    this.repository.create(createCar.licensePlate);
    return 'Car added successfully';
  }

  get(licensePlate: string) {
    return this.repository.get(licensePlate);
  }
}
