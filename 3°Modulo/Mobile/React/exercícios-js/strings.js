const escola = "Cod3r"

console.log(escola.charArt(4)) //me retorna a letra da quarta posição
console.log(escola.charAt(5)) // me retorna vazio. JS retorna percentual de erros menor

//para colocar string pode usar "" '' ou ``

console.log(escola.charCodeAt(3)) // retorna valor da tabela UNICODE
console.log(escola.indexOf('o')) // inidice associado a variavel escola

console.log(escola.substring(1)) // inclui indice 1 até o final
console.log(escola.substring(0,3)) // indice 0 a 2
console.log('Escola' .concat(escola).concat("!")) //Escola é um valor do tipo literal, ou seja posso passar direto sem variavel 
// poderia usar console.log ('Escola' + escola + "!")
// + no contexto númerico vai somar m as no string concatenar
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) // regex pra substituir todos os digitos numericos dentro do texto por e

console.log('Ana, Maria, Pedro' .split(',')) // conversão para array. Pode ser usado regex /,/