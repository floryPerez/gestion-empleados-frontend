import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //esta url obtiene el listadp de todos los empleados en el backend
  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient: HttpClient) { }
  //este método sirve para obtener los empleados 

  obtenerListaDeEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }
  //Este metodo nos sirve para registrar un empleado
  registrarEmpleado(empleado: Empleado): Observable<Object> {

    return this.httpClient.post(`${this.baseURL}`, empleado)

  }
  //este metodo sirve para actualizar un empleado
  actualizarEmpleado(id: number, empleado: Empleado): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, empleado);

  }
  //este método nos sirve para obtner un empleado por id
  obtenerEmpleadoPorID(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);

  }
  //este metodo sirve para eliminar un empleado
  eliminarEmpleado(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
