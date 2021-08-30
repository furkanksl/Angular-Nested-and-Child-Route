import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBaseComponent } from './home-base/home-base.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: HomeBaseComponent,
      },
      {
        path: "news",
        component: NewsComponent,
      }
    ]
  },

  {
    path: "**", redirectTo: "home",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
