import { Group } from "../domain/Groups/Group";
import { GroupRepository } from "../domain/Groups/GroupRepository";

export class GroupRepositoryImpl implements GroupRepository{
    selectGroup(id: String): Group {
        throw new Error("Method not implemented.");
    }
    
    insertGroup(group: Group): void {
        throw new Error("Method not implemented.");
    }
    
}