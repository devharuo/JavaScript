//2- Ler 10 números e imprimir quantos são pares e quantos são ímpares. (FOR)

let listaNumerica = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let qtdPares = 0
let qtdImpares = 0
for(let i = 0; i < 10; i++){
    if(listaNumerica[i]%2 == 0){
        qtdPares++
        continue
    }
    qtdImpares++
}
console.log(`qtdPares: ${qtdPares}`)
console.log(`qtdImpares: ${qtdImpares}`)