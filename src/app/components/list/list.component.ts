import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  mascotas?: Mascota[];
  constructor(
    private service: MascotaService, 
    private router: Router) {}

  ngOnInit(){
    this.listaMascotas();
  }

  listaMascotas(){
    this.service.getMascotas()
    .subscribe(data=>{
      this.mascotas=data;})
  }

  editar(mascota: Mascota): void{
    localStorage.setItem("id", mascota.id.toString());
    this.router.navigate(['edit']);
  }

  eliminar(id: number){
    this.service.deleteMascota(id)
    .subscribe(data=>{
      this.listaMascotas();
      alert("Mascota eliminada exitosamente.");
    });
  }
}
