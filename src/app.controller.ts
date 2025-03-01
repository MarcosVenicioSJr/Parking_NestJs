import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CarDto } from './dtos/car';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createCar(@Body() createCar: CarDto): string {
    return this.appService.create(createCar);
  }
}
