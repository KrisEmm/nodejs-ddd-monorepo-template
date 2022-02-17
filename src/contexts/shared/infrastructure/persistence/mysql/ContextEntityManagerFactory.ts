import { TypeOrmEntityManagerFactory } from 'krisemm/contexts/shared/infrastructure/persistence/mysql/typeorm/TypeOrmEntityManagerFactory';
import { EntityManager } from 'typeorm';

export class ContextEntityManagerFactory {
  static async create(): Promise<EntityManager> {
    return TypeOrmEntityManagerFactory.create();
  }
}
