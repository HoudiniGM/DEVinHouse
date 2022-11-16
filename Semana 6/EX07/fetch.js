async function valorBitcoin(){
    const api = await fetch('https://api.coincap.io/v2/assets/bitcoin');
    const object = await api.json();
    console.log(`O preço do Bitcoin ${object.data.symbol} em dólares hoje é $${object.data.priceUsd}`)
}

valorBitcoin()