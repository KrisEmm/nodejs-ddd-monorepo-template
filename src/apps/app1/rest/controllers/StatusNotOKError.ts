import { CustomError } from 'krisemm/contexts/shared/domain/errors/CustomError';

export class StatusNotOKError extends CustomError {
  constructor(msg: string) {
    super('Status-Not-OK', msg);
  }
}
