import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Chart from 'chart.js' 
import registerServiceWorker from './registerServiceWorker';
import $ from "jquery";

/*
Free time:
Events I've gone to - hackathons, conferences
Online competitions. blog posts
*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

var ctx = document.getElementById("becks-chart").getContext('2d');
var myPieChart = new Chart(ctx,{
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
});

var targets=[
    {
        time:new Date(2018, 8, 1),
        title: "New Job",
        aims:["Learning Driven Environment","Full Stack Developer", "Research Emerging Technologies", "AI/Machine Learning Opportunities"]
    },
    {
        time:new Date(2019, 0, 1),
        title: "End Year Targets",
        aims:["Learn REACT to a usable level", "Participate in a Kaggle Competition", "Improve DataScience Skills: Pandas, Tensorflow, ScikitLearn"]
    },
    {
        time:new Date(2019, 8, 1),
        title: "New Horizons",
        aims:["PHD with a Machine Learning Focus", "Advanced AI Residence Program", "Continued Job" ]
    }
];

var decelerate=false;
var currentPage=0;
$(window).resize(function(){
    var temp=$("#nav-bar").css("transition")
    $("#nav-bar").css("transition", "all 0s ease 0s");
    
    $("#nav-bar").css("width", $(".header span:eq("+ currentPage +")").width()+16)
    $("#nav-bar").css("left", $(".header span:eq("+ currentPage +")").offset().left-8);
    $("#nav-bar")[0].offsetHeight; 
    $("#nav-bar").css("transition", temp);

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

$(document).ready(function(){
    $("#nav-bar").css("width", $(".header span:eq("+currentPage+")").width()+16)
    $("#nav-bar").css("left", $(".header span:eq("+currentPage+")").offset().left-8)
    $(".header span").click(function(){
        $("#nav-bar").css("left", $(this).offset().left-8)
        $("#nav-bar").css("width", $(this).width()+16)
        currentPage=$(this).index()-1;
    })

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

    $("#arrow-down").click(function(){
        //console.log($("#front-page > img").height,$("#front-page > img").height(), $("#front-page > img").innerHeight() )
        $('html, body').animate({
            scrollTop: $("#cat-platform").offset().top - $("#front-page > img").height()*0.5
        }, 1000);
    });
    
    $("#languages #circle .logo").mouseout(function(){
        //console.log("Logo out")
        angleIncrement=0.001;
        decelerate=false;
        clearInterval(languagesRotater)
        languagesRotater=setInterval(rotateCircle, 20);
        $("#languages #lang-descrip").css({"transform": "translateX(-50%) translateY(10%)","opacity":0 })
    });   

    $("#timeline-handle").mousedown(function(){
        timelineActive=true;
    })
    $("#timeline-handle").css("left", $("#bar > div:first-child").position().left);
    
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
    //Initialize timeline description contents
    $("#where-going div #time-description").append(document.createElement("h3"));
    $("#where-going div #time-description").append(document.createElement("ol"));
    $("#where-going div #time-description h3").text(targets[0].title);

    for(var index=0; index< targets[0].aims.length; index++){
        var newAim= document.createElement("li")
        newAim.innerText=targets[0].aims[index]
        $("#where-going div #time-description ol").append(newAim)
    }

    
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

    for(var i=0; i< targets.length; i++){
        var elem=document.createElement("div");

        $("#bar").append(elem)
    }
    $("#bar").find("div:not(#timeline-handle)").each(function(i){
        //console.log("sup")
        var x=$("#bar").width()*0.075+$("#bar").width()*0.85*i/(targets.length-1)
        $(this).css("left", x )
        $(this).addClass("timelinePoint")
        var eventDate=targets[i].time.toLocaleDateString("en-US");
        var dateElem=document.createElement("div");
        dateElem.innerText=(eventDate)
        $(this).append(dateElem)
    })


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
    $("#quotes-people div").mouseover(function(){
        $(this).css(
            {"transform": "translateY(-50%) translateX(-50%) scale(1.3)",
             //"border-width": 0//#f9e6ff
             //"border-color":"#c2f0ff"
        })
        //$(this).css({"width":"10%", "padding-top":"10%", "border-width":"6px"});
    });
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

    $("#quotes h1").text(quotes[0].quote)
    $("#quotes h3").html(
        quotes[0].name + " &#8226; "+ quotes[0].relation+ " &#8226; "+ quotes[0].date
    )
    var activeQuote=0;
    $("#quotes-people div:first-child").css(
        {"transform": "translateY(-50%) translateX(-50%) scale(1.3)",
         //"border-width": 0//#f9e6ff
         //"border-color":"#c2f0ff"
    })

    $("#front-page #alert > div").click(function(){
        $("#front-page #alert").css({"max-height": "0em", "padding": "0 10%"})  
    })
    for(var i=0; i<skills.length;i++){
        var container= document.createElement("div")
        var overlay= document.createElement("div")
        var border= document.createElement("div")
        var img_=document.createElement("img")
        var title=document.createElement("h5")
        var level=document.createElement("h6")
        var descrip=document.createElement("p")

        /*
        for(var p=0; p< skills[i].projects; p++){
            var link=document.createElement
        }
        */
        
        title.innerText=skills[i].skill
        level.innerText=skills[i].level
        descrip.innerText=skills[i].descrip
        overlay.appendChild(title)
        overlay.appendChild(level)
        overlay.appendChild(descrip)
        img_.src="./images/skills/"+skills[i].image
        container.appendChild(img_)
        container.appendChild(overlay)
        container.appendChild(border)
        $("#skills").append(container)
    }


    var scrollMarkers=["#alert","#white-platform", "#languages", "#where-going", "#quotes", "#skills-container", "#i-am" ]
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
    $(".header > span").click(function(){
        $("")
    })
    $("#front-page .header >div:not(#nav-bar)")


});
var timelineActive=false;
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

for(var img=0; img<languages.length; img++){
    var logoContainer=document.createElement("div");
    var logo=document.createElement("img");
    
    logoContainer.setAttribute("value", String(img));
    logoContainer.value=String(img);
    logo.src="./images/languages/"+languages[img]["icon"];
    logoContainer.appendChild(logo);
    $("#languages #circle").append(logoContainer);
}
$("#languages #circle div").addClass("logo");
var angleRotate=0;
var angleIncrement=0.001;

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

var languagesRotater=window.setInterval(rotateCircle, 20);



