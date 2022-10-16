

const times = [
    {
        imagem: "/Img/sh_bandeira-do-brasil_104281997.jpg",
        nome: "Brasil",
        participacoesEmCopas: 20,
        titulos: 5,
        principaisConquistas: [`<br>Suécia 1958 <br> Chile1962<br> México 1970<br> EUA 1994<br> Coreia e japão 2002<br>`],
        acesse: `<a href=https://www.cbf.com.br/>CBF - Confederação Brasileira de Futebol</a>`
    },

    {
        imagem: "/Img/logoAlemnha.jpg",
        nome: "Alemanha",
        participacoesEmCopas: 18,
        titulos: 4,
        principaisConquistas: [`<br> Suíça 1954<br> Alemanha Ocidental 1974<br> Itália 1990<br> Brasil 2014<br>`],
        acesse: `<a href=https://www.dfb.de/en/en-start//>DFB - Deutscher Fußball-Bund e.V.</a>`

    },
    {
        imagem: "/Img/bandeira-da-franca-paises-140x90-cm-D_NQ_NP_922601-MLB20349517311_072015-F.jpg",
        nome: "França",
        participacoesEmCopas: 5,
        titulos: 2,
        principaisConquistas: [`<br> França 1998<br> Russia 2018<br>`],
        acesse: `<a href=https://www.fff.fr//>Fédération Française de Football</a>`
    }
]

function pesquisarSelecao(arrayDeObj, valorString) {
    let objARetornar = {};

    for (let i = 0; i < arrayDeObj.length; i++) {

        if (arrayDeObj[i].nome === valorString) {
                      
            objARetornar = { ...arrayDeObj[i]}; 
        }
    }
    if (objARetornar.nome!== valorString) {
        alert("Seleção não encontrada")
    } else {
        return objARetornar
    }
}


const listaTimes = document.createElement("section")

const container = document.getElementById("container")

container.insertAdjacentElement("beforeend", listaTimes)

listaTimes.setAttribute("id", "lista-times");

const elementoDeLista = document.getElementById("lista-times")


for (let i = 0; i < times.length; i++) {

    elementoDeLista.innerHTML += `<figure><img class="tamanhoImg" src="${times[i].imagem}">
    <figcaption>${times[i].nome}<br>
    Participações em copas: ${times[i].participacoesEmCopas}<br>
    Titulos: ${times[i].titulos}<br>
    Principais conquistas: ${times[i].principaisConquistas}
    Acesse: ${times[i].acesse}</figcaption></figure>`
}




function buscaSelecao() {
   
    const elementoDeCampo = document.getElementById("campo");

    const textoBuscar = elementoDeCampo.value;

    const selecaoRetornada = pesquisarSelecao(times, textoBuscar)

    if (selecaoRetornada.nome) {
        const elementoDeLista = document.getElementById("lista-times")
        elementoDeLista.innerHTML = `<figure ><img class="tamanhoImg" src="${selecaoRetornada.imagem}"><br>
        <figcaption> ${selecaoRetornada.nome}<br>
            Participações em copas: ${selecaoRetornada.participacoesEmCopas}<br>
            Titulos: ${selecaoRetornada.titulos}<br>
            Principais conquistas: ${selecaoRetornada.principaisConquistas}
            Acesse: ${selecaoRetornada.acesse}</figcaption></figure>
            `
    } 

}