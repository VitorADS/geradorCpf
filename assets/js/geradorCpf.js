function gerarCpf(){
    let num1 = numeroAleatorio().toString();
    let num2 = numeroAleatorio().toString();
    let num3 = numeroAleatorio().toString();

    let cpf = num1 + num2 + num3;
    
    cpf = validaCpf(cpf);
}

function formataCpf(cpf){
    for(let i in cpf){
        cpf[i] = cpf[i].toString();
    }

    let row2 = document.getElementById('row2');
    row2.classList.add('alert-success');

    document.getElementById('h2D').innerHTML = (cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3]+cpf[4]+cpf[5]+'.'+cpf[6]+cpf[7]+cpf[8]+'-'+cpf[9]+cpf[10]);
}

function numeroAleatorio(){
    numero = Math.floor(Math.random() * 999);

    if(numero < 100){
        if(numero < 10){
            return '00' + numero;
        }else{
            return '0' + numero;
        }
    }

    return numero;
}

function validaCpf(cpf){
    cpf = cpf.split('');

    for(let i in cpf){
        cpf[i] = parseInt(cpf[i]);
    }

    let result1 = 0;

    for (let i = 1; i <= 9; i++){
        result1 += cpf[i-1] * (11 - i);
    }
    
    let resto1 = (result1 * 10)
    resto1 = resto1 % 11;

    if(resto1 == 10 || resto1 == 11){
        resto1 = 0;
    }

    cpf[9] = resto1;
    if(resto1 == cpf[9]){
        let result2 = 0;

        for (let i = 1; i <= 10; i++){
            result2 += cpf[i-1] * (12 - i);
        }

        let resto2 = (result2 * 10);
        resto2 = resto2 % 11;

        cpf[10] = resto2;
        if(resto2 == cpf[10]){
            cpf = formataCpf(cpf);

            return cpf;
        }else{
            throw new Error('CPF Inválido!');
        }

    }else{
        throw new Error('CPF Inválido!');
    }
}