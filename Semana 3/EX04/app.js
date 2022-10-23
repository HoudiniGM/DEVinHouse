function mesclaObjetos(obj1, obj2){
    novoObj = {...obj1, ...obj2};
    return novoObj;
}

const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };
const novoObjeto = mesclaObjetos(objUm, objDois);
console.log(novoObjeto);