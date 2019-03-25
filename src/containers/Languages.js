import React, { Component } from 'react';
import $ from 'jquery'
import {languages} from '../becks_config';


for(let p=0; p<languages.length; p++){
      var img=new Image();
      img.src="./images/langs/"+languages[p].icon
      languages[p].icon=img;
}


const descripShow={"transform": "translateX(-50%) translateY(0%)","opacity":1 };
const descripHide= {"transform": "translateX(-50%) translateY(10%)","opacity":0 };
const rotatePeriod=20;//20
const angleIncrement=0.001;

class Languages extends Component {
  constructor(props){
    super(props);
    this.state={
      language:"",
      years:"",
      decelerate:false,
      angleRotate:0,
      angleIncrement:angleIncrement,
      langShow:false,
      circleWidth:1,
      style:languages.map((x)=>{return {}})
    }
    this.getPosition=this.getPosition.bind(this)
    this.showLang=this.showLang.bind(this)
    this.hideLang=this.hideLang.bind(this)
    this.rotateCircle=this.rotateCircle.bind(this);
    this.updateDimensions=this.updateDimensions.bind(this);
  }
  rotateCircle(){
    if(this.state.decelerate){
      console.log("Slowing progress", this.state.angleIncrement)
      this.setState({
        angleIncrement: Math.max(0,this.state.angleIncrement-0.00006)
      })
      if(this.state.angleIncrement===0){
        console.log("Clearing angle rotator")
         //clearInterval(this.langRotater);
         this.setState({
           decelerate:false
         })
         return
      }
    }
    this.setState({
      angleRotate: this.state.angleRotate<(1-this.state.angleIncrement) ? (this.state.angleRotate+this.state.angleIncrement) : 0
    });
    this.setState({
      style: languages.map((lang,idx)=> this.getPosition(idx,lang))
    })


  }
  componentDidMount(){
    this.setState({circleWidth: $("#languages #circle").width()})
    $("#languages #circle .logo").each(function(index){
      if($(this).find("img")[0].naturalWidth < $(this).find("img")[0].naturalHeight){
        $(this).find("img").css("height", "70%");
      }else{
          $(this).find("img").css("width", "70%");
      }
    });
    
    var langRotator=setInterval(this.rotateCircle, rotatePeriod)
    this.setState({langRotator:langRotator});

    window.addEventListener("resize", this.updateDimensions)
    this.updateDimensions()
  }

  updateDimensions(){
    this.setState({
      circleWidth: $("#languages #circle").width()
    });
    this.setState({
      style: languages.map((lang,idx)=> this.getPosition(idx,lang))
    })
  }

  componentWillUnmount(){
    clearInterval(this.state.langRotator)
    window.removeEventListener("resize", this.updateDimensions)
  }

  getPosition(index, lang){

    let angle=((index/languages.length) +this.state.angleRotate)*2*Math.PI ;
    var radius=this.state.circleWidth/2;
    var x= radius+radius*Math.cos(angle);
    var y=  (radius- radius*Math.sin(angle));//varies 0-->2radius
    var currentSize=(radius/5)+Math.max(0,radius/10-(y/4));
    var currentBorder=3+ Math.max(0, 2- (4*y/radius));
    
    //console.log(angle, radius, x, y, currentSize, currentBorder)
    return (
      {
        left:x,
        top:y,
        width:currentSize,
        paddingTop: currentSize,
        borderWidth: currentBorder
      }
    )
  }
//this.getPosition(index, lang) 
  showLang(lang){
    return function(){
      this.setState({
        language: lang.lang,
        years:lang.years,
        langShow:true,
        decelerate:true
      })
    }.bind(this)
  }
  hideLang(){
    console.log("Hiding language")
    this.setState({
      decelerate:false,
      langShow:false,
      language:"",
      years:"",
      angleIncrement:angleIncrement
    })

  }

  render() {
    return (
      <div id="languages">
        <div id="lang-descrip" style={this.state.langShow? descripShow: descripHide}>
          <div>
            <h2>{this.state.language}</h2>
            <br></br>
            <h5>{this.state.years}</h5>
          </div>
          <div></div>
        </div>
        <div id="circle"> 
          {languages.map((lang, index)=><div key={"lang"+index} value={index} onMouseLeave={this.hideLang} onMouseEnter={this.showLang(lang)}  className="logo" style={this.state.style[index]}><img key={index+"img" } src={lang.icon.src} /></div>)}
        </div>
      </div>
    );  
  }
}

export default Languages;
