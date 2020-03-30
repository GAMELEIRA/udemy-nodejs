/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:30/03/2020
 * HORA:09:58
 * FINALIDADE DO MODULO: SIMULAR UMA CALCULADORA
 */

const calculadora = require('./calculadora.js');

let imprimirResultado = (a, b, operacao) => {

    switch (operacao) {

        case '+':
            console.log(`${a} ${operacao} ${b} = ${calculadora.soma(a, b)}`);
            break;
        case '*':
            console.log(`${a} ${operacao} ${b} = ${calculadora.multiplicacao(a, b)}`);
            break;
        case '/':
            console.log(`${a} ${operacao} ${b} = ${calculadora.divisao(a, b)}`);
            break;
        case '-':
            console.log(`${a} ${operacao} ${b} = ${calculadora.subtracao(a, b)}`);
            break;
    }

}

let chamarOperacao = (a, b, operacao) => {

    switch (operacao) {

        case 'soma':
            imprimirResultado(a, b, '+');
            break;
        case 'multiplicacao':
            imprimirResultado(a, b, '*');
            break;
        case 'divisao':
            imprimirResultado(a, b, '/');
            break;
        case 'subtracao':
            imprimirResultado(a, b, '-');
            break;
    }

};

chamarOperacao(1, 2, 'soma');

chamarOperacao(1, 2, 'soma');

chamarOperacao(1, 2, 'multiplicacao');

chamarOperacao(1, 2, 'divisao');

chamarOperacao(1, 2, 'subtracao');