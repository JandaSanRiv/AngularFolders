"use strict";
class CuentaPersonal {
    constructor(saldo) {
        this.saldo = 0;
        if (saldo != undefined)
            this.saldo = saldo;
        else
            this.saldo = 0;
    }
    Deposito(monto) {
        this.saldo = this.saldo + monto;
        console.log(`Se deposito ${monto}`);
    }
    Retiro(monto) {
        if (this.saldo >= monto) {
            this.saldo = this.saldo - monto;
            console.log(`Se retiro ${monto}`);
        }
        else {
            console.log(`El monto excede el saldo disponible: \n 
            Saldo disponible: ${this.saldo}\n
            Monto solicitado: ${monto} `);
        }
    }
    ConsultaSaldo() {
        console.log(`Saldo actual: ${this.saldo}`);
    }
}
console.log("-:- ctaPersonal1 -:-");
let ctaPersonal1 = new CuentaPersonal(1000);
ctaPersonal1.Deposito(500);
ctaPersonal1.Retiro(1200);
ctaPersonal1.ConsultaSaldo();
class CuentaEmpresarial {
    constructor(saldo) {
        this.saldo = 0;
        if (saldo != undefined)
            this.saldo = saldo;
        else
            this.saldo = 0;
    }
    Deposito(monto) {
        this.saldo = this.saldo + monto;
        console.log(`Se deposito ${monto}`);
    }
    Retiro(monto) {
        this.saldo = this.saldo - monto;
        console.log(`Se retiro ${monto}`);
    }
    ConsultaSaldo() {
        console.log(`Saldo actual: ${this.saldo}`);
    }
}
console.log("-:- ctaEmpresarial1 -:-");
let ctaEmpresarial1 = new CuentaEmpresarial(10000);
ctaEmpresarial1.Deposito(1500);
ctaEmpresarial1.Retiro(800);
ctaEmpresarial1.Retiro(5000);
ctaEmpresarial1.Deposito(1350);
ctaEmpresarial1.ConsultaSaldo();
class TarjetaDeCredito {
    constructor(saldo) {
        this.saldo = 0;
        if (saldo != undefined)
            this.saldo = saldo;
        else
            this.saldo = 0;
    }
    Calculaintereses() {
        return this.saldo * .20;
    }
    Deposito(monto) {
        this.saldo = this.saldo + monto;
        console.log(`Se deposito ${monto}`);
    }
    Retiro(monto) {
        this.saldo = this.saldo - monto;
        console.log(`Se retiro ${monto}`);
    }
    ConsultaSaldo() {
        console.log(`Saldo actual: ${this.saldo}`);
    }
}
console.log("-:- ctaCredito-:-");
let ctaCredito1 = new TarjetaDeCredito(2500);
ctaCredito1.Deposito(500);
ctaCredito1.Retiro(200);
ctaCredito1.ConsultaSaldo();
ctaCredito1.Retiro(5800);
ctaCredito1.Deposito(350);
