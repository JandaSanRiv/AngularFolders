// -:- Suma -:- 
function Suma(num1:number, num2:number):number;
function Suma(num1:number[]):number;
function Suma(num1:any, num2?:number):number{
    let suma = 0;
    if(Array.isArray(num1)){
        for(let i= 0; i<num1.length; i++){
            suma += num1[i];
        }
    }else{
        suma = num1 + num2;
    }
    return suma;
}

let num1= 1, 
num2 = 5;
console.log(`Suma ${num1} + ${num2} = ${Suma(num1, num2)}`);
let nums =[1,2,3,4,5]
console.log(`Suma ${nums}= ${Suma(nums)}`);

//-:- Resta -:-
function Resta(num1:number, num2:number):number;
function Resta(num1:number[]):number;
function Resta(num1:any, num2?:number):number{
    let resta = 0;
    if(Array.isArray(num1)){

        if(num1.length>0){

            resta = num1[0];
            for(let i= 1; i<num1.length; i++){
                resta -= num1[i];
            }
        }
    }else{
        if(num2 == undefined)
            num2 = 0;
        resta = num1 - num2;
    }
    return resta;
}

num1= 100, 
num2 = 85;
console.log(`Pago Frappe: Resta ${num1} - ${num2} = ${Resta(num1, num2)}`);
nums =[500, 85, 330, 10]
console.log(`Pago frappe y cafe: Resta ${nums}= ${Resta(nums)}`);


function Mutiplica(num1: number, num2:number):number{
    return num1 * num2;
}

num1= 85, 
num2 = 3;
console.log(`Pago ${num2} Frappe(s): Multplicacion ${num1} * ${num2} = ${Mutiplica(num1, num2)}`);

const MayorDosNumeros = (num1:number, num2:number) =>{

    if(num1>num2){
        return num1;
    }else{
        return num2;
    }

}

//Ejemplo del profe funcion flecha con tipo de retorno
const MayorDeDosNumeros = (num1:number, num2:number):number =>{

    let mayor:number = 0;
    if(num1>num2){
        return num1;
    }else{
        return num2;
    }
    return mayor;
}

num1= 85, 
num2 = 79;
console.log(`Frappe Oreo: ${num1},Frappe Caramelo: ${num2}  \n El frappe mas caro es:  ${MayorDosNumeros(num1, num2)}`);

enum Role {'Admin', 'User', 'SuperUser'};
type Department = 'MKL' | 'Finanzas'| 'RH'; 
function AgregaUsuario(nombre:string, rol:Role, depto: Department):void{
    console.log(`Usuario ${nombre} con el rol ${Role[rol]}, miembro del departamento ${depto} agregado`);

}

AgregaUsuario('Alma', Role.Admin, 'RH');

