import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  template: `
    <nav class="container mx-auto p-3 px-6 min-w-full bg-white shadow-sm">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-between">
          <div class="space-x-6 font-semibold">
            <a class="text-4xl font-bold text-slate-800" href="#"> Todolist </a>
            <a href="#" class="hover:text-slate-400 hover:border-b-2"
              >Your work</a
            >
            <a routerLink="/projects" class="hover:text-slate-400">Projects</a>
            <a href="" class="hover:text-slate-400">Filters</a>
            <a href="#" class="hover:text-slate-400">Dashboards</a>
            <a href="#" class="hover:text-slate-400">People</a>

            <button
              class="p-2 px-4 text-white bg-slate-900 rounded-md hover:bg-slate-800"
            >
              Create
            </button>
          </div>
        </div>
        <div class="flex items-center space-x-3 justify-between">
          <input
            type="text"
            placeholder="search"
            [(ngModel)]="searchvalue"
            class="border-2 border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-400"
          />
          <a href="#">
            <img src="assets/bell.svg" alt="" />
          </a>
          <a href="#">
            <img src="assets/question.svg" alt="" />
          </a>
          <a href="#">
            <img src="assets/settings.svg" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="https://picsum.photos/35" alt="" class="rounded-full" />
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: [``],
})
export class TopBarComponent {
  searchvalue: string = '';
}

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [TopBarComponent],
})
export class TopBarModule {}
