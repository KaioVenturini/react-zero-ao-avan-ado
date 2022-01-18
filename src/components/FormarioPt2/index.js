import React, { Component } from 'react';
import './App.css';

class Formulario extends Component{

  constructor(props){
    super(props);
    this.state= {
      container:{
        nome:'',
        email:'',
        senha:''
      }

    };

    this.dadosContainer = this.dadosContainer.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
  }

  dadosContainer(e){
    let container = this.state.container;
    container[e.target.name] = e.target.value;
    this.setState({container: container})
  }

  cadastrar(){
    alert('cadastrou!')
  }

  render(){
    return(
      <div>
        <h3>Teste de Formulario</h3>

        <form name='form-input' onSubmit={this.cadastrar}>

          <label>Nome:</label> 
          <input type='text' name='nome' placeholder='Digite o seu nome' 
                onChange={this.dadosContainer} /><br/>

          <label>E-mail:</label> 
          <input type='email' name='email' placeholder='example@gmail.com' 
                onChange={this.dadosContainer} /><br/>

          <label>Senha:</label> 
          <input type='password' name='senha' placeholder='Digite a sua senha' 
                  onChange={this.dadosContainer} /><br/>
          <button type='submit'>Cadastrar</button>
        </form>
        <div id='callback'>
          <p>{this.state.container.nome}</p>
        </div>
        
      </div>
    )
  }
}

export default Formulario;