import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppConfig} from './config/app.config';
import {Error404Component} from './core/error404/error-404.component';

const routes: Routes = [
  { path: '', redirectTo: '/' + AppConfig.routes.error404, pathMatch: 'full' },
  { path: AppConfig.routes.error404, component: Error404Component} ,
  { path: '**', redirectTo: '/' + AppConfig.routes.error404 }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
