import { Inject, Injectable } from '@nestjs/common';
import { DuplicateException } from 'src/exception/RuntimeExeception';
import { Group } from '../domain/Groups/Group';
import { GroupRepository } from '../domain/Groups/GroupRepository';
import { CreateGroupInput } from './create.group.dto';

@Injectable()
export class CreateGroupService {
    constructor(
        @Inject("GroupRepository")
        private groupRepository:GroupRepository
    ){}
    public execute(input : CreateGroupInput) : void{
        const group : Group = Group.from(input.name)
        const duplicatedGroup : Group = this.groupRepository.selectGroup(group.getGroupId())
        if (duplicatedGroup){
            throw new DuplicateException()
        }
        this.groupRepository.insertGroup(duplicatedGroup)

    }



}
