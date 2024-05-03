import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { LoginDto } from './dto';
import { NATS_SERVICE } from 'src/config';
import { AuthGuard } from './guards/auth.guard';
import { User } from './decorators/user.decorator';
import { Token } from './decorators/token.decorator';


@Controller('auth')
export class AuthController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto){
    try {
      return await firstValueFrom(
        this.client.send('auth_login',loginDto)
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }


  @UseGuards( AuthGuard )
  @Get('verify')
  verifyToken( @User() user: any, @Token() token: string  ) {

    // const user = req['user'];
    // const token = req['token'];

    // return this.client.send('auth.verify.user', {});
    return { user, token }
  }
}
