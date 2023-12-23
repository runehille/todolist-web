import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TodoItem } from 'src/app/shared/interfaces/todoitem.interface';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  constructor(private http: HttpClient) {}

  pollEndpoint(url: string, pollInterval: number): Observable<any> {
    return timer(0, pollInterval).pipe(switchMap(() => this.http.get(url)));
  }

  getIssueById(id: string): Observable<any> {
    return this.http.get(
      'https://todolistapi20230406231150.azurewebsites.net/todoitems/details/' +
        id
    );
  }

  public async createItem(todoItem: TodoItem) {
    try {
      await firstValueFrom(
        this.http.post(
          'https://todolistapi20230406231150.azurewebsites.net/todoitems/create',
          todoItem
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  deleteIssue(id: string): Observable<any> {
    return this.http.delete(
      'https://todolistapi20230406231150.azurewebsites.net/todoitems/delete/' +
        id
    );
  }
}
