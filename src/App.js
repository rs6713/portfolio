import React, { Component } from 'react';
import About from './containers/About' ;
import Projects from './containers/Projects';
import Experience from './containers/Experience';
import Contact from './containers/Contact';
import Menu from './components/Menu';
import './App.scss'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


const hideAlert={"maxHeight": "0em", "padding": "0 10%"};
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      hideAlert:false
    }
    this.hideAlert=this.hideAlert.bind(this)
    console.log(this.props.location)
  }
  hideAlert(){
    this.setState({hideAlert:true})
  }

  componentDidMount(){
    this.setState({page:"about"}) 
  }
  

  render() {
    return(
      <div id="everything">
        <div id="alert" style={this.state.hideAlert?hideAlert :{}}>
          <img src="./images/icons/watch.png" />
          <span>
            For a limited time only accepting Job offers. <span onClick={function(){this.setState({page:"contact"})}.bind(this)}> Get your Becks today.</span>
          </span>
          <div onClick={this.hideAlert}>
            <span>&times;</span>
          </div>
        </div>
        <Router>
        <Menu />
        
          <Switch>
            
            <Route path="/projects" component={Projects} />
            <Route path="/experience" component={Experience} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={About} />
          </Switch>
        </Router>
      </div>
      
    );
  
  }
}

export default App;

