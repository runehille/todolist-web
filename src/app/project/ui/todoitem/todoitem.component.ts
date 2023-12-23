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
            *ngIf="menuOpen"
            class="absolute right-0 z-10  px-4 py-2 origin-top-right rounded-md shadow-lg items-start bg-white"
          >
            <button (click)="deleteIssue()">Delete</button>
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
  `,
  styles: [''],
})
export class TodoItemComponent {
  issue: Observable<TodoItem> = new Observable();
  id: string;
  menuOpen: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dataService: PollingService,
    private location: Location
  ) {
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
