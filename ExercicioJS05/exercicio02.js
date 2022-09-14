

//2- Faça um programa que receba três inteiros e diga qual deles é o maior.

let listaInteiros = [1, 20, 3]
let maiorNumero = listaInteiros[0]
for(let i = 0; i < 3; i++){
    if(listaInteiros[i]> maiorNumero){
        maiorNumero = listaInteiros[i]
    }
}
console.log(`O Maior Número é: ${maiorNumero}
`)