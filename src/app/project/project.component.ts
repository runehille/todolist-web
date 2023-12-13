import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './ui/sidenav.component';
import { TodoItemModule } from './ui/todoitem/todoitem.component';

@Component({
  selector: 'app-project',
  template: `
    <div class="flex h-full min-h-screen w-full">
      <app-project-sidenav></app-project-sidenav>
      <div
        class="flex flex-col h-full min-h-screen  m-1 rounded-md bg-white p-8 px-20 space-y-4 flex-grow"
      >
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [''],
})
export class ProjectPage {}

@NgModule({
  declarations: [ProjectPage],
  exports: [ProjectPage],
  imports: [CommonModule, RouterModule, SidenavComponent, TodoItemModule],
})
export class ProjectPageModule {}
