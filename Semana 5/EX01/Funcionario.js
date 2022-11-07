export class Funcionario {
    cpf
    nomeCompleto
    salario

    constructor(cpf, nomeCompleto, salario){
        this.cpf = cpf;
        this.nomeCompleto = nomeCompleto;
        this.salario = salario;
    }

    promover(percentual){
        this.salario *= (1 + percentual / 100);
        return this.salario;
    }

    validaCPF(){
        let tiraCaracter = this.cpf.replaceAll('-','').replaceAll('.','');
        let splitCPF = (tiraCaracter.slice(0,9)).split('');
        let multiplicador = (splitCPF.reduce ( (acc, element, index) => acc += element * (10 - index), 0 )) * 10 % 11;
        if (multiplicador == tiraCaracter[9]){
            splitCPF = (tiraCaracter.slice(0,10)).split('');
            multiplicador = (splitCPF.reduce ( (acc, element, index) => acc += element * (11 - index), 0 )) * 10 % 11
            if (multiplicador == tiraCaracter[10]){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}