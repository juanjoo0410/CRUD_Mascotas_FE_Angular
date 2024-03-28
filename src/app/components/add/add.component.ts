import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  nombre: string = "";
  raza: string = "";
  sexo: string = "";

  mascotaObj!: Mascota;
  

  constructor(
    private router: Router, 
    private service: MascotaService){
    }

  ngOnInit(){

  }

  saveMascota(mascota: Mascota){
    this.service.createMascota(mascota)
    .subscribe(data=>{
      alert("Mascota guardada exitosamente.");
      this.router.navigate(['list']);
    })
  }
}
