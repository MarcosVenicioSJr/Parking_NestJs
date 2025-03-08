import { Injectable } from '@nestjs/common';
import { ParkingRepository } from './repositories/parking-repository';
import { CreateCarDto } from './dtos/createCar';
import { Car } from './dtos/car';

@Injectable()
export class AppService {
  constructor(private repository: ParkingRepository) {}

  create(createCar: CreateCarDto): string {
    try {
      this.repository.create(createCar.licensePlate);
    } catch (error) {
      console.error('Error add car:', error);
    }
    return 'Car added successfully';
  }

  async get(licensePlate: string): Promise<Car | null> {
    return await this.repository.get(licensePlate);
  }

  async removeCar(licensePlate: string): Promise<Car | null> {
    try {
      const car = await this.get(licensePlate);

      if (car != null) {
        const hour = new Date().getHours() - car.createdAt.getHours();
        car.pageValue = hour * 4; // Alterar de acordo com a necessidade.

        await this.repository.update(car.licensePlate, car.pageValue);

        return car;
      } else {
        console.log(`Car not found with license plate: ${licensePlate}`);
      }
    } catch (error) {
      console.error('Error removing car:', error);
    }

    return null;
  }
}
