import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private _OrdersService: OrdersService) {}
  @Get()
  getAllOrders() {
    return this._OrdersService.getAllOrders();
  }
}
