import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { ParkingRepository } from './repositories/parking-repository';
import { ParkingRepositoryPrisma } from './repositories/prisma/parking-repository-prisma';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    { provide: ParkingRepository, useClass: ParkingRepositoryPrisma },
  ],
})
export class AppModule {}
