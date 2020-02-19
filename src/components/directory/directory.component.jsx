import React, { Component } from 'react';
import sections from './directory.data';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'



class Directory extends Component{
constructor(){
    super();

    this.state = {
        sections: sections
    }
}


render(){
return (
    <div className = 'directory-menu'>
        {
            this.state.sections.map(({id, ...otherSectionProps}) => 
            (<MenuItem key = {id} {...otherSectionProps}></MenuItem>))
        }
    </div>
)
}
}

export default Directory;