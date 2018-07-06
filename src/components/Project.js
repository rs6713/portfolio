import React from 'react';

const colors=["#ffffff","#c2f0ff"," #306cff", "#f9e6ff" ];//, "#ff34fe"
//const colors=["#f9e6ff"];
const IMAGE="image"
const VIDEO="video"
const WEBSITE="website"
const PDF="pdf"

const Project= (props)=>{
    const project=props.project
    const idx=props.idx
    /*
    var style={
       backgroundColor:colors[idx%colors.length],
    }
*/
    var style={
        backgroundSize:"cover",
        backgroundPosition:"center"
    }
    var img_file;
    for(let i=0; i<project.media.length;i++){
        if(project.media[i].type==IMAGE){
            style["backgroundImage"]="url('"+project.media[i].file.src+"')"//../images/projects/
            //img_file=project.media[i].file
            break
        }
    }

    return(
        <div onClick={props.click}>
            {style.backgroundImage &&<div id="overlay" style={style}></div> }
            <div id="content">
                {project.title}
                <h5>{project.date}</h5>
            </div>
        </div>
    )
}
//{ img_file && <div id="overlay" style={style}> <img src={img_file.src}/> </div>}
//{backgroundColor:colors[idx%colors.length]}
export default Project