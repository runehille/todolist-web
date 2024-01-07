import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateModalModule } from './create-modal.component';

@Component({
  selector: 'app-top-bar',
  template: `
    <nav class="container mx-auto p-3 px-6 min-w-full bg-white shadow-sm">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-between">
          <div class="space-x-6 font-semibold">
            <a class="text-xl font-bold text-slate-800" href="/">
              Issue Tracker
            </a>
            <a routerLink="/projects" class="hover:text-slate-400">Projects</a>
            <a class="text-slate-400 hover:cursor-not-allowed">Dashboards</a>
            <a class="text-slate-400 hover:cursor-not-allowed">People</a>

            <button
              (click)="openModal()"
              class="p-2 px-4 text-white bg-slate-900 rounded-md hover:bg-slate-700"
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
          <a class="hover:cursor-not-allowed">
            <img src="assets/bell.svg" alt="" />
          </a>
          <a class="hover:cursor-not-allowed">
            <img src="assets/settings.svg" alt="" />
          </a>
          <a class="hover:cursor-not-allowed">
            <img src="" alt="" />
          </a>
          <a class="hover:cursor-not-allowed">
            <img src="https://picsum.photos/35" alt="" class="rounded-full" />
          </a>
        </div>
      </div>
    </nav>

    <app-create-modal
      *ngIf="showModal"
      (closed)="closeModal()"
    ></app-create-modal>
  `,
  styles: [``],
})
export class TopBarComponent {
  searchvalue: string = '';
  showModal: boolean = false;

  constructor() {}

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}

@NgModule({
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
  imports: [CommonModule, FormsModule, RouterModule, CreateModalModule],
})
export class TopBarModule {}
