
import React from 'react';
import "./experience.css"

var experiences=[
{
  role:"Summer Intern",
  startdate: new Date(2015, 6),
  enddate:new Date(2015, 9),
  company:"BluWireless",
  responsibilities:[
    "Hardware design, worked primarily in System Verilog.",
    "Developed a Direct Memory Access module and several memory models.",
    "Creation of makefiles, bash scripts and managing remote repositories.",
  ],
  skills:["System Verilog", "Mercurial"]
},
{
  role:"Social Secretary",
  startdate:new Date(2015,8),
  enddate:new Date(2016,5),
  company:"Imperial College London, Womens Rugby",
  responsibilities:[
    "Team member recruitment: posters, taster sessions.",
    "Organisation of socials throughout the year: costumes, venue hiring."
  ],
  media:[],
  skills:[
    "Organisation and Planning", "Friendliness"
  ]
},
{
  role:"Future Academy Resident",
  startdate:new Date(2016,6),
  enddate:new Date(2016,9),
  company:"AKQA",
  media:[],
  responsibilities:[
    "Series of Startup-like project sprints",
    "Immersed ourselves in problems and created, prototyped and tested solutions before pitching to clients.",
    "Developed prototypes using Adobe Aftereffects, Photoshop",
    "Pitched several presentations to clients using Keynote."
  ],
  skills:["Research","Adobe Illustrator", "Keynote", "Adobe AfterEffects", "Speech Delivery", "Design", "Agile", "Sprint Planning", "Ideation Processes", "User Surveys"]
},
{
  role:"Gender-Variant Officer",
  startdate:new Date(2016,8),
  enddate:new Date(2017,5),
  company:"Imperial College London, Queer Society",
  responsibilities:[
    "In charge of the organising and running trans socials",
    "Providing support and advice for Imperials trans students.",
  ],
  skills:["Organisation and Planning"]
},
{
  role:"Prototype Developer / Innovations Analyst",
  startdate:new Date(2017,7),
  enddate:new Date(2018,6),
  media:[],
  company:"NBCUniversal",
  responsibilities:[
    "Research new emerging technologies: create reports.",
    "Provide technical expertise and create demos to raise company tech awareness.",
    "Develop aesthetic prototypes: wireframes and UIs for new ideas and demos",
    "Develop functional prototypes:MEAN stack web applications, unity games and machine learning applications.",
  ],
  skills:[
    "Research","Adobe Illustrator", "Adobe AfterEffects", "HTML5", "CSS3", "Javascript ES6", "Angular", "React", "Python", "ML & AI"
  ]
},
{
  role:"Robotics Course Assistant Developer",
  startdate:new Date(2013, 5),
  enddate: new Date(2014, 7),
  media:[],
  company:"Dame Alice Owens",
  responsibilities:[
    "Developed a robotics curriculum for the Year 7-9 Students.",
    "Assisted in constructing 20 robots controlled by arduinos",
    "Helped adapt the freeware minibloq graphics and code to extend the functionality: coloured LED Strips, remote controls, obstacle detection and line following. ",
  ],
  skills:["C++", "Adobe Photoshop", "Soldering", "Arduino", "Robot Assembly", "Design"]
},
{
  role:"Electronics and Information Student, 2:1",
  startdate:new Date(2013, 9),
  enddate:new Date(2017, 9),
  company:"Imperial College London",
  responsibilities:[
    "MEng Final Year Project: Learning the association between pedestrian images and their natural language descriptions.",
    "Took courses focusing on: Machine Learning, Pattern Recognition, Robotics, Algorithms, High Performance Computing and Graphics",
  ],
  skills:["C++", "Soldering", "Verilog","Machine Learning", "AI", "SQL","High Performance Computing", "Advanced Robotics", "F#", "User Interface Design", "Algorithms"]
},
{
  role:"Secondary School Student",
  startdate:new Date(2006, 9),
  enddate:new Date(2013, 9),
  company:"Dame Alice Owens",
  responsibilities:[],
  skills:["A* Mathematics", "A* Further Mathematics","A* Biology","A* Chemistry","A* Physics",]
},
]
/*
{
  role:"",
  startdate:"",
  enddate:"",
  company:"",
  responsibilities:[],
  skills:[]
},
*/
experiences=experiences.sort(function(a, b) {
  return -a.startdate.getTime()+ b.startdate.getTime();
});
const starts=(experiences.map((e)=> e.startdate.getFullYear()*12+e.startdate.getMonth() )) 
const ends=(experiences.map((e)=> e.enddate.getFullYear()*12+e.enddate.getMonth()) )
const start=Math.min(...starts)
const end=Math.max(...ends)
const duration=end-start



const gridStyle={
  //gridTemplateColumns: "repeat("+experiences.length+", 1fr)",
  //gridTemplateRows: "repeat("+duration+", "+1+"fr)"//+(100/duration)vh
}
console.log("start",start, "end", end)
console.log("duration", duration)
var expPositions=[];
for(let i=0; i<experiences.length;i++){
  console.log("before",(starts[i]-start), "after", (end-ends[i]), "values", starts[i]-start, ends[i]-start)
  expPositions.push(
    [
      {
        gridColumn: (starts[i]-start+1) +"/"+ (ends[i]-start+1) ,
        gridRow: i+1 +"/"+ (i+2),
      },
      {
        gridColumn: ((end-(ends[i]))>(starts[i]-start)) ? ((ends[i]-start+1) +"/"+ (end-start+1)) : 1+"/"+(starts[i]-start+1)  ,
        gridRow:  i+1 +"/"+ (i+2),
        paddingLeft: ((end-(ends[i]))>(starts[i]-start)) ? "1em": 0,
        paddingRight: ((end-(ends[i]))>(starts[i]-start)) ? 0: "1em"
      }
    ]
  )
}

const getMonth=["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

class Experience extends React.Component{
  constructor(props){
    super(props)
    this.state={
      exps:experiences.map(()=>0)
    }
    this.toggleElement=this.toggleElement.bind(this)
  }
  toggleElement(idx){
    return function(){
      let temp=[...this.state.exps]
      temp[idx]=!temp[idx]
      this.setState({
        exps: temp
      })
    }.bind(this)
  }
  render(){

    return (
      <div id="main_exp" style={gridStyle} >
        { experiences.map((exp, idx)=>
          <div key={idx} style={{...(expPositions[idx][0]), backgroundColor: this.state.exps[idx]? "#306cff": "#c2f0ff"}} className="colored" onClick={this.toggleElement(idx)}>
            
          </div>
        )}
        { experiences.map((exp, idx)=>
          <div key={"descrip"+idx} style={expPositions[idx][1]} className="descrip">
            <h3> <span>{exp.role} </span> | {exp.company}</h3>
            <p>{ getMonth[exp.startdate.getMonth()]} {exp.startdate.getFullYear()} - { getMonth[exp.enddate.getMonth()]} {exp.enddate.getFullYear()}</p>
            <div style={this.state.exps[idx]? {maxHeight:1000}: {maxHeight:0}}>
              <ol>
                {exp.responsibilities.map((resp,i)=> <li key={i}>{resp}</li>)}
              </ol>
              {exp.skills.map((sk,i)=><span key={i}>{sk}</span>)}
            </div>
          </div>

        )}
      </div>
    )
  }
}

export default Experience