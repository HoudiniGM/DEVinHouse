async function mediaIdade(name){
    const url = await fetch(`https://api.agify.io/?country_id=BR&name=${name}`)
    const response = url.json()
    console.log(response.age)
}

mediaIdade('ana')