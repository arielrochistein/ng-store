import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
