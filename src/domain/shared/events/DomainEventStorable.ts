import { DomainEvent } from "./DomainEvent";

export class DomainEventStorable{
    private domainEvents : Array<DomainEvent>

    protected addDomainEvent(event : DomainEvent):void{
        this.domainEvents.push(event)
    }

    public getDomainEvents() : Array<DomainEvent>{
        return this.domainEvents
    }

    public clear(): void{
        this.domainEvents.length = 0
    }

}