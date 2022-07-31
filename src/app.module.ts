import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';

import { MemberCreateUseCase } from './application/Members/members.service';
import { GroupModule } from './group/group.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [GroupModule, MemberModule],
  controllers: [AppController],
  providers: [MemberCreateUseCase],
})
export class AppModule {}
