import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './ui/sidenav.component';
import {
  ProjectListComponent,
  ProjectListModule,
} from 'src/app/project/ui/list.component';

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
export class ProjectPage {
  listheader = [
    {
      name: 'Key',
      icon: 'assets/hash.svg',
    },
    {
      name: 'Summary',
      icon: 'assets/summary.svg',
    },
    {
      name: 'Status',
      icon: 'assets/status.svg',
    },
    {
      name: 'Assignee',
      icon: 'assets/at.svg',
    },
    {
      name: 'Priority',
      icon: 'assets/arrow-up-circle.svg',
    },
    {
      name: 'Type',
      icon: 'assets/type.svg',
    },
  ];

  list = [
    {
      key: 'NBT-44',
      title: 'Make a new design',
      description: 'Make a new design for the website',
      status: 'In progress',
      assignee: 'Ola Nordmann',
      priority: 'High',
      type: 'Task',
    },
    {
      key: 'NBT-45',
      title: 'Backend for the website',
      description: 'create a backend for the website',
      status: 'In progress',
      assignee: 'Kari Nordmann',
      priority: 'High',
      type: 'Task',
    },
    {
      key: 'NBT-46',
      title: 'Frontend for the website',
      description: 'create a frontend for the website',
      status: 'In progress',
      assignee: 'Kari Nordmann',
      priority: 'High',
      type: 'Task',
    },
    {
      key: 'NBT-44',
      title: 'Make a new design',
      description: 'Make a new design for the website',
      status: 'In progress',
      assignee: 'Ola Nordmann',
      priority: 'High',
      type: 'Task',
    },
    {
      key: 'NBT-45',
      title: 'Backend for the website',
      description: 'create a backend for the website',
      status: 'In progress',
      assignee: 'Kari Nordmann',
      priority: 'High',
      type: 'Task',
    },
    {
      key: 'NBT-46',
      title: 'Frontend for the website',
      description: 'create a frontend for the website',
      status: 'In progress',
      assignee: 'Kari Nordmann',
      priority: 'High',
      type: 'Task',
    },
    {
      key: 'NBT-44',
      title: 'Make a new design',
      description: 'Make a new design for the website',
      status: 'In progress',
      assignee: 'Ola Nordmann',
      priority: 'High',
      type: 'Task',
    },
    {
      key: 'NBT-45',
      title: 'Backend for the website',
      description: 'create a backend for the website',
      status: 'In progress',
      assignee: 'Kari Nordmann',
      priority: 'High',
      type: 'Task',
    },
    {
      key: 'NBT-46',
      title: 'Frontend for the website',
      description: 'create a frontend for the website',
      status: 'In progress',
      assignee: 'Kari Nordmann',
      priority: 'High',
      type: 'Task',
    },
    {
      key: 'NBT-44',
      title: 'Make a new design',
      description: 'Make a new design for the website',
      status: 'In progress',
      assignee: 'Ola Nordmann',
      priority: 'High',
      type: 'Task',
    },
    {
      key: 'NBT-45',
      title: 'Backend for the website',
      description: 'create a backend for the website',
      status: 'In progress',
      assignee: 'Kari Nordmann',
      priority: 'High',
      type: 'Task',
    },
    {
      key: 'NBT-46',
      title: 'Frontend for the website',
      description: 'create a frontend for the website',
      status: 'In progress',
      assignee: 'Kari Nordmann',
      priority: 'High',
      type: 'Task',
    },
    {
      key: 'NBT-44',
      title: 'Make a new design',
      description: 'Make a new design for the website',
      status: 'In progress',
      assignee: 'Ola Nordmann',
      priority: 'High',
      type: 'Task',
    },
    {
      key: 'NBT-45',
      title: 'Backend for the website',
      description: 'create a backend for the website',
      status: 'In progress',
      assignee: 'Kari Nordmann',
      priority: 'High',
      type: 'Task',
    },
    {
      key: 'NBT-46',
      title: 'Frontend for the website',
      description: 'create a frontend for the website',
      status: 'In progress',
      assignee: 'Kari Nordmann',
      priority: 'High',
      type: 'Task',
    },
  ];
}

@NgModule({
  declarations: [ProjectPage],
  exports: [ProjectPage],
  imports: [CommonModule, RouterModule, SidenavComponent],
})
export class ProjectPageModule {}
