import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LoginComponent } from './login/login.component';
import { guardGuard } from './core/guards/guard.guard';

const routes: Routes = [
  {
    path: 'parent', component: ParentComponent,
    children: [
      {
        path: 'child', component: ChildComponent
      }
    ]
  },
  {
    path: 'page1', component: Page1Component
  },
  {
    path: 'page2/:userId', component: Page2Component, canActivate: [guardGuard]
  },
  {
    path: 'login', component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
