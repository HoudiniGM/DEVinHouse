function verificaPalindromo(palavra){
    palavra = palavra.toLowerCase();
    let novaPalavra = '';
    for ( let i = (palavra.length - 1); i >= 0; i-- ){
        novaPalavra += palavra[i];
    }
    return (palavra === novaPalavra) ? true : false;
}

const teste1 = verificaPalindromo("Ana");
const teste2 = verificaPalindromo("julia");

console.log(teste1);
console.log(teste2);