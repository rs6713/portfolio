import React from 'react';
import '../App.css';
import Project from '../components/Project'
import {projectList, PCONSTS} from '../becks_config';




for(let p=0; p<projectList.length; p++){
  for(let m=0; m<projectList[p].media.length; m++){
    if(projectList[p].media[m].type===PCONSTS.IMAGE){
      var img=new Image();
      img.src="./images/projects/"+projectList[p].media[m].file
      projectList[p].media[m].file=img;
    }
  }
}
//<img src={"./images/projects/"+media.file}/>

/*
  {
    title:"",
    description:"",
    features:[],
    media:[],
    links:[],
    categories:[],
    takeaways:[],
    tools:[ ],
  },
*/

//sort by date
//filters
class Projects extends React.Component{
  constructor(props){
    super(props)
    this.state={
      filters:[],
      currentProject:null,
      projects:projectList,
      currFilters:[]
    }
    
    for(let i=0;i<this.state.projects.length;i++){
      var curr=this.state.projects[i];
      for(let u=0; u<curr.categories.length;u++){
        //console.log(curr.categories[u], this.state.filters.indexOf(curr.categories[u]))
        if(this.state.filters.indexOf(curr.categories[u])===-1){
          this.state.filters.push(curr.categories[u])
        }
      }
    }

    this.changeFilter=this.changeFilter.bind(this)
    this.showProject=this.showProject.bind(this)
    this.goToProject=this.goToProject.bind(this)
  }
  changeFilter(filter){
    return function(){
      //console.log(filter, event)
      console.log("Filter changing: ", filter, index)
      var index=this.state.currFilters.indexOf(filter)
      if(index==-1){
        
        this.setState({
          currFilters:[...this.state.currFilters, filter]
        })
      }else{
        this.setState({
          currFilters: this.state.currFilters.slice(0, index).concat(this.state.currFilters.slice(index+1, this.state.currFilters.length))
        })
      }
      console.log("New current filters",  this.state.currFilters)
    }.bind(this)
  }
  showProject(project){
    
      //if no filters applied: show all
      if(this.state.currFilters.length==0){
        console.log("No filters applied", this.state.currFilters.length)
        return true
      }
      let sharedCategories=[...this.state.currFilters].filter(x => project.categories.indexOf(x)!==-1)
      if ( sharedCategories.length>0){
        console.log("They share categories", project.title, sharedCategories)
        return true
      }
      return false
    
  }
  goToProject(project){
    return function(){
      this.setState({
        currentProject:project
      })
    }.bind(this)
  }
 /*
            <div>
              <span>Sort</span> 
              <select>
                <option value="date">Date</option>
                <option value="name">Saab</option>
              </select>
            </div>
 */

  render(){
    if(this.state.currentProject==null){
      return(
        <div id="main" className="projects">
          <div id="toolbar">
              <div>Categories </div>
              <div>
              {this.state.filters.map((filter, index)=><span key={index}><input type="checkbox" checked={this.state.currFilters.indexOf(filter)!==-1} value="0"  onClick={this.changeFilter(filter)}/>{filter}</span> )}
              </div>
          </div>
          <div id="projects-container">
            {this.state.projects.map((project, idx)=> this.showProject(project) && <Project key={"Project"+idx} project={project} click={this.goToProject(project)} idx={idx} />  )}
          </div>
        </div>
      );
    }else{
      return(
        <div id="fill-page" className="projects">
          <div>
            <div id="info">
              <div id="top">
                <h3>{this.state.currentProject.title}</h3>
                <span id="date">{this.state.currentProject.date}</span>
                <p>{this.state.currentProject.description}</p>
                <div id="features">
                  <ol>
                    {this.state.currentProject.features.map((f)=> <li>{f}</li>)}
                  </ol>
                </div>
                { this.state.currentProject.links && this.state.currentProject.links.map((link)=><a href={"https://"+link} target="blank">{link}</a>)}
                
                {this.state.currentProject.media.filter((m)=>m.type==PCONSTS.PDF).map((media)=> <a href={"./images/projects/"+media.file} download><span>{media.file}</span></a>)}
                <div id="tools">
                  {this.state.currentProject.tools.map((tool)=> <span>{tool}</span>)}
                </div>
                <div id="categories">
                  {this.state.currentProject.categories.map((cat)=> <span>{cat}</span>)}
                </div> 

              </div>

              <div id="spread"></div>

              <div id="footer">

                <i className="fas fa-arrow-circle-left" onClick={function(){this.setState({currentProject:null,currFilters:[] })}.bind(this)}></i>
              </div>
              
            </div>
            <div id="pictures">
              <div>
                {this.state.currentProject.media.map((media)=> media.type==PCONSTS.IMAGE && <img src={media.file.src}/> )}
              </div>
            </div>
          </div>
          { this.state.currentProject.takeaways.length!==0 &&
            <div id="findings">
              <h1>Key Findings</h1>
              <div>
                  {this.state.currentProject.takeaways.map((finding)=><div>{finding}</div>)}
              </div>
            </div>
          }
           
        </div>
          
      )
    }
  }
}

export default Projects;

/*
          { this.state.currentProject.takeaways.length!==0 &&
            <div id="findings">
              <h1>Key Findings</h1>
              <div>
                  {this.state.currentProject.takeaways.map((finding)=><div>{finding}</div>)}
              </div>
            </div>
          }

*/