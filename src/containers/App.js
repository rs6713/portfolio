/*
Is react only single page documents?
data reactive?
incorporate jade, angular?
multiple page links?
scss, sass?
*/

//My favourite books, my interests

import React, { Component } from 'react';
import About from './About' ;
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Menu from '../components/Menu';
import './App.css'
//import logo from './logo.svg';


const hideAlert={"maxHeight": "0em", "padding": "0 10%"};
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      page: "about",
      hideAlert:false
    }
    this.changePage=this.changePage.bind(this)
    this.hideAlert=this.hideAlert.bind(this)
  }
  hideAlert(){
    this.setState({hideAlert:true})
  }
  changePage(newPage){
    
    return function(){
      console.log("Switching main page content", newPage)
      this.setState({
        page:newPage
      });
    }.bind(this)
  }
  componentDidMount(){
    this.setState({page:"about"}) 
  }
  

  render() {
    return(
      <div id="everything">
        <div id="alert" style={this.state.hideAlert?hideAlert :{}}>
          <img src="./images/watch.png" />
          <span>
            For a limited time only accepting Job offers. <span onClick={function(){this.setState({page:"contact"})}.bind(this)}> Get your Becks today.</span>
          </span>
          <div onClick={this.hideAlert}>
            <span>&times;</span>
          </div>
        </div>
        <Menu changePage={this.changePage} currentPage={this.state.page}/>
        { this.state.page== "about" && <About />}
        { this.state.page== "projects" && <Projects />}
        { this.state.page== "experience" && <Experience />}
        { this.state.page== "contact" && <Contact />}
      </div>
      
    );
  
  }
}

export default App;

/*
    switch(this.state.page){
      case "about":
        return (<About changePage={this.changePage} currentPage={this.state.page}/>);
        break
      case "projects":
        return (<Projects changePage={this.changePage} currentPage={this.state.page}/>);
        break
      case "experience":
        return (<Experience changePage={this.changePage} currentPage={this.state.page}/>);
        break
      case "contact":
        return (<Contact changePage={this.changePage} currentPage={this.state.page}/>);
        break
      default:
        return (<About changePage={this.changePage} currentPage={this.state.page}/>);
    }
*/

