const uneDobraRetorna = (array, ...rest) => {
    rest = rest.map( (item) => item * 2 );
    let novaArray = [...array, ...rest];
    return novaArray;
};

const r1 = uneDobraRetorna([1, 2, 3], 4, 4);
console.log(r1);

const r2 = uneDobraRetorna([2], 10, 4, 8) ;
console.log(r2);

const r3 = uneDobraRetorna([6, 8]);
console.log(r3);