import React from 'react';
import ReactDOM from 'react-dom';
import NameForm from './components/NameForm'; 
import App from './components/App'


ReactDOM.render(
  //Keys são obrigatorias para identificar componentes e suas modificações Uma “key” (chave) é um atributo de string especial que você precisa incluir quando estiver criando arrays de elementos. Chaves ajudam o React a identificar quais items foram alterados, quais foram adicionados, ou quais foram removidos. Chaves devem ser dadas a elementos em um array para dar a estes elementos uma identidade estável.
    [<App key="App"/>, <NameForm key="Formulario"/>], 
    
  document.getElementById('root')
);

