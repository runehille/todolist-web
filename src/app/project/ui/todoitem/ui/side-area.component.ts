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
  selector: 'app-project-todoitem-side-area',
  template: `
    <div
      class="flex flex-col h-96 border-slate-200 space-y-4"
      *ngIf="issue | async as issueData"
    >
      <div class="flex justify-between">
        <select
          name="status"
          id="status"
          formControlName="status"
          class="bg-blue-600 text-white w-fit p-1 rounded-md hover:cursor-pointer"
        >
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div class="flex flex-col border-2 p-4 border-slate-100 space-y-4">
        <h2 class="text-lg font-medium border-b-2 border-slate-100 pb-2">
          Details
        </h2>

        <div class="flex flex-col space-y-6">
          <div class="flex ">
            <p class="w-1/4 ">Assignee</p>
            <input type="text" [(ngModel)]="issueData.assignedTo" />
          </div>
          <div class="flex ">
            <p class="w-1/4">Reporter</p>
            <input type="reporter" [(ngModel)]="issueData.createdBy" />
          </div>
          <div class="flex">
            <p class="w-1/4">Priority</p>
            <input type="text" [(ngModel)]="issueData.priority" />
          </div>
        </div>
      </div>
      <div class="flex flex-col text-sm px-2">
        <div class="flex">
          <p class="w-1/5">Created</p>
          <p>{{ issueData.createdTimestamp | date : 'short' : 'nb-NO' }}</p>
        </div>
        <div class="flex">
          <p class="w-1/5">Last modified</p>
          <p>
            {{ issueData.lastModifiedTimestamp | date : 'short' : 'nb-NO' }}
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [''],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoitemSideAreaComponent {
  @Input() issue: Observable<TodoItem> | undefined;
}

@NgModule({
  declarations: [TodoitemSideAreaComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  exports: [TodoitemSideAreaComponent],
})
export class TodoitemSideAreaModule {}
