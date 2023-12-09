import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopBarModule } from './shared/ui/top-bar.component';
import { ProjectPage } from 'src/app/project/project.page';
import { ProjectListComponent } from 'src/app/project/ui/list.component';
import { ProjectBoardComponent } from 'src/app/project/ui/board.component';

@Component({
  selector: 'app-root',
  template: `
    <app-top-bar></app-top-bar>
    <router-outlet></router-outlet>
  `,
  styles: [``],
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'projects',
        component: ProjectPage,
        children: [
          {
            path: 'list',
            component: ProjectListComponent,
          },
          {
            path: 'board',
            component: ProjectBoardComponent,
          },
        ],
      },
      {
        path: '',
        loadChildren: () =>
          import('./main/main.page').then((m) => m.MainPageModule),
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    TopBarModule,
  ],
})
export class AppModule {}
