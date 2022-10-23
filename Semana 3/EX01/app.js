function procuraMinMax(array){
    if ( array != null && array.length > 0 ){
        let menorN = array[0], maiorN = array[0];
        for (let i = 0; i < array.length; i++){
            menorN = (menorN > array[i]) ? menorN = array[i] : menorN;
            maiorN = (maiorN < array[i]) ? maiorN = array[i] : maiorN;
            }
        return `MAIOR valor é ${maiorN} e MENOR valor é ${menorN}\n`;
    } else {
            return "Não é possível encontrar\n";
        }
}

console.log(procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]));
console.log(procuraMinMax([]));
console.log(procuraMinMax([1]));
console.log(procuraMinMax([1, -1]));
console.log(procuraMinMax(null));
console.log(procuraMinMax([-2,-2,-2,-2]));
console.log(procuraMinMax([20,10, 30]));