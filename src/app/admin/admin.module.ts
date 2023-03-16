import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, MaterialModule],
})
export class AdminModule {}
