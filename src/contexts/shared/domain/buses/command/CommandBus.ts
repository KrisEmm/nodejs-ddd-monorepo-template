import { Command } from 'krisemm/contexts/shared/domain/buses/command/Command';

export interface CommandBus {
  dispatch(command: Command): Promise<void>;
}
