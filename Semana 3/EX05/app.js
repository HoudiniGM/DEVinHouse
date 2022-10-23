function somaTudo(...numeros){
    const somatorio = numeros.reduce( (a, b) => a + b, 0 );
    return somatorio;
}

const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);