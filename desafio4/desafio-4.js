/*
Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que
você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele
irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

Para fazer a própria máquina escolher sozinha o número a ser adivinhado, você pode utilizar algo chamado
Math.random().

Para isso, utilize o código:

Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)

Onde, claro, você terá que alterar os valores de mínimo e máximo pelos limites inferior e superior,
respectivamente.
*/

function adivinhe() {
    const numero = Math.floor(Math.random() * (10 - 0 + 1) + 0);

    // usuário chuta um número
    let chute = prompt(`Escolha um número entre 0 e 10. Você tem 3 chances.`);
    let chuteNumerico = parseInt(chute);

    // o número deve estar entre 0 e 10
    if (chuteNumerico > 10 || chuteNumerico < 0) {
        chute = prompt(`Atenção! O número deve estar entre 0 e 10!`);
    } else if (chuteNumerico === numero) {
        let certo = alert(`Uau! Acertou de primeira! O número é ${numero}`);
    }

    // contagem de tentativas
    let tentativas = 1;

    // verificação da resposta e novas tentativas
    while (chuteNumerico !== numero && tentativas < 3) {
        chute = prompt(`Errado! Escolha um novo número entre 0 e 10.`);
        chuteNumerico = parseInt(chute);
        tentativas++

        if (chuteNumerico === numero) {
            certo = alert(`Você adivinhou! O número é ${numero}!`);
            tentativas = 3;
        }
    }
    
    // usuário errou em todas as tentativas
    if (tentativas === 3 && chuteNumerico !== numero) {
        const perdeu = alert(`Não foi dessa vez que você adivinhou o número. A resposta certa era ${numero}! Tente novamente!`);
    }
}