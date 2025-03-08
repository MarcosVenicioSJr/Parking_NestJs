import { PrismaService } from 'src/database/prisma.service';
import { ParkingRepository } from '../parking-repository';
import { Injectable } from '@nestjs/common';
import { Car } from 'src/dtos/car';

@Injectable()
export class ParkingRepositoryPrisma implements ParkingRepository {
  constructor(private prisma: PrismaService) {}
  async update(licensePlate: string, pageValue: number): Promise<void> {
    const car = await this.prisma.car.update({
      where: {
        licensePlate: licensePlate,
      },
      data: {
        pageValue: pageValue,
      },
    });

    console.log(car);
  }

  async get(licensePlate: string): Promise<Car | null> {
    const car = await this.prisma.car.findFirst({
      where: {
        licensePlate: licensePlate.toString(),
      },
    });

    if (car == null) {
      return null;
    }

    const newCar: Car = {
      id: car.id,
      createdAt: car.createdAt,
      licensePlate: car.licensePlate,
      pageValue: car.pageValue?.toNumber() ?? 0,
    };

    return newCar;
  }

  async create(licensePlate: string): Promise<void> {
    await this.prisma.car.create({
      data: {
        licensePlate: licensePlate,
      },
    });
  }
}
