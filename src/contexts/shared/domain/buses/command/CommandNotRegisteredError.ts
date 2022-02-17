import { Command } from 'krisemm/contexts/shared/domain/buses/command/Command';

export class CommandNotRegisteredError extends Error {
  constructor(command: Command) {
    super(`The command ${command.constructor.name} hasn't a command handler associated`);
  }
}
