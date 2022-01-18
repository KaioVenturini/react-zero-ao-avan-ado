/*HTML

// ON CLICK PARA WINDOW //

window.location.href='destino'

para aplicar a todo o documento utiliza-se o 'document' no lugar do 'window'.


// Alterar o conteudo de uma div com getELementById //

ex: 

<div id="area">
	Bem vindo...
</div>

<br></br>

<button onclick="document.getElementById('area').innerHTML =
'Bem vindo' + prompt('Qual o seu nome?'); ">Entrar</button>*/

////////////////////////////////////////////////////////

// importação de imagens, codeLine:

/* para importar uma imagem usa-se: <img src={require('caminho/destinatário.png')}/>  */

////////////////////////////////////////////////////////
//----------------------------------
/*Alterações atravez do JavaScript


*fazer o link do script, <script src='destino'></script>

function entrar(){
	var area = document.getElementById('area');
	var texto = prompt('Digite seu nome!');
	
	area.innerHTML = texto; 
}

Uso das condições

ex:

function entrar(){
	var area = document.getElementById('area');
	var texto = prompt('Digite seu nome!');

	if(texto =='' || texto ==null){
		alert('Digite seu nome novamente!');
		area.innerHTML = 'Bem vindo...';
	}else{
		area.innerHTML = 'Bem vindo ' + texto;
	}
	area.innerHTML = texto; 
}

resumindo, se o campo preenchido estiver vazio(null), o sistema informará
'digite o seu nome novamente')  e se ele for igual a null, ele faz a mesma
coisa.

segunda forma:

<div id="area">
	Bem vindo...
</div>

----------->

function entrar2(nome){

	var area = document.getElementById('area2');
	var texto = prompt('Digite seu sobrenome!');
	area.innerHTML = nome + "" + texto;
}

---------------------------------------*/

/*
Arrays

uma array exibe o conteudo em forma de lista no console,
para utiliza-la, usa-se os conteudos dentro de colchetes.

ex:

var lista ["Kaio", "Nicolas", 12]

a contagem desses itens inicia do zero ao ...

OBS(){

	para exigir quantos itens tem na array, basta digitar o nome da
	função ou variavel e adicionar o '.lenght'.

	para exibir um item especifico da array, usa-se o nome da var ou function
	e dentro de colchetes informar a posição numerica do item. como listar[0]
	que no caso é o Kaio.
}

para a MANIPULAÇÂO da array, é utilizado o lista.join("".)

ex:

lista.join("/")

desta forma, no intervalo dos conteudos, ele ira colocar uma barra
para dividi-los.

lista.join("/")
	"Kaio/ Nicolas/ 12"

para Deletar ultimo item da lista, usa lista.pop(), se for o primeiro é 
lista.shift().


Para ALTERAR um conteudo da array é utilizado desta forma:

lista[0], que é kaio

posso passar lista[0] = "Kaio Nunes", que o conteudo se tona Kaio Nunes invez
de Kaio.
//           //
Uso de Loops

while, for

"switch"
*/


/*
WEB STORAGE

comandos para utilizar:

cadastrar item

localStorage.getItem("nome", "Kaio")
		ou
localStorage.nome = "Kaio"

remover item

localStorage.removeItem("nome")

para o SESSIONSTORAGE, usa-se a mesma coisa, com o session na frente.
*/

//////////////////////////////////

/*
Spread Operator

um tipo de organizador de variaveis, nele é possivel a junção de
variavel ou objetos.

Rest Operator

Resumindamente, o rest Operator, funciona como uma tratamento do quanto de dados que
uma variavel pode user.
*/

///////////////////////// React //////////////////////////
/*
stateless component é um componente que nao tem ciclo de vida ou estado,
ele so exibe o que é passado manualmente.

statefull component, é um componente que pode sofrer alterações em tempo real,
com o uso dos states


Uso de props

EX1:

const Hello = (props) => {
    return(
        <>
            <h3>Olá {props.nome}</h3>
        </>
    )
}
export default function App(){
    return(
        <div>
            <Hello nome='Kaio'/>
        </div>
    )
}


class component, nesse component é possivel passar as props pelas class, com
isso é possivel ter props independentes em cada classe.

import React, {Component} from "react";

class Equipe extends Component{
    render(){
        return(
            <>
                <h3>Olá {this.props.name}</h3>
            </>
        )
    }
}

obs, nao esquecer de importar o component, do react

Uso dos States

Diferentemente das props que sao estaticas, ja os states sao dinamicos. Geralmente os 
states sao usados para alterações.*/



// CICLO DE VIDA //

/*
Constructor: quando o component(App, index, etc...) é chamado em algum lugar, o constructor
é o primeiro ciclo de vida a ser carregado. Após carregar todo o constructor, o app carrega todas as
states.



componentDidMounth: depois que o component é montado, o didMount pode rodar o que esta dentro dessa
função, como consumir uma api, algum tipo de intervalo como um relogio. Esse ciclo de vida so é rodado
uma vez, só quando o componente é montado, ele so rodara se o componente for montado denovo na tela.


componentDidUpdate: toda vez que um componente,props ou state for atualizado, esse ciclo pode interagir 
com o app com algo, da mesma forma que o did mounth, agindo como uma função. Resumidamente, quando algo 
for atualizado ele faz alguma coisa.

shouldComponentUptade: esse ciclo retorna um true e um false, como se perguntasse se algum componente
deveria ser atualizado, ou ate mesmo uma mudança de state.*/

/* função de aleatoriedade: pode se usar, Math.flor(Math.randon() * função, state, string etc..). após
a definição do que usar, coloca-se .length  */







