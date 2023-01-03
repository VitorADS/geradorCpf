function gerarCpf(){
    let num1 = numeroAleatorio().toString();
    let num2 = numeroAleatorio().toString();
    let num3 = numeroAleatorio().toString();

    let cpf = num1 + num2 + num3;
    cpf = cpf.split('');
    cpf = validaCpf(cpf);
    exibeCpf(cpf, 'alert-success');
}

function formataCpf(cpf){
    cpf = cpfToString(cpf);

    let row2 = document.getElementById('row2');
    row2.classList.add('alert-success');

    cpf = (cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3]+cpf[4]+cpf[5]+'.'+cpf[6]+cpf[7]+cpf[8]+'-'+cpf[9]+cpf[10]);

    return cpf;
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

function removeAlert(element){
    if(element.classList.contains('alert-success')){
        element.classList.remove('alert-success');
    }

    if(element.classList.contains('alert-danger')){
        element.classList.remove('alert-danger');
    }
}

function muda(){
    let botaoMuda = document.getElementById('muda');
    let h2D = document.getElementById('h2D');
    let cpf = document.getElementById('cpf');
    let row2 = document.getElementById('row2');
    let b1 = document.getElementById('b1');

    removeAlert(row2);

    if(h2D.hidden == true){
        h2D.hidden = false;
        cpf.hidden = true;
        botaoMuda.innerHTML = 'Validar CPF';
        b1.setAttribute('onclick', 'gerarCpf()');
        b1.innerHTML = 'Gerar';
    }else{
        h2D.hidden = true;
        cpf.hidden = false;
        botaoMuda.innerHTML = 'Gerar CPF';
        b1.setAttribute('onclick', 'validaCpfDigitado()');
        b1.innerHTML = 'Validar';
    }
}

function validaCpfDigitado(){
    let cpf = document.getElementById('cpf');
    let digitos = removeDigitos(cpf.value, true);
    let validaCpf = cpf.value.split('');
    validaCpf = this.validaCpf(removeDigitos(validaCpf, false));

    if((validaCpf[9] == digitos[0]) && (validaCpf[10] == digitos[1])){
        muda();
        exibeCpf(validaCpf, 'alert-success');
    }else{
        validaCpf[9] = digitos[0];
        validaCpf[10] = digitos[1];
        muda();
        exibeCpf(validaCpf, 'alert-danger');
    }
}

function exibeCpf(cpf, classe){
    cpf = this.formataCpf(cpf);
    let exibe = document.getElementById('h2D');
    let row2 = document.getElementById('row2');

    removeAlert(row2);
    exibe.innerHTML = cpf;
    row2.classList.add(classe);
}

function cpfToString(cpf){
    for(let i in cpf){
        cpf[i] = cpf[i].toString();
    }

    return cpf;
}

function cpfToInt(cpf){
    for(let i in cpf){
        cpf[i] = parseInt(cpf[i]);
    }

    return cpf;
}

function removeDigitos(cpf, bol){
    if(bol === true){
        return [cpf[9], cpf[10]];
    }
    
    cpf.pop();
    cpf.pop();
    return cpf;
}

function validaCpf(cpf){
    cpf = cpfToInt(cpf);
    
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
            return cpf;
        }else{
            throw new Error('CPF Inválido!');
        }

    }else{
        throw new Error('CPF Inválido!');
    }
}