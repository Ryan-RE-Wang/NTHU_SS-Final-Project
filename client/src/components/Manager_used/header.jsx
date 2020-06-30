import React from 'react';
import './header.css'
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {
                    class: "fa-home",
                    id:"1",
                    text:"Home"
                },
                {
                    class: "fa-user",
                    id:"2",
                    text:"About"
                },
                {
                    class: "fa-envelope-open",
                    id:"3",
                    text:"Contact"
                },
                
            ],
            active_text: "Home",
            hide:false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handlehide = this.handlehide.bind(this);
        this.getbutton = this.getbutton.bind(this);
    }

    render() {
        let left_button = this.getbutton(); 
        let content = (this.state.hide)? "":this.state.list.map(p=>{
             let class_i ="fa "+p.class;

                if(this.state.active_text == p.text){
                    return(
                        <li className="icon-box active" key = {p.text}>
                            <i className={class_i}></i>
                            <button className = "btn_M" onClick={()=>this.handleClick(p.id,p.text)}>
                                <h2>{p.text}</h2>
                            </button>
                        </li>
                    )
                }else {
                    return(
                        <li className="icon-box" key = {p.text}>
                            <i className={class_i}></i>
                            <button className = "btn_M" onClick={()=>this.handleClick(p.id,p.text)}>
                                <h2>{p.text}</h2>
                            </button>
                        </li>
                    )
                }
           
        })
        return (
        <header className="header_M" id="navbar-collapse-toggle">
            {/* -- Fixed Navigation Starts --> */}
            <ul className="icon-menu ">
                {content}
                {left_button}
            </ul>
        </header>
        )
    }
    handleClick (id,text){
        this.props.list_Selected(id);
        this.setState({
            active_text:text
        });

    }
    
    handlehide (){
        this.setState({
            hide: ~this.state.hide
        })
    }

    getbutton (){
        if(this.state.hide){
            return(
                <svg className="bi btn_M2 bi-three-dots-vertical" onClick={()=>this.handlehide()} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
            )
        }else{
            return(
                <svg className="bi btn_M3 bi-chevron-double-up" onClick={()=>this.handlehide()}  viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                    <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                </svg>
            )
        }
    }
}