import React, { Component } from 'react';
import {portfolioData} from '../../data/portfolioData'
import Project from './Project';
class ProjectList extends Component {
    state = {
        projects : portfolioData,
        radios : [
            {id:1,value:"javascript"},
            {id:2,value:"css"},
            {id:3,value:"react"},
            {id:4,value:"php"},
        ],
        selectedRadio:'javascript'
    }
    handleRadio = (e) => {
         let radioCheked = e.target.value;
         this.setState({
             selectedRadio : radioCheked
         })
    }
    render() {
     let {projects,radios,selectedRadio} = this.state;
        return (
            <div className = "portfolioContent">
                <ul className = "radioDisplay">
                    {
                        radios
                        .map(radio=>{
                          return(
                              <li key ={radio.id} >
                                  <input 
                                  type="radio" 
                                  name="radio"
                                  checked ={radio.value ===selectedRadio}
                                  value={radio.value}
                                  id = {radio.value}
                                  onChange = {this.handleRadio}  />
                                  <label htmlFor={radio.value}>{radio.value}</label>
                                  </li>
                                  
                          )
                        })
                    }

                </ul>
                <div className="projects">

                
                {projects
                
                .filter(project=>project.languages.includes(selectedRadio))
                .map((project)=>{
                    return(
                    <Project item = {project} key = {project.id}/>
                    )
                })}
                </div>
            </div>
        );
    }
}

export default ProjectList;