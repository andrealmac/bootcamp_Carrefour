import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//importando o arquivo Button
// import Button from './Button'

// function primeiroJSX(){
//   return(
//     <div>
//       <h1>Andre - Hello World</h1>
//     </div>
//   )
// }
// function sum(a,b){
//   return(a+b) 
// }

// function soma(a,b){
//   alert(a+b) 
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <div className='App'>
//      {primeiroJSX()}
//      <h2>{sum(10,15)}</h2>
     
//   </div>
//  );


// // Renderizacao
// // const element = <h1>Hello, world</h1>;
// // root.render(element);
// function renderizacao(){
//   const element=(
//     <div>
//       <h1>Hello World2</h1>
//       <h2>Data{new Date().toLocaleDateString()}</h2>

//       {/* componente e pode ter quantos quiser*/}
//       <Button onClick={()=> soma(10,20)} name='Andre' />

//       </div>
// );
//   root.render(element);
// }
// setInterval(renderizacao,1000)
// reportWebVitals();

//ESTADO E CICLO DE VIDA
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clock:1000, copo:'agua'}
  }
  alterarCopo = () => {
    this.setState({
      copo:'refrigerante'
    })
  }
  render() {
    const {clock, copo} = this.state
    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={()=>this.alterarCopo()}>{copo}</button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);