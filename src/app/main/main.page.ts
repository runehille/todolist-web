import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  template: ` Main Page Works! `,
  styles: [``],
})
export class MainPage {}

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: MainPage }])],
})
export class MainPageModule {}
