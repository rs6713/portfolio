import React from 'react';
import '../App.css';
import $ from 'jquery'
import '../App.css';
import { Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Menu extends React.Component {
    constructor(props){
      super(props)
      this.state={
        barBorder:8,
        menuTabsPos:{"":[-100,0], "experience":[0,0], "contact":[0,0], "projects":[0,0]}
      }
      this.updateDimensions=this.updateDimensions.bind(this)
      console.log(window.location.pathname.slice(1))
    }

    componentDidMount(){
      window.addEventListener("resize", this.updateDimensions);
      window.addEventListener("load", this.updateDimensions)
      this.updateDimensions()
    }

  
    componentWillUnmount(){
      window.removeEventListener("resize", this.updateDimensions);
      window.removeEventListener("load", this.updateDimensions);
    }
    updateDimensions(){
     
      var barBorder=this.state.barBorder
      let menuTabsPos={}
      $("#nav-bar").css({"transition": "0s"})
      $(".header >span").each(function(index){
        console.log($(this).attr("name"), " : ", $(this).offset().left,$(this).position().left, $(this).width(), barBorder, $(this).css("margin-left"))
        menuTabsPos[$(this).attr("name")]=[$(this).position().left-barBorder+parseInt($(this).css("margin-left")), $(this).width()+barBorder*2]
      });
      this.setState({menuTabsPos:menuTabsPos})
    }

    render(){
      var page = this.props.location.pathname.split('/').slice(this.props.location.pathname.split('/').length-1)
      console.log(this.props.location.pathname, this.state.menuTabsPos)
      var navStyle={
        width: this.state.menuTabsPos[page][1],
        left:this.state.menuTabsPos[page][0],
      }
      console.log("Rendering",navStyle, this.state.currentpage)
      return (
        <div className="header" style={page!=="projects"? {boxShadow:" 0px 1px 5px #9E9E9E"}: {}}>
          <div id="nav-bar" style={navStyle}></div>
          <span name=""><Link to="/">About </Link>   </span>     
          <span name="projects"><Link to="/projects">Projects</Link></span>
          <span name="experience"><Link to="/experience" >Experience</Link></span>
          <span name="contact"><Link to="/contact" >Contact</Link></span>
          <a href="./CV.pdf" download>
            <div>
              <span>CV</span>
                <img src="./images/icons/download.png" />
            </div>
          </a>
        </div>
      )
    }
}

export default withRouter(Menu);


