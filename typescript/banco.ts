"use strict"

interface ICuenta{
    Deposito(monto:number):void;
    Retiro(monto:number):void;
    ConsultaSaldo():void;
}

interface ICuentaDeCredito extends ICuenta{
    Calculaintereses():number;
}

class CuentaPersonal implements ICuenta{
    private saldo:number=0;
    constructor(saldo:number){
        if(saldo!=undefined)
            this.saldo = saldo;
        else   
            this.saldo = 0;
    }
    Deposito(monto:number){
        this.saldo = this.saldo + monto;
        console.log(`Se deposito ${monto}`);
    }  
    Retiro(monto:number){

        if(this.saldo >= monto){

            this.saldo = this.saldo - monto;
            console.log(`Se retiro ${monto}`);
        }else{
            
            console.log(`El monto excede el saldo disponible: \n 
            Saldo disponible: ${this.saldo}\n
            Monto solicitado: ${monto} `);
        }
    }    
    ConsultaSaldo(){
        console.log(`Saldo actual: ${this.saldo}`);
    } 
}

console.log("-:- ctaPersonal1 -:-")
let ctaPersonal1 = new CuentaPersonal(1000);
ctaPersonal1.Deposito(500);
ctaPersonal1.Retiro(1200);
ctaPersonal1.ConsultaSaldo();

class CuentaEmpresarial implements ICuenta{
    private saldo:number=0;
    constructor(saldo:number){
        if(saldo!=undefined)
            this.saldo = saldo;
        else   
            this.saldo = 0;
    }
    Deposito(monto:number){
        this.saldo = this.saldo + monto;
        console.log(`Se deposito ${monto}`);
    }  
    Retiro(monto:number){
        this.saldo = this.saldo - monto;
        console.log(`Se retiro ${monto}`);
    }    
    ConsultaSaldo(){
        console.log(`Saldo actual: ${this.saldo}`);
    } 
}

console.log("-:- ctaEmpresarial1 -:-")
let ctaEmpresarial1 = new CuentaEmpresarial(10000);
ctaEmpresarial1.Deposito(1500);
ctaEmpresarial1.Retiro(800);
ctaEmpresarial1.Retiro(5000);
ctaEmpresarial1.Deposito(1350);
ctaEmpresarial1.ConsultaSaldo();

class TarjetaDeCredito implements ICuentaDeCredito{
    private saldo:number =0;
    constructor(saldo:number){
        if(saldo!=undefined)
            this.saldo = saldo;
        else   
            this.saldo = 0;
    }
    Calculaintereses():number{
        return this.saldo *.20;
    }
    Deposito(monto:number){
        this.saldo = this.saldo + monto;
        console.log(`Se deposito ${monto}`);
    }  
    Retiro(monto:number){
        this.saldo = this.saldo - monto;
        console.log(`Se retiro ${monto}`);
    }    
    ConsultaSaldo(){
        console.log(`Saldo actual: ${this.saldo}`);
    }
}

console.log("-:- ctaCredito-:-")
let ctaCredito1 = new TarjetaDeCredito(2500);
ctaCredito1.Deposito(500);
ctaCredito1.Retiro(200);
ctaCredito1.ConsultaSaldo();
ctaCredito1.Retiro(5800);
ctaCredito1.Deposito(350);
