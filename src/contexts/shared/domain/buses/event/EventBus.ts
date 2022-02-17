import { DomainEvent } from 'krisemm/contexts/shared/domain/buses/event/DomainEvent';

export interface EventBus {
  publish(domainEvents: Array<DomainEvent>): void;
}
