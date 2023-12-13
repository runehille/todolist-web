import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TodoItem } from 'src/app/shared/interfaces/todoitem.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateItemService {
  constructor(private http: HttpClient) {}

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
}
