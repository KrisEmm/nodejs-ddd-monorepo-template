import { DomainException } from 'krisemm/contexts/shared/domain/exceptions/DomainException';

export class StatusNotOKError extends DomainException {
  constructor(msg: string) {
    super();
    this.name = 'Status Not Ok Error';
    this.message = msg;
  }
}
