import React from 'react';
import Header from './component/header';
import Headline from './component/headline'
import './App.css';
const tempArr =[ {
	fName: 'toto',
	lName: 'to',
	email: 'rigoulet@utb.fr',
	age : 28,
	isOnline : true
}];

function App() {
  return (
    <div className="App">
    	<Header />
    	<section className="main">
    		<Headline header='Posts' desc="Click the button to die !" tempArr={tempArr} /> 
    	</section>
    </div>
  );
}

export default App;
