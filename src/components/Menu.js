import React from 'react';
import '../containers/App.css';
import $ from 'jquery'
import '../containers/App.css';
//passed currentPage, changePage

class Menu extends React.Component {
    constructor(props){
      super(props)
      this.state={
        currentpage:props.currentPage,
        barBorder:8,
        menuTabsPos:{"about":[-100,0], "experience":[0,0], "contact":[0,0], "projects":[0,0]}
      }
     
      this.changePage=props.changePage
      this.updateDimensions=this.updateDimensions.bind(this)
    }
    componentDidMount(){
      window.addEventListener("resize", this.updateDimensions);
      window.addEventListener("load", this.updateDimensions)
      this.updateDimensions()
      console.log(this.state.currentpage)
    }
    componentWillReceiveProps(nextprops){
      $(".header #nav-bar").css({"transition": "0.3s"})
      this.setState({currentpage:nextprops.currentPage})
      //this.updateDimensions()
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
      console.log(menuTabsPos)
      this.setState({menuTabsPos:menuTabsPos})
      console.log(this.state.menuTabsPos, this.state.currentpage)
    }

    render(){
      var navStyle={
        width: this.state.menuTabsPos[this.state.currentpage][1],
        left:this.state.menuTabsPos[this.state.currentpage][0],
      }
      console.log("Rendering",navStyle, this.state.currentpage)
      return (
        <div className="header" style={this.state.currentpage!=="projects"? {boxShadow:" 0px 1px 5px #9E9E9E"}: {}}>
          <div id="nav-bar" style={navStyle}></div>
          <span onClick={this.changePage("about")} name="about">About</span>         
          <span onClick={this.changePage("projects")} name="projects">Projects</span>
          <span onClick={this.changePage("experience")} name="experience">Experience</span>
          <span onClick={this.changePage("contact")} name="contact">Contact</span>
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

export default Menu;

/*
$(window).resize(function(){
  var temp=$("#nav-bar").css("transition")
  $("#nav-bar").css("transition", "all 0s ease 0s");
  
  $("#nav-bar").css("width", $(".header span:eq("+ currentPage +")").width()+16)
  $("#nav-bar").css("left", $(".header span:eq("+ currentPage +")").offset().left-8);
  $("#nav-bar")[0].offsetHeight; 
  $("#nav-bar").css("transition", temp);
});
*/

