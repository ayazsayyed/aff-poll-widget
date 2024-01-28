import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const elementsWithDataId = document.querySelectorAll('[data-widget-id]');
elementsWithDataId.forEach(element => {
  const camelize = s => s.replace(/-./g, x => x[1].toUpperCase())
  const allAttributes = element.attributes;
  const config = {}
  for (let i = 0; i < allAttributes.length; i++) {
    const attribute = allAttributes[i];
    config[camelize(attribute.name)] = attribute.value
  }
  const reactElement = ReactDOM.createRoot(element);
  reactElement.render(
    <React.StrictMode>
      <App pollConfig={config} />
    </React.StrictMode>
  );

})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
