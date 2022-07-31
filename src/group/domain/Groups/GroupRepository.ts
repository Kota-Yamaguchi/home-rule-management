import { Inject } from "@nestjs/common";
import { Group } from "./Group";


export interface GroupRepository{
    insertGroup(group: Group): void
    selectGroup(id :String) : Group
}