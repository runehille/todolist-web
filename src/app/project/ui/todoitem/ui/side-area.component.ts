import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-todoitem-side-area',
  template: `
    <div class="flex flex-col h-96 border-slate-200 space-y-4">
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

      <div class="flex flex-col border-2 p-2 border-slate-100 space-y-4">
        <h2 class="text-lg font-medium border-b-2 border-slate-100">Details</h2>

        <div class="flex flex-col space-y-6">
          <div class="flex ">
            <p class="w-1/4 ">Assignee</p>
            <input type="text" [(ngModel)]="assignee" />
          </div>
          <div class="flex ">
            <p class="w-1/4">Reporter</p>
            <input type="reporter" [(ngModel)]="reporter" />
          </div>
          <div class="flex">
            <p class="w-1/4">Priority</p>
            <input type="text" [(ngModel)]="priority" />
          </div>
          <div class="flex">
            <p class="w-1/4">Labels</p>
            <input type="text" [(ngModel)]="labels" />
          </div>
        </div>
      </div>
      <div class="flex flex-col text-sm">
        <div class="flex">
          <p class="w-1/5">Created</p>
          <p>{{ createdTimeStamp }}</p>
        </div>
        <div class="flex">
          <p class="w-1/5">Last modified</p>
          <p>{{ lastModifiedTimeStamp }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [''],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoitemSideAreaComponent {
  assignee: string = 'Unassigned';
  reporter: string = 'Reporter';
  priority: string = 'Low';
  status: string = 'todo';
  labels: string = '';
  createdTimeStamp: string =
    new Date('2022-12-15').toLocaleDateString() +
    ' ' +
    new Date().toLocaleTimeString('no-NO', {
      hour: '2-digit',
      minute: '2-digit',
    });
  lastModifiedTimeStamp: string =
    new Date('2022-12-15').toLocaleDateString() +
    ' ' +
    new Date().toLocaleTimeString('no-NO', {
      hour: '2-digit',
      minute: '2-digit',
    });
}

@NgModule({
  declarations: [TodoitemSideAreaComponent],
  imports: [FormsModule, ReactiveFormsModule],
  exports: [TodoitemSideAreaComponent],
})
export class TodoitemSideAreaModule {}
