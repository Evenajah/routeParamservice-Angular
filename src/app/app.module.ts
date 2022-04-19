import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app-route.module';
import { CommonModule } from '@angular/common';
import { MyComponent } from '../my-component/my-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRouteModule,
    CommonModule,
  ],
  declarations: [AppComponent, MyComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
