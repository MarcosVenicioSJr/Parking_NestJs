import { PrismaService } from 'src/database/prisma.service';
import { ParkingRepository } from '../parking-repository';
import { Injectable } from '@nestjs/common';
import { Car } from '@prisma/client';

@Injectable()
export class ParkingRepositoryPrisma implements ParkingRepository {
  constructor(private prisma: PrismaService) {}

  async get(licensePlate: string): Promise<Car | null> {
    const car = await this.prisma.car.findFirst({
      where: {
        licensePlate: licensePlate.toString(),
      },
    });

    if (car == null) {
      return null;
    }
    return car;
  }

  async create(licensePlate: string): Promise<void> {
    await this.prisma.car.create({
      data: {
        licensePlate: licensePlate,
      },
    });
  }
}
