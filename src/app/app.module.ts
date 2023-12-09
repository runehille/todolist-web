import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopBarModule } from './shared/ui/top-bar.component';

@Component({
  selector: 'app-root',
  template: `
    <app-top-bar></app-top-bar>

    <div class="flex h-full min-h-screen mb-3">
      <nav
        class="flex flex-col shadow-md bg-slate-50 border-r-2 border-slate-200 w-64 "
      >
        <div class="mx-4 my-6 ">
          <h1 class="font-semibold">Project Name</h1>
          <p>Lorem ipsum dolor sit</p>
        </div>
        <div class="flex flex-col mx-4 justify-between space-y-2">
          <div
            class="flex space-x-2 hover:bg-gray-300 hover:cursor-pointer"
            routerLink="#"
          >
            <img src="assets/list.svg" alt="" />
            <p>List</p>
          </div>
          <div
            class="flex space-x-2 hover:bg-gray-300 hover:cursor-pointer"
            routerLink="#"
          >
            <img src="assets/board.svg" alt="" />
            <p>Board</p>
          </div>
        </div>
      </nav>

      <div class="flex flex-col m-1 rounded-md bg-white p-8 w-screen space-y-4">
        <div class="flex min-w-full justify-end space-x-2">
          <button class="bg-slate-100 px-2 py-1 text rounded-md">
            Comments
          </button>
          <button class="bg-slate-100 px-2 py-1 text rounded-md">Share</button>
          <button class="bg-slate-100 px-2 py-1 text rounded-md">About</button>
        </div>
        <table class="bg-white mx-14">
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
              *ngFor="let item of list"
              class="hover:bg-gray-100 hover:cursor-pointer border-b-2 border-gray-200"
            >
              <td class="py-2 text-slate-600">{{ item.key }}</td>
              <td class="py-2">{{ item.title }}</td>
              <td class="py-2">
                <p
                  class="bg-blue-300 text-blue-950 m-2 p-2 px-3 rounded-lg w-fit"
                >
                  {{ item.status }}
                </p>
              </td>
              <td class="py-2">{{ item.assignee }}</td>
              <td class="py-2">{{ item.priority }}</td>
              <td class="py-2">{{ item.type }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [``],
})
export class AppComponent {
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
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    TopBarModule,
  ],
})
export class AppModule {}
