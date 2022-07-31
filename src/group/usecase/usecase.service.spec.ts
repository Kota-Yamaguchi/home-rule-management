import { Test, TestingModule } from '@nestjs/testing';
import { Group } from '../domain/Groups/Group';
import { GroupRepository } from '../domain/Groups/GroupRepository';
import { CreateGroupInput } from './create.group.dto';
import { CreateGroupService } from './create.group.service';

describe('UsecaseService', () => {
  let service: CreateGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateGroupService, {
        provide: "GroupRepository", 
        useClass: GroupRepositoryTestImpl,
      }],
    }).compile();

    service = module.get<CreateGroupService>(CreateGroupService);
  });

  
  it('execute method', () => {
    const input : CreateGroupInput = new CreateGroupInput();
    input.name = "Yamaguchi"
    service.execute(input)
    expect(service).toBeDefined();
  });

  it("error execute test ", ()=>{
    const input : CreateGroupInput = new CreateGroupInput();
    input.name = "Yamaguchi"
    expect(() => service.execute(input)).toThrow();
    
  })


});
class GroupRepositoryTestImpl implements GroupRepository{
  insertGroup(group: Group): void {
    
  }
  selectGroup(id: String): Group {
    if (id === "111111"){
      return new Group("10000", "test1", ["1", "2", "3"], "password")
    }
    return null
  }
  
  
}

