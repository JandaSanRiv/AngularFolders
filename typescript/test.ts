"use strict"
let myboolean : boolean = true;
let myNumber : number = 1234;
let myStringArray : string[] = [`first`, `second`, `third`];
let flag = false;
let dato : any = 'dato cadena';
console.log(dato)
dato = 1000;
console.log(dato)
dato = true;
console.log(dato)

type Animal = 'Cheetah' | 'Lion' | 'Turtle';
const prueba : Animal = "Turtle";

enum Brands { Chevrolet, Cadillac, Ford, Buick, Chrysler, Dodge};
let carro : Brands = Brands.Ford;

function SaludaAlUsuario() : void {
    console.log('Hola usuario');
}

let marca = "Bachoco";

// function SumaDeNumeros(num1:number, num2?:number): number{}

function SumaDeNumeros (num1:number[], num2?:number):number;
function SumaDeNumeros (num1:number[]):number;
function SumaDeNumeros(num1:any, num2?:number):number{
    let suma = 0;
    if(Array.isArray(num1)){

    }
    return suma;
}

//No acepta este codigo
function hello(names: string): string;
function hello(names: string[]): string;
function hello(names: any, greeting?: string): string {
    let namesArray: string[];
if (Array.isArray(names)) {
namesArray = names;
} else {
namesArray = [names];
}
if (!greeting) {
greeting = 'Hello';
}
return greeting + ', ' + namesArray.join(' and ') + '!';
}


function add(a:string, b:string):string;
function add(a:number, b:number):number;
function add(a:any, b:any):any{
    return a +b;
}



class Persona{
    private nombre:string = '';
    private apellidoPaterno:string ='';
    private apellidoMaterno:string ='';

    constructor(n:string, ap:string, am:string, private mayorDeEdad: boolean){// si es private lo creara como una propiedad privada de la clase
        this.nombre = n;
        this.apellidoPaterno = ap;
        this.apellidoMaterno = am;
    }

    getINE(){
        return this.mayorDeEdad ? "Puede tramitar el INE": "No puede asignarsele INE";
    }
}



interface IFiguraGeometrica{
    color: string;
    diametro?:number;
    calculaArea():number;
    setBaseYAltura(base:number, altura:number):void;
}

class Rectangulo implements IFiguraGeometrica{
    private base:number=0;
    private altura:number=0;
    color:string = "Rojo";
    calculaArea(){
        return this.base  * this.altura;
    }
    setBaseYAltura(base:number, altura:number){
        this.base = base;
        this.altura = altura;
    }
}
class Triangulo implements IFiguraGeometrica{
    private base:number=0;
    private altura:number=0;
    color:string = "Verde";
    calculaArea(){
        return this.base * this.altura/2;
    }
    setBaseYAltura(base:number, altura:number){
        this.base = base;
        this.altura = altura;
    }
    
}


class TrianguloIsosceles extends Triangulo{

}

class TrianguloEscaleno extends Triangulo{
    
}

class Circulo implements IFiguraGeometrica{
    color:string = "Rosa";
    diametro:number=10;
    calculaArea(){
        return Math.PI * Math.pow(this.diametro/2, 2);
    }
    setBaseYAltura(base:number, altura:number){
        
    }
}

// let miTriangulo = new TrianguloEscaleno();
let miTriangulo:IFiguraGeometrica = new TrianguloEscaleno();// si no se define el tipo de dato, infiere el tipo con lo que viene despues de =new
miTriangulo.color ="magente";
miTriangulo.setBaseYAltura(13, 12);
console.log(miTriangulo.color);
console.log(miTriangulo.calculaArea());