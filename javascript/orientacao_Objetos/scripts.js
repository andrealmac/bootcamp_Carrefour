//A programação baseada em protótipos é um estilo de programação orientada a objetos no qual o comportamento de reuso (também conhecido como herança) é aplicado através da clonagem de objetos existentes, que servem como protótipos.
//Abstraçao deixar o problemas mais simples
//Heraças alem de herdar tem suas proprias caract
//Encapsulamento classe tem propriedades e metodos independentes do restante do código
//polimorfismo se comportam de forma diferentes
//CLASS
class contaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;//OBJETOS
        this.numero = numero;//OBJETOS
        this.tipo = tipo;//OBJETOS
        this._saldo = 0;//OBJETOS
    }

    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor>this._saldo){
            return "Operacao negada";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo+valor;
        return this._saldo;
    }
}
//classe filho
class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito=valor;
    }
}
class contaPoupanca extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupanca';
        
    }
}
class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
        
    }
    sacar(valor){
        if(valor>500){
            return "Operacao negada!"
        }
        this._saldo = this._saldo - valor;
    }
}