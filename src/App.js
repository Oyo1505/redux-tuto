import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './App.css';
const tempArr =[ {
	fName: 'toto',
	lName: 'to',
	email: 'rigoulet@utb.fr',
	age : 28,
	isOnline : true
}];


const initialState = {
  hideBtn: false
}


class  App extends Component {
  constructor(props){
    super(props);

    this.state= {...initialState}
  }

  fetch = () => {
    this.props.fetchPosts();
    this.exampleMethode_updatesState();
  }

  exampleMethode_updatesState = () => {
    const {hideBtn}  = this.state
    this.setState({
      hideBtn : !hideBtn
    });
  }
  exampleMethode_returnaValue = (number) => {
    return number + 1;
  }
  render(){
  const { posts } = this.props;
  const {hideBtn}  = this.state;
  const configButton = {
    buttonText: 'Get posts',
    emitEvent: this.fetch
  }
 
  return (
    <div className="App" data-test="appComponent">
    	<Header />
    	<section className="main">
    		<Headline header='Posts' desc="Click the button to die !" tempArr={tempArr} /> 
        {!hideBtn && 
          <SharedButton {...configButton} />
        }
        
        { posts.length > 0 &&

          <div>
            {posts.map((post, index)=> {
              const {title, body} = post;
              const configListItem = {
                title,
                desc : body
              };
              return <ListItem key={index} {...configListItem} />
            })}
          </div>

        }
    	</section>
    </div>
   );
  };  
}

const mapStateToProps = state => {
  return { posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(App);
