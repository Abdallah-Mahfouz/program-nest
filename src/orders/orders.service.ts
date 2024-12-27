import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  getAllOrders() {
    return 'all order from services';
  }
}
