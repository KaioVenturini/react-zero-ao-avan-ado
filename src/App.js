import React, { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state= {
      nome:'',
      email:'',
      senha:''
    };
    this.cadastrar = this.cadastrar.bind(this);
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
                onChange={(e) => this.setState({senha: e.target.value})} /><br/>

          <label>E-mail:</label> 
          <input type='email' name='email' placeholder='example@gmail.com' 
                onChange={(e) => this.setState({senha: e.target.value})} /><br/>

          <label>Senha:</label> 
          <input type='password' name='senha' placeholder='Digite a sua senha' 
                  onChange={(e) => this.setState({senha: e.target.value})} /><br/>
          <button type='submit'>Cadastrar</button>
        </form>
        
      </div>
    )
  }
}

export default App;
