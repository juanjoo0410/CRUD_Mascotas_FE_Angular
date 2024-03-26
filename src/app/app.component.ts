import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD_Mascotas_FE_Angular';

  constructor(private router: Router){};

  openList(){
    this.router.navigate(['list']);
  }

  openAdd(){
    this.router.navigate(['add']);
  }
}
