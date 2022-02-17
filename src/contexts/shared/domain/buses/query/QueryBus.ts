import { Query } from 'krisemm/contexts/shared/domain/buses/query/Query';
import { QueryResponse } from 'krisemm/contexts/shared/domain/buses/query/QueryResponse';

export interface QueryBus {
  ask<R extends QueryResponse>(query: Query): Promise<R>;
}
