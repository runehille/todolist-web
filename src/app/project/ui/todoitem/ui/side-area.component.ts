import { Component } from '@angular/core';

@Component({
  selector: 'app-project-todoitem-side-area',
  template: `
    <div class="flex flex-col h-96 border-2 border-slate-200">
      <select
        name="project"
        id="project"
        formControlName="project"
        class="bg-blue-600 text-white w-fit p-1 rounded-md hover:cursor-pointer"
      >
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  `,
  styles: [''],
  standalone: true,
})
export class TodoitemSideAreaComponent {}
