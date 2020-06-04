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
                    class: "fa-briefcase",
                    id:"3",
                    text:"Portfolio"
                },
                {
                    class: "fa-envelope-open",
                    id:"4",
                    text:"Contact"
                },
                {
                    class: "fa-comments",
                    id:"4",
                    text:"Blog"
                }
            ],
            active_text: "Home"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        let content =this.state.list.map(p=>{
             let class_i ="fa "+p.class;
            if(this.state.active_text == p.text){
                return(
                    <li className="icon-box active" key = {p.text}>
                        <i className={class_i}></i>
                        <button className = "btn" onClick={()=>this.handleClick(p.id,p.text)}>
                            <h2>{p.text}</h2>
                        </button>
                    </li>
                )
            }else {
                return(
                    <li className="icon-box" key = {p.text}>
                        <i className={class_i}></i>
                        <button className = "btn" onClick={()=>this.handleClick(p.id,p.text)}>
                            <h2>{p.text}</h2>
                        </button>
                    </li>
                )
            }
        })
        return (
        <header className="header" id="navbar-collapse-toggle">
            {/* -- Fixed Navigation Starts --> */}
            <ul className="icon-menu ">
                {content}
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
}