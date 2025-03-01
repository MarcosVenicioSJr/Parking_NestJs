import { Car } from '@prisma/client';

export abstract class ParkingRepository {
  abstract create(licensePlate: string): Promise<void>;
  abstract get(licensePlate: string): Promise<Car | null>;
}
