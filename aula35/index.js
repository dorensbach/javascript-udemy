// aula 35
// break e continue
// 05.05.2022

// continue = em um laço pula para a próxima iteração
// break = para de executar o laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero%2 === 0) {
        continue;
    }

    if (numero === 7) {
        console.log('Aqui é o 7, saindo do for.')
        break;
    }

    console.log(numero);
}
