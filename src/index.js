import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar, Footer } from './components/Layout';


function App() {
  return (
   <>
    <Navbar/>
    <div>
        <h2>welcome to our website</h2>
        <hr/>
        <p>This website is created using React JS.<br/>
            It is a single Page Application (SPA).<br/>
            This is a function component.
        </p>
      </div>
      <Footer />
      </>
      )
  
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


