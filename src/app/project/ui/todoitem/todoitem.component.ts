import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoitemMainAreaModule } from 'src/app/project/ui/todoitem/ui/main-area.component';
import { TodoitemSideAreaModule } from 'src/app/project/ui/todoitem/ui/side-area.component';

@Component({
  selector: 'app-todoitem',
  template: `
    <div class="flex space-x-20">
      <div class="w-3/5">
        <app-project-todoitem-main-area></app-project-todoitem-main-area>
      </div>
      <div class="w-2/5">
        <app-project-todoitem-side-area></app-project-todoitem-side-area>
      </div>
    </div>
  `,
  styles: [''],
})
export class TodoItemComponent {}

@NgModule({
  declarations: [TodoItemComponent],
  imports: [TodoitemMainAreaModule, TodoitemSideAreaModule, FormsModule],
  exports: [TodoItemComponent],
})
export class TodoItemModule {}
