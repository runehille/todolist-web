import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { TodoItem } from 'src/app/shared/interfaces/todoitem.interface';

@Component({
  selector: 'app-project-todoitem-main-area',
  template: `
    <div class="space-y-6  border-slate-200" *ngIf="issue | async as issueData">
      <h1 class="font-medium text-3xl">{{ issueData.title }}</h1>
      <div class="flex space-x-2">
        <button
          class="bg-slate-100 px-3 py-2 text rounded-md hover:cursor-not-allowed"
        >
          Attach
        </button>
        <button
          class="bg-slate-100 px-2 py-1 text rounded-md hover:cursor-not-allowed"
        >
          Create subtask
        </button>
        <button
          class="bg-slate-100 px-2 py-1 text rounded-md hover:cursor-not-allowed"
        >
          Link issue
        </button>
        <button
          class="bg-slate-100 px-2 py-1 text rounded-md hover:cursor-not-allowed"
        >
          ...
        </button>
      </div>
      <div class="space-y-3">
        <h2 class="font-medium">Description</h2>
        <p>{{ issueData.description }}</p>
      </div>
      <div class="flex flex-col space-y-2 border-t-2 border-slate-100 pt-5">
        <h1 class="font-medium">Activity</h1>
        <div class="flex  w-full space-x-1">
          <p>Show:</p>
          <button
            class="bg-slate-100 px-2 py-1 text rounded-md hover:cursor-not-allowed"
          >
            All
          </button>
          <button
            class="bg-slate-100 px-2 py-1 text rounded-md hover:cursor-not-allowed"
          >
            Comments
          </button>
          <button
            class="bg-slate-100 px-2 py-1 text rounded-md hover:cursor-not-allowed"
          >
            History
          </button>
          <div class="flex  w-full space-x-1 justify-end">
            <p>Newest first</p>
            <img src="assets/bars-arrow-up.svg" alt="" class="w-6" />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoitemMainAreaComponent {
  @Input() issue: Observable<TodoItem> | undefined;
}

@NgModule({
  declarations: [TodoitemMainAreaComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  exports: [TodoitemMainAreaComponent],
})
export class TodoitemMainAreaModule {}
