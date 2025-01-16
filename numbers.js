const mixedNumbers = [1, 2, 3, 4, 5, 6]

const doubleNumbers = mixedNumbers.map((item) =>  item * 2)

const parNumber = mixedNumbers.filter ((number) => number % 2 === 0)

const soma = parNumber.reduce ((acc, number) => acc + number)

console.log("Numeros dobrados: " + doubleNumbers + "; Numeros pares: " + parNumber + "; Soma dos numeros pares: " + soma)