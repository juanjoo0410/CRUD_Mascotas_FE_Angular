import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  mascota!: Mascota;
  constructor(
    private router: Router, 
    private service: MascotaService){}

  ngOnInit(){
    //saveMascota(mascota);
  }

  updateMascota(){
    let id = localStorage.getItem("id");
    this.service.getMascota(parseInt(id ?? "0")).subscribe(data=>{
      this.mascota = data;
    })
  }

}
