"use strict";
let myboolean = true;
let myNumber = 1234;
let myStringArray = [`first`, `second`, `third`];
let flag = false;
let dato = 'dato cadena';
console.log(dato);
dato = 1000;
console.log(dato);
dato = true;
console.log(dato);
const prueba = "Turtle";
var Brands;
(function (Brands) {
    Brands[Brands["Chevrolet"] = 0] = "Chevrolet";
    Brands[Brands["Cadillac"] = 1] = "Cadillac";
    Brands[Brands["Ford"] = 2] = "Ford";
    Brands[Brands["Buick"] = 3] = "Buick";
    Brands[Brands["Chrysler"] = 4] = "Chrysler";
    Brands[Brands["Dodge"] = 5] = "Dodge";
})(Brands || (Brands = {}));
;
let carro = Brands.Ford;
function SaludaAlUsuario() {
    console.log('Hola usuario');
}
let marca = "Bachoco";
function SumaDeNumeros(num1, num2) {
    let suma = 0;
    if (Array.isArray(num1)) {
    }
    return suma;
}
function hello(names, greeting) {
    let namesArray;
    if (Array.isArray(names)) {
        namesArray = names;
    }
    else {
        namesArray = [names];
    }
    if (!greeting) {
        greeting = 'Hello';
    }
    return greeting + ', ' + namesArray.join(' and ') + '!';
}
function add(a, b) {
    return a + b;
}
class Persona {
    constructor(n, ap, am, mayorDeEdad) {
        this.mayorDeEdad = mayorDeEdad;
        this.nombre = '';
        this.apellidoPaterno = '';
        this.apellidoMaterno = '';
        this.nombre = n;
        this.apellidoPaterno = ap;
        this.apellidoMaterno = am;
    }
    getINE() {
        return this.mayorDeEdad ? "Puede tramitar el INE" : "No puede asignarsele INE";
    }
}
class Rectangulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
        this.color = "Rojo";
    }
    calculaArea() {
        return this.base * this.altura;
    }
    setBaseYAltura(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}
class Triangulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
        this.color = "Verde";
    }
    calculaArea() {
        return this.base * this.altura / 2;
    }
    setBaseYAltura(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}
class TrianguloIsosceles extends Triangulo {
}
class TrianguloEscaleno extends Triangulo {
}
class Circulo {
    constructor() {
        this.color = "Rosa";
        this.diametro = 10;
    }
    calculaArea() {
        return Math.PI * Math.pow(this.diametro / 2, 2);
    }
    setBaseYAltura(base, altura) {
    }
}
// let miTriangulo = new TrianguloEscaleno();
let miTriangulo = new TrianguloEscaleno(); // si no se define el tipo de dato, infiere el tipo con lo que viene despues de =new
miTriangulo.color = "magente";
miTriangulo.setBaseYAltura(13, 12);
console.log(miTriangulo.color);
console.log(miTriangulo.calculaArea());
