import React from 'react';
import {Card, CardImg, CardText, CardBody, CardLink,CardTitle, CardSubtitle} from 'reactstrap';
import './Pop_Post.css'
import AddLocationIcon from '@material-ui/icons/AddLocation';
export default class Pop_Post extends React.Component{
    render(){
        return(
            
        <div className='Pop_Post'>
            <div className='d-flex justify-content-center'>
                <div className='each_post'>
                    <div><img src='/images/starbucks.png' className='pop-post-img'/></div>
                    <div className='pop-post-info'>
                        <span className='pop-post-title'> COFFEE SALE</span>
                        <span className='pop-post-place'> <AddLocationIcon/>NTHU</span>
                    </div>
                </div>
                <div className='each_post'>
                    <div><img src='/images/starbucks.png' className='pop-post-img'/></div>
                    <div className='pop-post-info'>
                        <span className='pop-post-title'> COFFEE SALE</span>
                        <span className='pop-post-place'> <AddLocationIcon/>NTHU</span>
                    </div>
                </div>
                <div className='d-none d-md-block each_post'>
                    <div><img src='/images/starbucks.png' className='pop-post-img'/></div>
                    <div className='pop-post-info'>
                        <span className='pop-post-title'> COFFEE SALE</span>
                        <span className='pop-post-place'> <AddLocationIcon/>NTHU</span>
                    </div>
                </div>
                <div className='d-none d-lg-block each_post'>
                    <div><img src='/images/starbucks.png' className='pop-post-img'/></div>
                    <div className='pop-post-info'>
                        <span className='pop-post-title'> COFFEE SALE</span>
                        <span className='pop-post-place'> <AddLocationIcon/>NTHU</span>
                    </div>
                </div>
            </div>
        </div>
        )

    }
}