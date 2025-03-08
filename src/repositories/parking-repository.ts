import { Car } from 'src/dtos/car';

export abstract class ParkingRepository {
  abstract create(licensePlate: string): Promise<void>;
  abstract get(licensePlate: string): Promise<Car | null>;
  abstract update(licensePlate: string, pageValue: number): Promise<void>;
}
