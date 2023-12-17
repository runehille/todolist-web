import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoitemMainAreaModule } from 'src/app/project/ui/todoitem/ui/main-area.component';
import { TodoitemSideAreaModule } from 'src/app/project/ui/todoitem/ui/side-area.component';
import { PollingService } from 'src/app/shared/data-access/polling.service';
import { TodoItem } from 'src/app/shared/interfaces/todoitem.interface';

@Component({
  selector: 'app-todoitem',
  template: `
    <div class="flex space-x-20">
      <div class="w-3/5">
        <app-project-todoitem-main-area
          [issue]="issue"
        ></app-project-todoitem-main-area>
      </div>
      <div class="w-2/5">
        <app-project-todoitem-side-area
          [issue]="issue"
        ></app-project-todoitem-side-area>
      </div>
    </div>
  `,
  styles: [''],
})
export class TodoItemComponent {
  issue: Observable<TodoItem> = new Observable();
  id: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: PollingService
  ) {
    this.id = this.route.snapshot.paramMap.get('id')!;

    try {
      this.issue = this.dataService.getIssueById(this.id);
    } catch (error) {
      console.log(error);
    }
  }
}

@NgModule({
  declarations: [TodoItemComponent],
  imports: [
    CommonModule,
    TodoitemMainAreaModule,
    TodoitemSideAreaModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [TodoItemComponent],
})
export class TodoItemModule {}
