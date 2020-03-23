import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppNavbarComponent],
  imports: [
    RouterModule,
    MatMenuModule,
    MatToolbarModule,
    FormsModule
  ],
  exports: [
    AppNavbarComponent
  ]
})
export class SharedModule { }
