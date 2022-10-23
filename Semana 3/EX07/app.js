const pessoa = {
    nome: 'Ada',
    idade: 36,
    profissao: 'matemática'
};

//-----------------------------------------------------------------

// //*** DESTRUCTING VERBOSO
// function destruct(pessoa){
//       let {nome, idade, profissao} = pessoa;
//       return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
//     }

//-----------------------------------------------------------------

// //*** DESTRUCTING DIRETAMENTE NOS PARÂMETROS ***
// function destruct( {nome, idade, profissao} = pessoa ){
//     return `Esta é ${nome}, tem ${idade} e é ${profissao}.`;
// }

//-----------------------------------------------------------------

//*** DESTRUCTING COM UMA ARROW FUNCTION ***
let destruct = ( {nome, idade, profissao} = pessoa ) => 
    `Esta é ${nome}, tem ${idade} e é ${profissao}`;

//-----------------------------------------------------------------

console.log( destruct(pessoa) );
