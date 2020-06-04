import React from 'react';
import './header.css'
export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <header className="header" id="navbar-collapse-toggle">
            {/* -- Fixed Navigation Starts --> */}
            <ul className="icon-menu ">
                <li className="icon-box active">
                    <i className="fa fa-home"></i>
                    <button className = "btn" onClick={() => this.props.list_Selected('1')}>
                        <h2>Home</h2>
                    </button>
                </li>
                <li className="icon-box">
                    <i className="fa fa-user"></i>
                    <button className = "btn" onClick={() => this.props.list_Selected('2')}>
                        <h2>About</h2>
                        </button>
                </li>
                <li className="icon-box">
                    <i className="fa fa-briefcase"></i>
                    <button className = "btn" onClick={() => this.props.list_Selected('3')}>
                        <h2>Portfolio</h2>
                        </button>
                </li>
                <li className="icon-box">
                    <i className="fa fa-envelope-open"></i>
                    <button className = "btn" onClick={() => this.props.list_Selected('4')}>
                        <h2>Contact</h2>
                    </button>
                </li>
                <li className="icon-box">
                    <i className="fa fa-comments"></i>
                    <button className = "btn" onClick={() => this.props.list_Selected('4')}>
                        <h2>Blog</h2>
                    </button>
                </li>
            </ul>
        </header>
        )
    }
}