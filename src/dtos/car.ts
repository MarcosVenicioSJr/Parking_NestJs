import { Decimal } from '@prisma/client/runtime/library';

export class Car {
  id: number;
  licensePlate: string;
  createdAt: Date;
  pageValue: Decimal;
}
