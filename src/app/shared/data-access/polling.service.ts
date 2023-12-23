import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PollingService {
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

  deleteIssue(id: string): Observable<any> {
    return this.http.delete(
      'https://todolistapi20230406231150.azurewebsites.net/todoitems/delete/' +
        id
    );
  }
}
