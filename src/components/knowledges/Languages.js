import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages : [
            {id:"1",value:"Java",xp:2},
            {id:"2",value:"Javascript",xp:2},
            {id:"3",value:"Php",xp:1},
            {id:"4",value:"C",xp:0.9}
        ],
        frameworks : [
          {id:"1",value:"React",xp:1.5},
          {id:"2",value:"Angular",xp:1.5},
          {id:"3",value:"Sass",xp:0.8},
          {id:"4",value:"Spring Boot",xp:1.7}
        ]
    }
    render() {
        let {languages,frameworks} = this.state;
          


      
        return (
            
            <div className = "languagesFrameworks">
                <ProgressBar languages = {languages} className="languagesDisplay" title="languages" />
                <ProgressBar languages = {frameworks} className="frameworksDisplay" title= "frameworks & bibliothèques" />
            </div>
        );
    }
}

export default Languages;