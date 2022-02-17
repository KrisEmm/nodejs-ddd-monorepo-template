import { Command } from 'krisemm/contexts/shared/domain/buses/command/Command';

export interface CommandHandler<T extends Command> {
  subscribedTo(): Command;

  handle(command: T): Promise<void>;
}
