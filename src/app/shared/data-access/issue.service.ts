import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TodoItem } from 'src/app/shared/interfaces/todoitem.interface';
import { endpoints } from 'src/app/shared/data-access/endpoints';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  constructor(private http: HttpClient) {}

  pollEndpoint(): Observable<any> {
    return timer(0, 3000).pipe(
      switchMap(() => this.http.get(endpoints.issues_all))
    );
  }

  getIssueById(id: string): Observable<any> {
    return this.http.get(endpoints.issues_details + id);
  }

  public async createItem(todoItem: TodoItem) {
    try {
      await firstValueFrom(this.http.post(endpoints.issues_create, todoItem));
    } catch (error) {
      console.error(error);
    }
  }

  deleteIssue(id: string): Observable<any> {
    return this.http.delete(endpoints.issues_delete + id);
  }
}
