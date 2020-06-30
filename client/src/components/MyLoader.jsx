import React from 'react';
import './MyLoader.css';

export default class MyLoader extends React.Component{

    render(){
        return(
            <div>
                <h5>Loading
                <span id="el1">.</span>
                <span id="el2">.</span>
                <span id="el3">.</span>
                </h5>
                
            </div>
        )

    }
}