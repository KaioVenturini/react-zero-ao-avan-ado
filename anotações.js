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

///////////////////////////////////////

/* React Hooks

	Inicialmente, os react hooks, foram criados para reduzir o uso de
linhas no codigo, deixando-o menos verboso, comprido etc...mas também
contendo o uso de states ou props.
	Antes dos hooks, se usava class components, com os hooks, é possivel
o uso de funcion(){};

useState do Hooks


Vamos ao exemplo:

import React, { useState } from 'react';
 
function App() {
 
  // Declarar uma nova variável de state, na qual chamaremos de "contador"
  const [contador, setContador] = useState(0);
 
  return (
    <div>
      <p>You clicked {contador} times</p>
      <button onClick={() => setContador(contador + 1)}>
          Aumentar
      </button>
    </div>
  );
}


Vamos destrinchar isso aqui:

 const [contador, setContador] = useState(0);
- Criamos um estado chamado de contador e onde o valor padrão ele começa com 0

- Quando queremos alterar o valor do state contador nós usamos o setContador()



- Como no exemplo acima quando você clicar no botão ele vai mudar o valor do contador para o valor que ele tem + 1 (ou seja se o valor começa em 0 vai ser 0 + 1 e 
    quando o valor tiver em 1 vai ser 1 + 1 e por ai em diante).

/////////////////////////////////////////////

useEffect: basicamente, ele substitui todos os ciclos de vida dos components, segundo o curso, utilizando-o como o componentDidMounth ou DidUpdate etc...,.
Ele recebe 2 paramentros, a função (pode ser uma arrow funtion), e depois chama os estados dentro das arrays.

useMemo: Uma das possibilidades com o React Hooks é o useMemo, que utiliza uma técnica já conhecida chamada memoization, que consiste em guardar o valor de 
retorno de uma função a partir dos valores de entrada (Parâmetros). Ou seja, se uma função de soma recebe os parâmetros 2 e 3 e retorna 5, esses valores 
serão armazenados e, quando essa função for chamada com os mesmos parâmetros, ela não precisará refazer o cálculo para obter o valor de retorno, 
já que este estará armazenado.

useCallback: diferente do memo que retorna um valor unico, o callback pode retornar uma função inteira, e pode servir como a função handleAdd, que esta nesse
projeto. Quando chamada pelo input a handleAdd funciona deletando a função antiga e recria com os novos itens, gastanto muito processamento. Com o callback ele
so recriará se for necessario, ou haver uma grande mudança no parametros.
    Para melhor definição utiza-se const, como o codigo exemplo no App.js.



*/



