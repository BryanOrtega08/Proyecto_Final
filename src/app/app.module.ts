import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolComponent } from './rol/rol.component';
import { CursoComponent } from './curso/curso.component';
import { MenuComponent } from './menu/menu.component';
import { PeriodosComponent } from './periodos/periodos.component';

@NgModule({
  declarations: [
    AppComponent,
    RolComponent,
    CursoComponent,
    MenuComponent,
    PeriodosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
