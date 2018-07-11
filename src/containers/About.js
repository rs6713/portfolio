import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Languages from './Languages';
//import logo from './logo.svg';
import './App.css';
import Chart from 'chart.js' 
import $ from "jquery";

//finish mousehandle positions, need to update central mouseposition state with mouse movements,
//fix when let go of button

var targets=[
  {
      time:new Date(2018, 8, 1),
      title: "New Job",
      aims:["Learning Driven Environment","Full Stack Developer", "Research Emerging Technologies", "AI/Machine Learning Opportunities"]
  },
  {
      time:new Date(2019, 0, 1),
      title: "End Year Targets",
      aims:["Learn REACT (check)", "Participate in a Kaggle Competition", "Improve DataScience Skills: Pandas, Tensorflow, ScikitLearn"]
  },
  {
      time:new Date(2019, 8, 1),
      title: "New Horizons (so many options)",
      aims:["PHD with a Machine Learning Focus", "Advanced AI Residence Program", "StartUp Accelerators", "StartUps in General" ]
  }
];

var quotes=[
  /*
  {
      name:"Joe, MEng",
      relation:"Good Friend",
      quote:"",
      date:"05/06/2018",
      image:"./images/joe.png"
  },*/
  {
      name:"AKQA",
      relation:"Past Internship Employer",
      quote:"Inspired to see such enthusiasm and dedication to creating the future.",
      image:"./images/akqa.png",
      date:"22/09/2016"
  },
  {
      name:"Zoe Fay, MSc",
      relation:"Fellow AQKA Future Academy Resident",
      quote:"Becks was a great asset to our team from ideation through to project delivery.",
      date:"20/09/2016",
      image:"./images/zoe.jpeg"
  }
];

const links=[
    {
        link:"https://github.com/rs6713",
        img:"./images/github.png",
    },
    {
        link: "https://www.linkedin.com/in/becks-simpson-037096107/",
        img:"./images/linkedin.png",
    },
    {
        link: "mailto:becks.simpson@outlook.com",
        img:"./images/email.png",
    }
]

const scrollMarkers=["#App","#white-platform", "#languages", "#where-going", "#quotes", "#skills-container", "#i-am" ]


class About extends Component{
  constructor(props){
    super(props)
    this.state={
      changePage: props.changePage,
      currentQuote:0,
      currentTarget:0,
      currentLang:{lang:"", years:""},
      barWidth:0,
      currentScroll:0,
      timelineActive:false,
      handlePos:0,
      barBorder:0.075,
      hoverQuote:null
    }
    this.scrollTo=this.scrollTo.bind(this)
    this.updateDimensions=this.updateDimensions.bind(this)
    this.keyPress=this.keyPress.bind(this)
    this.createQuote=this.createQuote.bind(this)
    this.updateCurrentScroll=this.updateCurrentScroll.bind(this)
    this.handleMove=this.handleMove.bind(this)
    this.mouseUp=this.mouseUp.bind(this)
    
    this.timelineActive=this.timelineActive.bind(this)
    this.setQuote=this.setQuote.bind(this)
    this.hoverQuote=this.hoverQuote.bind(this)
    this.scrollBias=0;
  }
  scrollTo(idx){
    return function(){

        //const node = ReactDOM.findDOMNode(this);
        //node.scrollTop = document.getElementById(scrollMarkers[idx]).offsetHeight;
        this.setState({currentScroll: idx})
        console.log("The new scroll index is: ", idx)
        console.log("Scrolling to", scrollMarkers[idx], "their offset top is:", $(scrollMarkers[idx])[0].offsetTop)
        console.log("Current scrolldown is",$("#App")[0].scrollTop, "bias", this.scrollBias )
        //console.log(scrollMarkers[idx],$(scrollMarkers[idx])[0].offsetHeight, $("#App")[0].offsetHeight)
        //console.log($("#App")[0].scrollTop, $(scrollMarkers[idx])[0].offsetHeight- $("#App")[0].offsetHeight)
        
        //$("#App")[0].scrollTop=$(scrollMarkers[idx])[0].offsetTop-this.scrollBias;//- $("#App")[0].offsetHeight
        $("#App").animate({scrollTop: ($(scrollMarkers[idx])[0].offsetTop-this.scrollBias)   }, '500');
    }.bind(this)
  }

  keyPress(event){
   
    if(event.key===38 || event.key==="ArrowUp"){
      console.log("Going up")
      this.updateCurrentScroll()
      this.scrollTo(Math.max(0, this.state.currentScroll-1))()
    }else if (event.key===39 || event.key==="ArrowDown"){
      console.log("Going down")
      this.updateCurrentScroll()
      this.scrollTo(Math.min(scrollMarkers.length-1, this.state.currentScroll+1))()
    }
    event.preventDefault();
  }
  hoverQuote(index){
      
    return function(){this.setState({hoverQuote:index}) }.bind(this)
      
  }

  componentDidMount(){
    var ctx = document.getElementById("becks-chart").getContext('2d');
    var myPieChart = new Chart(ctx,chartOptions);
    this.scrollBias=$("#App")[0].offsetTop
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("keydown", this.keyPress);
    window.addEventListener("mouseup", this.mouseUp);
    this.updateDimensions()
    this.setState({
      handlePos: (this.state.barWidth*this.state.barBorder)
    })
  }
  componentWillUnmount(){
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("keydown", this.keyPress);
    window.removeEventListener("mouseup", this.mouseUp);
  }
  //on mouseup set new handlepos
  //might need to update handlepos with mouse motions as well
  mouseUp(){
    if(this.state.timelineActive){
      this.setState({timelineActive:false})
      for(let i=0; i< targets.length;i++){
        let left=this.state.barWidth*this.state.barBorder+this.state.barWidth*(1-(this.state.barBorder*2))*i/(targets.length-1);
        console.log("target left: ", left)
        console.log("handle position: ", this.state.handlePos)
        console.log("barwidth", this.state.barWidth)
        console.log("bar segement", this.state.barWidth*(1-(this.state.barBorder*2))/((targets.length-1)*2) )
        if(Math.abs(this.state.handlePos-left) <= this.state.barWidth*(1-(this.state.barBorder*2))/((targets.length-1)*2) ){
          this.setState({handlePos: left, currentTarget: i})
          return
        }
      }
    }
  }

  updateCurrentScroll(){

    var current= $("#App")[0].scrollTop;
    var maxDiff=9999999;
    var index=0;
    for(var m=0; m< scrollMarkers.length;m++){
        if(maxDiff > Math.abs(current-$(scrollMarkers[m])[0].offsetTop)   ){
            console.log(maxDiff,current, Math.abs(current-$(scrollMarkers[m])[0].offsetTop))
            index=m;
            maxDiff=Math.abs(current-$(scrollMarkers[m])[0].offsetTop);
        }
    } 
    console.log("The current scroll index is:", index)
    this.setState({currentScroll: index})
    
  }

  updateDimensions(){
    //this.catPlatformHeight=$("#cat-platform").offset().top - $("#front-page > img").height()*0.5
    this.setState({
      barWidth: $("#bar").width(),
      barStart: $("#bar").offset().left
    })    
    //$('#becks-chart').remove(); // this is my <canvas> element
    //$('#who-am-i').append('<canvas id="becks-chart"></canvas>');
   // var ctx = document.getElementById("becks-chart").getContext('2d');
   // var myPieChart = new Chart(ctx,chartOptions);  
  }

  createQuote(index){
    //console.log("Creating quote")
    var divstyle={
      "backgroundImage": "url('"+ quotes[index].image + "')",
      "left":(14+ 72*(index+0.5)/quotes.length) + "%"
    }
    if(this.state.currentQuote===index || this.state.hoverQuote===index){
      divstyle.transform= "translateY(-50%) translateX(-50%) scale(1.3)"
    }else{
      divstyle.transform= "translateY(-50%) translateX(-50%) scale(1)"
    }
    return(
      <div key={index} style={divstyle} onMouseOut={this.hoverQuote(null)} onMouseOver={this.hoverQuote(index)} onClick={this.setQuote(index)}><span></span></div>
    )
  }

  timelineActive(){
    if(!this.state.timelineActive){
        this.setState({timelineActive:true})
    } 
  }
  setQuote(idx){
    return function(){
        this.setState({currentQuote:idx})
    }.bind(this)
  }

  handleMove(event){
    if(this.state.timelineActive){
      var start=(this.state.barWidth*this.state.barBorder)
      var end=(this.state.barWidth*(1-this.state.barBorder))
      var xPos=event.pageX-this.state.barStart;
      
      if (xPos<start){
          xPos=start 
      }
      if(xPos>end){
          xPos=end
      }
      this.setState({
        handlePos: xPos
      })
      //$("#timeline-handle").css("left",($("#bar").width()*0.925))
      //$("#timeline-handle").css("left",xPos)
    }
  }

  render(){
    return (
      <div id="App">
        <div id="front-page">
          <div className="main">
            <div id="arrow-down" onClick={ this.scrollTo(1) } >
                <i className="fas fa-angle-down"></i>
                <i className="fas fa-angle-down"></i>
                <i className="fas fa-angle-down"></i>
              </div>
            <div id="profile">
              <div>
                <img src="./images/becks.png" />
                <a href="mailto:becks.simpson@outlook.com">
                  <div>Contact</div>
                </a>
              </div>
              
              <div>
                <h3>Hello I am</h3>
                <div>
                  <h1>Becks Simpson<span></span></h1>
                  <p>Futurist • Full-Stack Developer • AI Enthusiast<span> </span></p>
                </div>
                <p>
                  I'm a recent Computer Science Graduate with a year of industry experience in a tech innovations role. 
                  Currently I’m looking for my next challenge, ideally it'd involve a mix of AI and full-stack web development responsibilities. 
                </p>
                <a href="mailto:becks.simpson@outlook.com">
                  <div>Contact</div>
                </a>
              </div>
            </div>
          </div>
          <img src="./images/cat.png" />
        </div>

        <div id="white-platform"> </div>
        <div id="cat-platform"> </div>

        <div id="who-am-i">
          <h1>Who am I?</h1>
          <div>
            <canvas id="becks-chart"></canvas>
          </div>
        </div>

        <Languages />

        <div id="where-going" onMouseMove={this.handleMove}>
          <h1 id="lang-title">Languages</h1>
          <div id="time-container">
            <div id="timeline">
              <div id="bar" >
                {
                  targets.map((target, i)=> 
                    <div key={"target"+i} className="timelinePoint" style={ {left: this.state.barWidth*this.state.barBorder+this.state.barWidth*(1-(this.state.barBorder*2))*i/(targets.length-1)}}>
                      <div>{target.time.toLocaleDateString("en-US")}</div>
                    </div>
                  )
                }
                <div id="timeline-handle" onMouseDown={this.timelineActive} style={{left: this.state.handlePos}}>
                  <img src="./images/drag.png" />
                </div>
              </div>
            </div>
            <div id="time-description">
              <h3>{targets[this.state.currentTarget].title}</h3>
              <ol>
                {targets[this.state.currentTarget].aims.map((target, i)=> <li key={"aims"+i}>{target}</li> ) }
              </ol>
            </div>
          </div>
        </div>



        <div id="quotes">
          <i className="fas fa-quote-left"></i>
          <i className="fas fa-quote-right"></i>
          <h1>{quotes[this.state.currentQuote].quote}</h1>
          <h3>{quotes[this.state.currentQuote].name } &#8226; { quotes[this.state.currentQuote].relation}  &#8226; { quotes[this.state.currentQuote].date}</h3>
          <div id="quotes-people"> 
            {quotes.map((quote, index)=> this.createQuote(index) )}
          </div>
        </div>

        <div id="skills-container">
          <h1>Skills &amp; Interests</h1>
          <div id="skills">
            {skills.map((skill,i)=> <div key={"skill "+i+": "+skill.skill}><img src={"./images/skills/"+skill.image} /><div><h5>{skill.skill}</h5><h6>{skill.level}</h6><p>{skill.descrip}</p></div><div></div></div>)}
          </div>
        </div>

        <div id="i-am">
          <h1>I am a</h1>
          <div>
            <div>
              <h1>Designer</h1>
              <h1>Developer</h1>
              <h1>Futurist</h1>
              <h1>Programmer</h1>
              <h1>Designer</h1>
            </div>
          </div>
        </div>
        <div id="front-page-footer">
            { 
                links.map((link, index)=>
                    <a key={index+"link"} href={link.link} target="blank">
                        <img src={link.img} />
                    </a>
                )
            }
          <span>© Becks Simpson 2018</span>
        </div>
      </div>
    );
  }
}


export default About;
/*
      $("#bar").find("> div:not(#timeline-handle)").each(function(i){
          //console.log(Math.abs($(this).position().left-$("#timeline-handle").position().left), $("#bar").width()*0.85/((targets.length-1)*2))
          if( Math.abs($(this).position().left-$("#timeline-handle").position().left)<= this.state.barWidth*0.85/((targets.length-1)*2)  ){
            this.setState({handlePos: $(this).position().left, currentTarget: i})
            return
          }
      });

*/


/*
$(window).resize(function(){


    $("#bar").find(" > div:not(#timeline-handle)").each(function(i){
        var x=$("#bar").width()*0.075+$("#bar").width()*0.85*i/(targets.length-1)
        let flag=false;
        if( Math.abs($(this).position().left-$("#timeline-handle").position().left)<= $("#bar").width()*0.85/((targets.length-1)*2)  ){
            flag=true;
        }
        $(this).css("left", x )
        if(flag){
            $("#timeline-handle").css("left",$(this).position().left)
        }
    })
    
});
*/

//$(document).ready(function(){

/*
    $("#timeline-handle").mousedown(function(){
        timelineActive=true;
    })
    */
    //$("#timeline-handle").css("left", $("#bar > div:first-child").position().left);
    
/*
    $(document).mouseup(function(){
        
        if(timelineActive){
            timelineActive=false;
            $("#bar").find("> div:not(#timeline-handle)").each(function(i){
                //console.log(Math.abs($(this).position().left-$("#timeline-handle").position().left), $("#bar").width()*0.85/((targets.length-1)*2))
                if( Math.abs($(this).position().left-$("#timeline-handle").position().left)<= $("#bar").width()*0.85/((targets.length-1)*2)  ){
                    $("#timeline-handle").css("left",$(this).position().left);

                    //Make new target text appear
                    $("#where-going div #time-description").empty();
                    $("#where-going div #time-description").append(document.createElement("h3"));
                    $("#where-going div #time-description").append(document.createElement("ol"));
                    console.log(targets[i].title)
                    $("#where-going div #time-description h3").text(targets[i].title);

                    for(var index=0; index< targets[i].aims.length; index++){
                        var newAim= document.createElement("li")
                        newAim.innerText=targets[i].aims[index]
                        $("#where-going div #time-description ol").append(newAim)
                    }
                    //$("#where-going div #time-description ol").text(targets[i].aims);
                    return
                }
            });
        }
    })
    */
    /*
    //Initialize timeline description contents
    $("#where-going div #time-description").append(document.createElement("h3"));
    $("#where-going div #time-description").append(document.createElement("ol"));
    $("#where-going div #time-description h3").text(targets[0].title);

    for(var index=0; index< targets[0].aims.length; index++){
        var newAim= document.createElement("li")
        newAim.innerText=targets[0].aims[index]
        $("#where-going div #time-description ol").append(newAim)
    }*/

    /*
    $("#where-going").mousemove(function(event){
        //console.log($("#bar").offset().left, $("#bar").width(), event.pageX)
        if(timelineActive){
            var start=($("#bar").width()*0.075)
            var end=($("#bar").width()*0.925)
            var xPos=event.pageX-$("#bar").offset().left;
            
            if (xPos<start){
                xPos=start
                
            }
            if(xPos>end){
                xPos=end
            }
            //$("#timeline-handle").css("left",($("#bar").width()*0.925))
            $("#timeline-handle").css("left",xPos)
        }
    })
*/
    /*
    for(var i=0; i< targets.length; i++){
        var elem=document.createElement("div");

        $("#bar").append(elem)
    }
    */
    /*
    $("#bar").find("div:not(#timeline-handle)").each(function(i){
        //console.log("sup")
        var x=$("#bar").width()*0.075+$("#bar").width()*0.85*i/(targets.length-1)
        $(this).css("left", x )
        $(this).addClass("timelinePoint")
        var eventDate=targets[i].time.toLocaleDateString("en-US");
        var dateElem=document.createElement("div");
        dateElem.innerText=(eventDate)
        $(this).append(dateElem)
    })*/

/*
    for(var q=0; q< quotes.length;q++){
        var elem=document.createElement("div")
        var overlay=document.createElement("span")
        elem.append(overlay);
        $("#quotes-people").append(elem);
    }



    $("#quotes-people").find("div").each(function(i){
        
        $(this).css({
            "background-image": "url('"+ quotes[i].image + "')",
            "left":(14+ 72*(i+0.5)/quotes.length) + "%"
        });
    });
    */
    /*
    $("#quotes-people div").mouseover(function(){
        $(this).css(
            {"transform": "translateY(-50%) translateX(-50%) scale(1.3)",
             //"border-width": 0//#f9e6ff
             //"border-color":"#c2f0ff"
        })
        //$(this).css({"width":"10%", "padding-top":"10%", "border-width":"6px"});
    });*/
    /*
    $("#quotes-people div").click(function(){

        
        var index=$("#quotes-people div").index(this)
        $("#quotes-people div:not(:nth-child("+(index+1)+"))").css({
            "transform": "translateY(-50%) translateX(-50%) scale(1)"
        })
        activeQuote=index;
        $("#quotes h1").empty();
        $("#quotes h1").text(quotes[index].quote)
        $("#quotes h3").empty();
        $("#quotes h3").html(
            quotes[index].name + " &#8226; "+ quotes[index].relation+ " &#8226; "+ quotes[index].date
        )
    })


    $("#quotes-people div").mouseout(function(){
        if ( $("#quotes-people div").index(this) != activeQuote){
            $(this).css({
                "transform": "translateY(-50%) translateX(-50%) scale(1)",
                //"border-width": "5px"
                //"border-color": "white"
            })
        }

        //$(this).css({"width":"8%", "padding-top":"8%", "border-width":"5px"});
    });
    */

    /*
    $("#quotes h1").text(quotes[0].quote)
    $("#quotes h3").html(
        quotes[0].name + " &#8226; "+ quotes[0].relation+ " &#8226; "+ quotes[0].date
    )
    */
    //var activeQuote=0;
    /*
    $("#quotes-people div:first-child").css(
        {"transform": "translateY(-50%) translateX(-50%) scale(1.3)",
         //"border-width": 0//#f9e6ff
         //"border-color":"#c2f0ff"
    })*/
/*
    $("#front-page #alert > div").click(function(){
        $("#front-page #alert").css({"max-height": "0em", "padding": "0 10%"})  
    })
*/

/*
    $(document).keydown(function(event){
        if(event.key=="ArrowDown" || event.key=="ArrowUp"){
            var current= $(document).scrollTop();
            var maxDiff=9999999;
            var index=0;
            for(var m=0; m< scrollMarkers.length;m++){
                if(maxDiff > Math.abs(current-$(scrollMarkers[m]).offset().top)){
                    index=m;
                    maxDiff=Math.abs(current-$(scrollMarkers[m]).offset().top);
                }
            }
            index=Math.min(Math.max(0,index+1-2*(event.key=="ArrowUp")), scrollMarkers.length-1);
            $("html, body").animate({ scrollTop: $(scrollMarkers[index]).offset().top }, 500);
            
        }
    });

});
*/
//var timelineActive=false;
//Beginner, Intermediate, Advanced, Expert
var skills=[
    
    {
        image:"coding.png",
        skill:"Programming",
        level:"7 years and counting",
        descrip:"",
        projects:[],
    },
    {
        image:"arduino.png",
        skill:"Arduino",
        level:"Advanced",
        descrip:"",
        projects:[],
    },
    {
        image:"bash.png",
        skill:"Bash",
        level:"Intermediate",
        descrip:"",
        projects:[],
    },
    {
        image:"website.png",
        skill:"FullStack Web",
        level:"Advanced",
        descrip:"",
        projects:[],
        
    },

    {
        image:"illustrator.png",
        skill:"Adobe Illustrator",
        level:"Intermediate",
        descrip:"",
        projects:[],
    },
    {
        image:"photoshop.png",
        skill:"Adobe PhotoShop",
        level:"Beginner",
        descrip:"",
        projects:[],
    },
    {
        image:"indesign.png",
        skill:"Adobe InDesign",
        level:"Intermediate",
        descrip:"",
        projects:[],
    },
    {
        image:"maker.png",
        skill:"Hacking",
        level:"Hacks, Workshops and Conferences",
        descrip:"",
        projects:[],
   
    },
    {
        image:"ai.png",
        skill:"AI",
        level:"Reading, Learning, Making",
        descrip:"",
        projects:[],
       
    },
    {
        image:"bowling.png",
        skill:"Bowling",
        level:"Personal Best: 156pts",
        descrip:"",
        projects:[],
    },
    {
        image:"arcade.png",
        skill:"Retro Arcades",
        level:"Pac-Man, DDR",
        descrip:"",
        projects:[],
    },

    {
        image:"draw.png",
        skill:"Portrait Drawings",
        level:"Pencil",
        descrip:"",
        projects:[],
    }
];

const chartOptions={
  type: 'doughnut',
  
  data: {
    datasets: [{
        data: [
            30,50,20
        ],
        backgroundColor: [
            "#fdabff", "#cc8cff","#67d0ff"
        ],
        borderColor: "#c2f0ff",//["#000000", "#c2f0ff","#000000", "#c2f0ff","#000000", "#c2f0ff"]
        borderWidth: 20,
        label: 'Dataset 1'
    }],
    labels: [
        'Researcher',
        'Developer',
        'Designer'
    ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        
        legend: {
            position: 'bottom',
            labels:{
                fontSize: 20,
                fontFamily: 'futura-light'
            }    
        },
        title: {
            display: false,
            
        },
        hover:{
            mode:null
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};

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

