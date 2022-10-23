function concatena(array1, array2){
    novoArray = [...array1, ...array2];
    return novoArray;
}

novoArray = concatena([1, 2, 3], [4, 5, 6]);
console.log(novoArray);

