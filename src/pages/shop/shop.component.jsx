import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview.collection.component';


class Shop extends Component{
    constructor(props){
        super(props);
        this.state = {
collections :SHOP_DATA
        }
        console.log(this.state)
    }




    render(){
        return (
            <div>
            <h1>Shop Page</h1>
          {this.state.collections.map(({id,...otherSectionProps}) => 
          {return (
              <div key =  {id}>
              <PreviewCollection key ={id} {...otherSectionProps}></PreviewCollection>
              </div>
              )
              })}
            </div>
        
        )
    }
}

export default Shop;
