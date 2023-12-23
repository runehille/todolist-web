import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, first, tap } from 'rxjs';
import { TodoitemMainAreaModule } from 'src/app/project/ui/todoitem/ui/main-area.component';
import { TodoitemSideAreaModule } from 'src/app/project/ui/todoitem/ui/side-area.component';
import { PollingService } from 'src/app/shared/data-access/polling.service';
import { TodoItem } from 'src/app/shared/interfaces/todoitem.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todoitem',
  template: `
    <div class="flex flex-col space-y-10">
      <div class="flex justify-between">
        <button
          class="bg-slate-100  py-1 px-4 rounded-md"
          (click)="navigateBack()"
        >
          Back
        </button>
        <div class="relative">
          <button
            class="bg-slate-100 py-1 px-2 rounded-md"
            (click)="toggleMenu()"
          >
            <img src="assets/dots.svg" alt="" />
          </button>

          <div
            *ngIf="menuOpen && !deleteModalShow"
            class="absolute right-0 z-10  px-4 py-2 origin-top-right rounded-md shadow-lg items-start bg-white"
          >
            <button (click)="showDeleteModal()">Delete</button>
          </div>
        </div>
      </div>
      <div class="flex space-x-20">
        <div class="w-3/5">
          <app-project-todoitem-main-area
            [issue]="issue"
          ></app-project-todoitem-main-area>
        </div>
        <div class="w-2/5">
          <app-project-todoitem-side-area
            [issue]="issue"
          ></app-project-todoitem-side-area>
        </div>
      </div>
    </div>

    <div
      *ngIf="deleteModalShow"
      class="fixed inset-0 bg-slate-600 bg-opacity-50 overflow-y-auto h-full w-full"
    >
      <div class="flex items-center justify-center h-screen">
        <div
          class="relative mx-auto p-5 border w-1/6 shadow-lg rounded-md bg-white"
        >
          <div class="">
            <div class="flex justify-between">
              <h3 class="text-lg font-medium">
                Are you sure you want to delete this issue?
              </h3>
            </div>
            <form class="space-y-8 mt-4">
              <div class="flex px-4 py-3 justify-end">
                <button
                  type="button"
                  (click)="hideDeleteModal()"
                  class="px-4 py-2 bg-transparent font-medium hover:cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  (click)="deleteIssue()"
                  class="px-4 py-1 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 hover:cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [''],
})
export class TodoItemComponent {
  issue: Observable<TodoItem> = new Observable();
  id: string;
  menuOpen: boolean;
  deleteModalShow: boolean;

  constructor(
    private route: ActivatedRoute,
    private dataService: PollingService,
    private location: Location
  ) {
    this.menuOpen = false;
    this.deleteModalShow = false;

    this.id = this.route.snapshot.paramMap.get('id')!;

    try {
      this.issue = this.dataService.getIssueById(this.id);
    } catch (error) {
      console.log(error);
    }
  }

  deleteIssue() {
    this.dataService
      .deleteIssue(this.id)
      .pipe(
        first(),
        tap(() => {
          this.navigateBack();
        })
      )
      .subscribe();
  }

  showDeleteModal() {
    this.toggleMenu();
    this.deleteModalShow = true;
  }

  hideDeleteModal() {
    this.deleteModalShow = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigateBack() {
    this.location.back();
  }
}

@NgModule({
  declarations: [TodoItemComponent],
  imports: [
    CommonModule,
    TodoitemMainAreaModule,
    TodoitemSideAreaModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [TodoItemComponent],
})
export class TodoItemModule {}
