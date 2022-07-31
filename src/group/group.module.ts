import { Module } from '@nestjs/common';
import { GroupResolver } from './group.resolver';
import { GroupRepositoryImpl } from './repository/GroupRepositoryImpl';


@Module({
  providers: [GroupResolver, 
    {
      provide:"GroupRepository",
      useClass: GroupRepositoryImpl
    }]
})
export class GroupModule {}
