const tabela = document.querySelector('.tabela-js')

axios.get('https://nodejs--mirellatcg.repl.co/funcionarios').then(function(resposta){
    //Pegando dados da requisição (Pegar os dados precisa fazer uma requisição antes)
    getData(resposta.data)
}).catch(function(error){
    console.log(error)
})
//Percorrer array
function getData(dados){
    //Funciona da mesma forma que o forEach, criando uma array function
    dados.map((item)=> {
        tabela.innerHTML += `
            <tr>
                <th scope="row">${item.id}</th>
                <td>${item.nome}</td>
                <td>${item.cargo}</td>
                <td>${item.salario}</td>
                <td><button type="button" class="btn btn-outline-primary"><i class="bi bi-pencil"></i>Editar</button>
                    <button type="button" class="btn btn-outline-danger"><i class="bi bi-trash"></i>Deletar</button>
                </td>
            </tr>

            `
    })
}