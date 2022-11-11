function sleep(num){
    const promise = new Promise( 
        resolve => {
            setTimeout( ()=>resolve('Deu certo?'), 3000)
        }
    )
    return promise
}

sleep(2).then( res => console.log(res) )