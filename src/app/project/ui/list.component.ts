import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PollingService } from 'src/app/shared/data-access/polling.service';

@Component({
  selector: 'app-project-list',
  template: `
    <div class="flex min-w-full justify-end space-x-2">
      <button class="bg-slate-100 px-2 py-1 text rounded-md">Comments</button>
      <button class="bg-slate-100 px-2 py-1 text rounded-md">Share</button>
      <button class="bg-slate-100 px-2 py-1 text rounded-md">About</button>
    </div>
    <table class=" bg-white min-w-full">
      <thead class="border-b-2 border-gray-300">
        <tr>
          <th class="py-4 text-left" *ngFor="let item of listheader">
            <div class="flex space-x-1">
              <img src="{{ item.icon }}" alt="" />
              <p class="text-slate-600">{{ item.name }}</p>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          *ngFor="let item of todoitems$ | async"
          class="hover:bg-gray-100 hover:cursor-pointer border-b-2 border-gray-200"
        >
          <td class="py-2 text-slate-600">{{ item.id }}</td>
          <td class="py-2">{{ item.title }}</td>
          <td class="py-2">
            <p class="bg-blue-300 text-blue-950 m-2 p-2 px-3 rounded-lg w-fit">
              {{ item.status }}
            </p>
          </td>
          <td class="py-2">{{ item.assignedTo }}</td>
          <td class="py-2">{{ item.priority }}</td>
          <td class="py-2">{{ item.type }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [``],
})
export class ProjectListComponent {
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

  todoitems$: Observable<any>;

  constructor(private pollingService: PollingService) {
    this.todoitems$ = this.pollingService.pollEndpoint(
      'https://todolistapi20230406231150.azurewebsites.net/todoitems',
      5000
    );
  }
}

@NgModule({
  declarations: [ProjectListComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [ProjectListComponent],
})
export class ProjectListModule {}
