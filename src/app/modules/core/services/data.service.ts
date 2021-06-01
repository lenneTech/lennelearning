import { Injectable } from '@angular/core';
import { GraphQLPlusService } from '@lenne.tech/ng-base';

@Injectable({
  providedIn: 'root',
})
export class DataService extends GraphQLPlusService {
  getBlog(id: number) {
    this.graphQl('getBlog', {
      arguments: { id: 2 },
      fields: ['id', 'title', 'content'],
    }).subscribe((test) => {
      console.log(test);
    });
  }
}
