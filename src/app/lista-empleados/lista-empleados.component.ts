import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent implements OnInit {


  empleados: Empleado[];

  constructor(private empleadoServicio: EmpleadoService,
    private router: Router) { }

  ngOnInit(): void {
    //se inicializa
    this.obtenerEmpleados();

  }

  actualizarEmpleado(id: number) {
    this.router.navigate(['actualizar-empleado', id]);
  }


  //se suscribe uno a ese listado
  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }
  verDetallesDelEmpleado(id: number) {
    this.router.navigate(['empleado-detalles', id]);
  }
  // eliminarEmpleado(id:number){
  //   this.empleadoServicio.eliminarEmpleado(id).subscribe(dato=> {
  //     console.log(dato);
  //     this.obtenerEmpleados();
  //   });
  // }

  /*
    eliminarEmpleado(id: number) {
      const ok = confirm("¿Estas seguro de eliminar esta tarea?");
      if (ok) {
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
        }
        );
    }
  }
  }
  */

  eliminarEmpleado(id:number){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Confirma que quiere eliminar el empleado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'no,cancelar'
    }).then((result) => {
      if(result.value){
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
          Swal.fire(
            'Empleado eliminado',
            'El empleado ha sido eliminada con exito',
            'success'
          )
        })
      }
    })
  }




}  




/*

eliminarEmpleado(id: number) {
Swal({
 title: '¿Estas seguro?',
     text: "Confirma que quiere eliminar al empleado",
      icon: 'warning',
      showCancelButton: true,
       confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
       confirmButtonText: 'Sí, elimínalo',
       cancelButtonText: 'no, cancelar',
    confirmButtonClass: 'btn btn-succes',
       cancelButtonClass: 'btn btn-danger',
       buttonsStyling: true
     }).then((result) => {
       if (result.value) {
         this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
           console.log(dato);
          this.obtenerEmpleados();
           Swal(

            'Empleado eliminado',
            'El empleado  ha sido eliminada con exito',
            'success'
          )
         })
      }
     })

   }
 }
*/
