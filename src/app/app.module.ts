// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/login/login.component';
import { SlidebarComponent } from 'src/slidebar/slidebar.component';
import { FooterComponent } from 'src/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SlidebarComponent,
    FooterComponent
   
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }