import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

let data = {
  name: 'Alan',
  hometown: 'Somewhere, TX',
  kids: [
    { name: 'Jimmy', age: '12' },
    { name: 'Sally', age: '4' },
  ],
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('')
  @Render('index')
  getView() {
    return { message: 'Hello', data: data };
  }
}
