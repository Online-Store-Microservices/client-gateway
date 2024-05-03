import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { NatsModule } from './transport/nats.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ProductsModule, OrdersModule, NatsModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
