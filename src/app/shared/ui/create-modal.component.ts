import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { CreateItemService } from 'src/app/shared/data-access/create-item.service';
import { TodoItem } from 'src/app/shared/interfaces/todoitem.interface';

@Component({
  selector: 'app-create-modal',
  template: `
    <div
      class="fixed inset-0 bg-slate-600 bg-opacity-50 overflow-y-auto h-full w-full"
    >
      <div
        class="relative mx-auto mt-20 p-5 border w-2/5 h-4/5 shadow-lg rounded-md bg-white"
      >
        <div class="">
          <div class="flex justify-between">
            <h3 class="text-lg font-medium">Create Issue</h3>
            <a href="#" class="hover:bg-slate-100 rounded-lg">
              <img src="assets/dots.svg" alt="" />
            </a>
          </div>
          <form
            [formGroup]="issueForm"
            (ngSubmit)="submitForm()"
            class="space-y-8 mt-4"
          >
            <div class="flex flex-col w-2/5 space-y-1">
              <label for="project" class="text-slate-900 font-medium"
                >Project:</label
              >
              <select
                name="project"
                id="project"
                formControlName="project"
                class="bg-slate-100 p-2 rounded-md border-2 border-gray-300"
              >
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="database">Database</option>
              </select>
            </div>
            <div class="flex flex-col w-2/5 space-y-1">
              <label for="issuetype" class="text-slate-900 font-medium"
                >Issue type:</label
              >
              <select
                name="issuetype"
                id="issuetype"
                class="form-input bg-slate-100 p-2 rounded-md border-2 border-gray-300"
                formControlName="issuetype"
              >
                <option value="task">Task</option>
                <option value="story">Story</option>
                <option value="bug">Bug</option>
              </select>
            </div>
            <div class="mb-4">
              <label
                for="title"
                class="block text-gray-700 text-sm font-bold mb-2"
                >Summary</label
              >
              <input
                type="text"
                id="title"
                class="form-input w-full border-2 border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-400"
                formControlName="title"
              />
            </div>
            <div class="mb-4">
              <label
                for="description"
                class="block text-gray-700 text-sm font-bold mb-2"
                >Description</label
              >
              <textarea
                id="description"
                class="form-textarea w-full h-60 border-2 border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-400"
                formControlName="description"
              ></textarea>
            </div>
            <div class="flex px-4 py-3 justify-end">
              <button
                id="cancelButton"
                type="reset"
                (click)="cancel()"
                class="px-4 py-2 bg-transparent font-medium hover:cursor-pointer"
              >
                Cancel
              </button>
              <button
                id="okButton"
                type="submit"
                [disabled]="issueForm.invalid"
                class="px-4 py-1 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 hover:cursor-pointer"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class CreateModalComponent {
  @Output() closed = new EventEmitter<void>();
  issueForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private createitemService: CreateItemService
  ) {
    this.issueForm = this.formBuilder.group({
      project: ['frontend', Validators.required],
      issuetype: ['task', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['low'],
      createdBy: ['Rune'],
      assignedTo: ['Rune'],
    });
  }

  close() {
    this.closed.emit();
  }

  cancel() {
    this.close();
  }

  submitForm = async (event?: Event) => {
    event?.preventDefault();
    if (this.issueForm.valid) {
      const todoItem: TodoItem = {
        title: this.issueForm.get('title')?.value,
        description: this.issueForm.get('description')?.value,
        priority: this.issueForm.get('priority')?.value,
        createdBy: this.issueForm.get('createdBy')?.value,
        assignedTo: this.issueForm.get('assignedTo')?.value,
        status: 'todo',
        createdTimestamp: '',
        lastModifiedTimestamp: '',
      };

      this.createitemService.createItem(todoItem);
      this.close();
    }
  };
}

@NgModule({
  declarations: [CreateModalComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CreateModalComponent],
})
export class CreateModalModule {}
