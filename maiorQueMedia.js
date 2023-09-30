/*
Considerando a seguinte lista de valores: [10,12,15,35,40] crie funções para devolver os dados 
conforme solicitado:
Uma função que devolve os valores que são maiores que a média
*/

const lista = [10, 12, 15, 35, 40]

lista.forEach((num) => {
    if (num > lista.reduce((soma, numeroAtual) => soma + numeroAtual, 0) / lista.length) {
        console.log(num)
    }
})