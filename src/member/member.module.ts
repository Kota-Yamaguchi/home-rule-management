import { Module } from '@nestjs/common';
import { MemberResolver } from './member.resolver';
import { MemberRepositoryImpl } from './repository/MemberRepositoryImpl';

@Module({
  providers: [MemberResolver, 
    {
      provide: "MemberRepository", 
      useClass: MemberRepositoryImpl,
    }
  ]
})
export class MemberModule {}
