import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';

import { MemberCreateUseCase } from './application/Members/members.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MemberCreateUseCase],
})
export class AppModule {}
