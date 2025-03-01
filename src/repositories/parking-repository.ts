export abstract class ParkingRepository {
  abstract create(licensePlate: string): Promise<void>;
}
