import { Test, TestingModule } from '@nestjs/testing';
import { Email } from '../domain/Members/Email';
import { Member } from '../domain/Members/Member';
import { MemberRepository } from '../domain/Members/MemberRepository';

import { CreateMemberInput } from './create.member.dto';
import { CreateMemberService } from './create.member.service';


describe('CreateMemberService', () => {
  let service: CreateMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateMemberService,
        {
        provide: "MemberRepository", 
        useClass: MemberRepositoryTestImpl,
      }],
    }).compile();

    service = module.get<CreateMemberService>(CreateMemberService);
  });

  it('execute method', () => {
    const input : CreateMemberInput = new CreateMemberInput();
    input.name = "Yamaguchi"
    input.email = "aaa@yamammmm.com"
    input.id = "1111112"
    service.execute(input)
    expect(service).toBeDefined();
  });

  it("error execute test ", ()=>{
    const input : CreateMemberInput = new CreateMemberInput();
    input.name = "Yamaguchi"
    input.email = "aaa@yamammmm.com"
    input.id = "111111"
    expect(() => service.execute(input)).toThrow();
    
  })


});
class MemberRepositoryTestImpl implements MemberRepository{
  insertMember(member: Member): void {
    
  }
  selectMember(id: String): Member {
    if (id === "111111"){
      return Member.createMember("111111", "yamada", new Email("aaa@ss.com"))
    }
    return null
  }
  
}