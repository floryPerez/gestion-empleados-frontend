import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';

import { Router,ActivatedRoute } from '@angular/router';
import { Empleado } from '../empleado';


@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrl: './actualizar-empleado.component.css'
})
export class ActualizarEmpleadoComponent implements OnInit {

  
  id: number;
  empleado: Empleado = new Empleado();

  constructor(private empleadoServicio: EmpleadoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.empleadoServicio.obtenerEmpleadoPorID(this.id).subscribe(data => {
      this.empleado = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.empleadoServicio.actualizarEmpleado(this.id, this.empleado).subscribe( data =>{
      this.irALaListaDeEmpleado();
    }
    , error=> console.log(error));
  }

  irALaListaDeEmpleado(){
    this.router.navigate(['/empleados']);
  }
}
