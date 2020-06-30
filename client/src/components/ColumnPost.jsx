import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'reactstrap';
import './ColumnPost.css'
import { connect } from 'react-redux';
import {getArticleFromDB} from 'states/clickPage-action.js';
import {Link} from 'react-router-dom'

class ColumnPost extends React.Component{
    static propTypes = {
        // postid:-1,
        // postname:'',
        // postContent:'',
        fileUrl:''
    }
    constructor(props) {
        super(props);
        this.getbody = this.getbody.bind(this);
    
		this.state={

		}
        this.handleLearnMore = this.handleLearnMore.bind(this);
        this.getWords = this.getWords.bind(this);
	}
    render(){
        let body = this.getbody();       
        return(  
            <div>{body}</div>
        )
    }
    componentWillMount(){
        
    }
    getbody(){
        const baseUrl = 'https://team11final.s3-us-west-1.amazonaws.com/';
        const lasturl = '.jpeg';
        const pictureurl = baseUrl+this.props.fileUrl+lasturl;
        let discription = this.getWords(this.props.postContent);
        if(this.props.reverse === true){
            return(
            <div className='columnPost '>
                {/* <div className='columPost-img'> */}
                    <img src={pictureurl} className=''/>
                {/* </div> */}
                
                <div className='discription addleftmargin '>
                    <h1 className="display-4 d-none d-md-block ">{this.props.postname}</h1>
                    <h1 className="display-5 d-block d-md-none ">{this.props.postname}</h1>
                    <p className="lead">{`${discription} ...`}</p>
                    <Link to='/article'><button className='learnmore-btn'onClick={this.handleLearnMore}>LearnMore</button></Link>
                </div>
                
            </div>
            )
        }else{
            return (
            <div className='columnPost order-reverse'>
                <div className='discription addrightmargin'>
                    <h1 className="display-4 d-none d-md-block ">{this.props.postname}</h1>
                    <h1 className="display-5 d-block d-md-none ">{this.props.postname}</h1>
                    <p className="lead">{`${discription} ...`}</p>
                    <Link to='/article'><button className='learnmore-btn'onClick={this.handleLearnMore}>LearnMore</button></Link>
                </div>
                {/* <div className='columPost-img'> */}
                    <img src={pictureurl} className=''/>
                {/* </div> */}
            </div>
            )
        }
    }

    handleLearnMore(){
        this.props.dispatch(getArticleFromDB(this.props.postId));  
        this.props.dispatch(getClub(this.props.club));
        createTouch(this.props.p.id);
    }
    //utility function
    getWords(str) {
        return str.split(/\s+/).slice(0,20).join(" ");
    }
}

export default connect(state => ({
}))(ColumnPost);



