import React, { Component } from 'react';
import $ from 'jquery'
//import logo from './logo.svg';

var languages=[
  {
      icon:'html.png',
      lang:"HTML",
      years:"6 Years - 2012/18",
      projects:["Multiple MEAN Stack Websites"]
  },
  {
      icon:'css.png',
      lang:"CSS",
      years:"6 Years - 2012/18",
      projects:["Multiple MEAN Stack Websites"]
  },
  {
      icon:'js.png',
      lang:"JavaScript",
      years:"3 Years - 2015/18",
      projects:["Multiple MEAN Stack Websites"]
  },
  {
      icon:'angular.png',
      lang:"Angular",
      years:"1 Year - 2017/18",
      projects:[]
  },
  {
      icon:'node.png',
      lang:"Node",
      years:"2 Years - 2016/18",
      projects:[]
  },
  {
      icon:'fsharp.png',
      lang:"F Sharp",
      years:"1 Year - 2016/17",
      projects:[]
  },
  {
      icon:'c++.png',
      lang:"C++",
      years:"2 Years - 2014/16",
      projects:["High performance Computing Concurrency", "Compiler", "Suduko Solver"]
  },
  {
      icon:'python.png',
      lang:"Python",
      years:"3 Years - 2015/18",
      projects:[]
  },
  {
      icon:'tensorflow.png',
      lang:"TensorFlow",
      years:"1 Year - 2017/18",
      projects:[]
  }
];


for(let p=0; p<languages.length; p++){
      var img=new Image();
      img.src="../images/languages/"+languages[p].icon
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
      circleWidth:0,
      style:[languages.map((x)=>{})]
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

    //clearInterval(this.langRotater)
    //this.langRotater=setInterval(this.rotateCircle, rotatePeriod);
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
          {languages.map((lang, index)=><div key={index} value={index} onMouseLeave={this.hideLang} onMouseEnter={this.showLang(lang)}  className="logo" style={this.state.style[index]}><img alt={"Language:"+ lang.lang} src={lang.icon.src} /></div>)}
        </div>
      </div>
    );  
  }
}

export default Languages;
/*
$("#languages #circle .logo").mouseover(function(){
  decelerate=true;

  var langIndex=parseInt($(this).attr('value'));
  $("#languages #lang-descrip div:first h2:first-child").text(languages[langIndex].lang);
  $("#languages #lang-descrip div:first h5:last-child").text(languages[langIndex].years);
  $("#languages #lang-descrip > div:last-child").empty();
  if(languages[langIndex].projects.length>0){

  }

  $("#languages #lang-descrip").css({"transform": "translateX(-50%) translateY(0%)","opacity":1 });
  
});
*/
/*
$("#languages #circle .logo").mouseout(function(){
  //console.log("Logo out")
  angleIncrement=0.001;
  decelerate=false;
  clearInterval(languagesRotater)
  languagesRotater=setInterval(rotateCircle, 20);
  $("#languages #lang-descrip").css({"transform": "translateX(-50%) translateY(10%)","opacity":0 })
});   




var rotateCircle=function(){
  
   $("#languages #circle .logo").each(function(index){

       if($(this).find("img")[0].naturalWidth < $(this).find("img")[0].naturalHeight){
           $(this).find("img").css("height", "70%");
           //console.log("width smaller")
       }else{
           //console.log($(this).find("img")[0].naturalWidth);
           //console.log($(this).find("img")[0].clientWidth, $(this).find("img").clientHeight,  $(this).find("img").width(),  $(this).find("img").outerWidth())
           //console.log("height smaller",$(this).find("img").width(),$(this).find("img").height(), index )
           $(this).find("img").css("width", "70%");
       }

       var angle=((index/languages.length) +angleRotate)*2*Math.PI ;
       var radius=$("#languages #circle").width()/2;
       //$(this).css("left", radius);
       var x= radius+radius*Math.cos(angle);
       var y=  (radius- radius*Math.sin(angle));//varies 0-->2radius
       $(this).css("left", x);
       $(this).css("top", y);
       var currentSize=(radius/5)+Math.max(0,radius/10-(y/4));
       var currentBorder=3+ Math.max(0, 2- (4*y/radius));
       $(this).width(currentSize);
       $(this).css("padding-top", currentSize);
       $(this).css("border-width", currentBorder);
   });
   if(decelerate){
       angleIncrement-=0.00006;
       //console.log("Decrease angle increment:", angleIncrement)
       if(angleIncrement<=0){
          //console.log("Clear interval")
          clearInterval(languagesRotater);
          decelerate=false;
          return
       }
   }

   //20sec rotate, 100 rotates , move 0.01 each time
   // console.log("rotate by", angleIncrement)
   angleRotate= angleRotate<(1-angleIncrement) ? (angleRotate+angleIncrement) : 0;


};

var languagesRotater=setInterval(rotateCircle, 20);

*/