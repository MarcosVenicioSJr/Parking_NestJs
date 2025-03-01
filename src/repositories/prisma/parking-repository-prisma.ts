import { PrismaService } from 'src/database/prisma.service';
import { ParkingRepository } from '../parking-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ParkingRepositoryPrisma implements ParkingRepository {
  constructor(private prisma: PrismaService) {}

  async create(licensePlate: string): Promise<void> {
    await this.prisma.car.create({
      data: {
        licensePlate: licensePlate,
      },
    });
  }
}
