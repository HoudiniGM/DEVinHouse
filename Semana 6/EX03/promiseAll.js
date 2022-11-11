function aprovarDadosCadastrais( cliente ){

    const promise = new Promise(
        (resolve, reject) => {
            (cliente.cpf === 11111111111) ? resolve(true) : reject(false)
        } 
    )

    return promise
}

function aprovarValorSolicitado( cliente, valor ){

    const promise = new Promise(
        (resolve, reject) => {
            (cliente.margem >= valor) ? resolve(true) : reject(false)
        }
    )

    return promise
}

const cliente = { cpf: 11111111111, nome: 'Calleri', margem: 1000.0 };
const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0);

Promise.all([aprovacaoCadastro, aprovacaoValor])
.then( ()=> console.log('APROVADO') )
.catch( ()=> console.log('REPROVADO') )
.finally( ()=> console.log('\nFim do Processamento') )