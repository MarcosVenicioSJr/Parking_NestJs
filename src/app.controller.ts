import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCarDto } from './dtos/createCar';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createCar(@Body() createCar: CreateCarDto): string {
    return this.appService.create(createCar);
  }

  @Get(':licensePlate')
  get(@Param('licensePlate') licensePlate: string) {
    return this.appService.get(licensePlate);
  }

  @Post('/RemoveCar')
  removeCar(@Body() body: { licensePlate: string }) {
    return this.appService.removeCar(body.licensePlate);
  }
}
