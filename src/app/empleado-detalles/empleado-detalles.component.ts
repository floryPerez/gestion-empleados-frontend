import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrl: './empleado-detalles.component.css'
})
export class EmpleadoDetallesComponent implements OnInit {
  id:number;
  empleado:Empleado;
  constructor(private router:ActivatedRoute, 
    private empleadoServicio:EmpleadoService){

  }


  ngOnInit(): void {
      this.id=this.router.snapshot.params['id'];
      this.empleado=new Empleado();
      this.empleadoServicio.obtenerEmpleadoPorID(this.id).subscribe(dato=>{
      this.empleado=dato;
      });
  }
}
