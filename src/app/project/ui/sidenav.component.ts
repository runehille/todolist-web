import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-sidenav',
  template: `
    <nav
      class="flex flex-col h-full min-h-screen bg-slate-50 w-64 border-2 border-slate-200"
    >
      <div class="mx-4 my-6 ">
        <h1 class="font-semibold">Project Name</h1>
        <p>Lorem ipsum dolor sit</p>
      </div>
      <div class="flex flex-col mx-4 justify-between space-y-2">
        <a
          routerLink="/projects/list"
          class="flex space-x-2 hover:bg-gray-300 hover:cursor-pointer"
        >
          <img src="assets/list.svg" alt="" />
          <p>List</p>
        </a>
        <div
          class="flex space-x-2 hover:bg-gray-300 hover:cursor-pointer"
          routerLink="/projects/board"
        >
          <img src="assets/board.svg" alt="" />
          <p>Board</p>
        </div>
      </div>
    </nav>
  `,
  styles: [``],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class SidenavComponent {}
