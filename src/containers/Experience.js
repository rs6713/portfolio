
import React from 'react';
import "../App.css"
import {experiences as exp} from '../becks_config';

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
var experiences=exp.sort(function(a, b) {
  return -a.startdate.getTime()+ b.startdate.getTime();
});

const starts=(experiences.map((e)=> e.startdate.getFullYear()*12+e.startdate.getMonth() )) 
const ends=(experiences.map((e)=> e.enddate.getFullYear()*12+e.enddate.getMonth()) )
const start=Math.min(...starts)
const end=Math.max(...ends)
const duration=end-start


const gridStyle={
  gridTemplateColumns: "repeat("+duration+", 1fr)",
  gridTemplateRows: "repeat("+experiences.length+", "+1+"fr)"//+(100/duration)vh
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