
import { DomainEvent } from "./DomainEvent";

export interface DomainEventPublisher{
    publish(event : DomainEvent): void 
}