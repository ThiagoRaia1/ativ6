/*
Considerando a seguinte lista de valores: [10,12,15,35,40] crie funções para devolver os dados 
conforme solicitado:
Uma função que devolva todos os valores que são menores que 20
*/

const lista = [10, 12, 15, 35, 40]

lista.forEach((num) => {
    if (num < 20) {
        console.log(num)
    }
})