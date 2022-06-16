import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function primeiroJSX(){
  return(
    <div>
      <h1>Andre - Hello World</h1>
    </div>
  )
}
function sum(a,b){
  return a+b
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div className='App'>
    {primeiroJSX()}
    <h2>{sum(10,15)}</h2>
  </div>
);
// Renderizacao
// const element = <h1>Hello, world</h1>;
// root.render(element);
function renderizacao(){
  const element=(
    <div>
      <h1>Hello World2</h1>
      <h2>Data{new Date().toLocaleDateString()}</h2>
    </div>
  );
  root.render(element);
}
setInterval(renderizacao,1000)



reportWebVitals();
