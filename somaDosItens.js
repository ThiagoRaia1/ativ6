/*
Considerando a seguinte lista de valores: [10,12,15,35,40] crie funções para devolver os dados 
conforme solicitado:
Uma função que devolva o valor da soma dos itens da lista
*/

const lista = [10, 12, 15, 35, 40]

console.log(lista.reduce((soma, numeroAtual) => soma + numeroAtual, 0))