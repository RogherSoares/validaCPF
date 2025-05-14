function validarCPF (cpf){
    cpf = cpf.replace(/[^\d]+/g,'');
    
    // Verifica se o CPF tem 11 dígitos e não é uma sequência de números iguais
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }
    
}