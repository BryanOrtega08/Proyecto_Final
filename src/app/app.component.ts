// app.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fronted';

  constructor(private router: Router) {}

  ngOnInit() {
    // Redirige a la vista de login al inicializar la aplicación
    this.router.navigate(['/login']);
  }
}
