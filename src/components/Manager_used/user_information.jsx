import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './user_information.css';

export default class User_information extends React.Component {
    state = {
            club_name:'聖經研習社',
            join_time:'Joined in 2020 05/24',
            describe:'我們是聖經研習社，由學校的基督徒學生組成，平常活動有週三福音餐廳，週間小排聚會，週日主日聚會，歡迎與我們一同讀聖經理解人生的奧秘',
            release_num:3,
            expanded:false,
           
        }

    constructor(props) {
            super(props);
            this.handleExpandClick = this.handleExpandClick.bind(this);
    
        }

    
    render() {
        return (
            <Card className="root">
            <CardMedia
                className="media"
                image="/images/user1.jpg"
                title="Paella dish"
            />
            <CardActions disableSpacing className='cardaction'>
            
                <font face="標楷體" className="user_name">{this.state.club_name}</font>
                <IconButton
                className={clsx("expand", {
                    ["expandOpen"]: this.state.expanded,
                })}
                onClick={() =>this.handleExpandClick()}
                aria-expanded={this.state.expanded}
                aria-label="show more"
                size='small'
                >
                <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography component={'span'} paragraph>
                    {this.state.join_time}
                </Typography>
                
                <Typography component={'span'} paragraph>
                    <div className="user_information">{this.state.describe}</div>
                </Typography>
                <Typography component={'span'}>
                        <a href="#">
                            <div className="user_information">{this.state.release_num} article release</div>
                        </a>
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
        )
    }
    handleExpandClick = () => {
        this.setState({expanded:!this.state.expanded});
    }
}