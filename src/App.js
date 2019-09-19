import React from 'react';
import Header from './component/header';
import Headline from './component/headline'
import './App.css';

function App() {
  return (
    <div className="App">
    	<Header />
    	<section className="main">
    		<Headline header='Posts' desc="Click the button to die !" /> 
    	</section>
    </div>
  );
}

export default App;
