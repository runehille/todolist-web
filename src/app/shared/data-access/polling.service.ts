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
}
