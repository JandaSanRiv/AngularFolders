export class Alumno {
    nombre:string='';
    apellidos:string='';
    correoE:string='';
    fechaIngreso:string='';

    constructor(nombre, apellidos, correoE, fechaIngreso){

      this.nombre = nombre;
      this.apellidos = apellidos;
      this.correoE = correoE;
      this.fechaIngreso = fechaIngreso;
    }
}
