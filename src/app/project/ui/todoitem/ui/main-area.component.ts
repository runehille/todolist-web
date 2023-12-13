import { Component } from '@angular/core';

@Component({
  selector: 'app-project-todoitem-main-area',
  template: `
    <div class="p-3 pt-5 space-y-6 h-96 border-2 border-slate-200">
      <h1 class="font-medium text-xl">Prepare rocket for launch</h1>
      <div class="flex space-x-2">
        <button
          class="bg-slate-100 px-3 py-2 text rounded-md hover:cursor-not-allowed"
        >
          Attach
        </button>
        <button
          class="bg-slate-100 px-2 py-1 text rounded-md hover:cursor-not-allowed"
        >
          Create subtask
        </button>
        <button
          class="bg-slate-100 px-2 py-1 text rounded-md hover:cursor-not-allowed"
        >
          Link issue
        </button>
        <button
          class="bg-slate-100 px-2 py-1 text rounded-md hover:cursor-not-allowed"
        >
          ...
        </button>
      </div>
      <div class="border-t-2 border-slate-200">
        <p class="text-slate-600 p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          voluptatum, quae, quibusdam, doloribus quod voluptate voluptatem
          dolorum quia accusamus fugiat expedita. Quisquam, voluptas voluptates.
          Quisquam, voluptas voluptates. Quisquam, voluptas voluptates.
        </p>
      </div>
      <div class="flex flex-col space-y-2">
        <h1 class="font-medium">Activity</h1>
        <div class="flex  w-full space-x-1">
          <p>Show:</p>
          <button
            class="bg-slate-100 px-2 py-1 text rounded-md hover:cursor-not-allowed"
          >
            All
          </button>
          <button
            class="bg-slate-100 px-2 py-1 text rounded-md hover:cursor-not-allowed"
          >
            Comments
          </button>
          <button
            class="bg-slate-100 px-2 py-1 text rounded-md hover:cursor-not-allowed"
          >
            History
          </button>
          <div class="flex  w-full space-x-1 justify-end">
            <p>Oldest first</p>
            <img src="assets/bars-arrow-up.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``],
  standalone: true,
})
export class TodoitemMainAreaComponent {}
