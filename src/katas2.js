// comece a criar a sua função add na linha abaixo
function add(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero;
    
}
// descomente a linha seguinte para testar sua função
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(primeiroNumero, segundoNumero){
    let output=0
    for(let contador=1; contador <=segundoNumero; contador++){
        output= add(output,primeiroNumero)
    }
    return output;

}

// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

 // comece a criar a sua função power na linha abaixo
function power(primeiroNumero, segundoNumero){
    let output=0
    for(let contador=1; contador = segundoNumero; contador++){
        output= multiply(output,primeiroNumero)
        

    }
    return output;
}

// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(primeiroNumero, segundoNumero){
    let output=0
    for( let contador=0; contador<=segundoNumero; contador++){
        output= pow(output,contador)

    }
    return output;
}

// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
//  */

// crie a função fibonacci

// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
