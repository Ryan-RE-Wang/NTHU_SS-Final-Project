import React, { useState } from 'react';
import { ListGroup, ListGroupItem, } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BarChartIcon from '@material-ui/icons/BarChart';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { Popup, Card, Image, Rating, Icon } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import SimpleExpansionPanel from './Manager_used/expansion_panels.js';
import Image_information from './Manager_used/card.js';
import User_information from './Manager_used/user_information.js';


import './Manager.css'

export default class Manager extends React.Component {
  

    constructor(props) {
        super(props);
        this.state={
            nowpage:'1'

        }

        this.list_Selected = this.list_Selected.bind(this);
        this.render_Selected = this.render_Selected.bind(this);
    }
    
    

    render() {
        let content = this.render_Selected(this.state.nowpage);
        console.log(content);
        return (
            <Row >
                 <Col xs={12} md={2} className="left">
                     <Row>
                         <Col xs={12} md={10}>
                        <User_information/>
                        </Col>
                        <Col>
                        <ListItem  button onClick={() => this.list_Selected('1')} >
                        <ListItemIcon>
                            <AssignmentIndIcon />
                        </ListItemIcon>
                         <div className="options">Manager</div>
                        </ListItem>
                        </Col>
                        <Col>
                        <ListItem button onClick={() => this.list_Selected('2')}>
                        <ListItemIcon>
                            <AmpStoriesIcon />
                        </ListItemIcon>
                        <div className="options">Articles</div>
                        </ListItem>
                        </Col>
                        <Col>
                        <ListItem button onClick={() => this.list_Selected('3')}>
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <div className="options">Analysis</div>
                        </ListItem>
                        </Col>
                        <Col>
                        <ListItem button onClick={() => this.list_Selected('4')}>
                        <ListItemIcon>
                            <BorderColorIcon />
                        </ListItemIcon>
                        <div className="options">Setting</div>
                        </ListItem>
                        </Col>
                        </Row>
                </Col>
                <Col xs={12} md={9}>         
                           {content}
                             
                </Col>     
            </Row>
            

         
   
        )
    }
    
    list_Selected(page) {
        if(page == '1'||page== '2'||page=='3'||page=='4')
            this.setState({nowpage: page});
        else
            console.log(`${page} error`);
    }
    render_Selected(page) {
        console.log("enter");
        if(page == '1'){
            return (
        <Container>
            <Row>
            <div className="manager_text">
            1
            我們向神的信心，當徧傳遠近，
            宣告已離棄偶像，事奉真活神；
            用信調和主聖言，高聲說“阿們！
            ”藉主話轉向主，時刻經歷救恩。

                信心的工作要不斷增長，
            愛心的勞苦要漫溢四方，
            蒙祂聖別保守，徧及全人裏外；
            以盼望的忍耐，儆醒等候祂來。
            </div>
            </Row>
            <Row>
            <div className="manager_text">
            2
            我們以神聖的愛，彼此來關懷，
            這愛在末後日子，更洋溢佈開；
            主引導我們的心，進入神的愛，
            豫備我們全人，盼望那日主來。
            </div>
            </Row>
            <Row>
            <div className="manager_text">
            3
            信實的主必保守我們的各部─
            靈、魂、身子全聖別，構成祂新婦；
            今日凡事願聽從主大小吩咐，
            不久就要聽見祂的再臨招呼。
            </div>
            </Row>
            <Row>
            <div className="manager_text">
            4
            我們等候主回來─祂甜美同在；
            哦，何等榮耀盼望！“主，願你快來！”
            作光明、白晝之子，儆醒勿懈怠，
            惟盼主顯榮身，婚娶之日，樂哉！
            </div>
            </Row>
            </Container>)
        }else if(page == '2'){
        return (<div>
        <Container>
            <Row>
                <Col xs={12}  md={6} lg={4}>
                    <div>
                        <a href="#"><img src="images/風景1.jpg" alt="tree" width="224" height="280px" /></a>
                        <p className="picture_d">picture1</p>
                    </div>
                </Col>
                <Col xs={12}  md={6} lg={4}>
                    <div>
                        <a href="#"><img src="images/w-thunderstorm-bg.jpg" alt="thunderstorm" width="224" height="280px" /></a>
                        <p className="picture_d">picture2</p>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <div>
                        <a href="#"><img src="images/w-na-bg.jpg" alt="na" width="224" height="280px" /></a>
                        <p className="picture_d">picture3</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>)
    }else if(page == '3'){
        return (<div>
        <Popup trigger={
            <Card>
                <Image src='https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg' />
                <Card.Content>
                <Card.Header>My Neighbor Totoro</Card.Header>
                <Card.Description>
                    Two sisters move to the country with their father in order to be
                    closer to their hospitalized mother, and discover the surrounding
                    trees are inhabited by magical spirits.
                </Card.Description>
                </Card.Content>
            </Card>
            }
        >
            <Popup.Content>
            <Rating icon='star' defaultRating={3} maxRating={4} />
            </Popup.Content>
        </Popup>
        </div>)
    }else if(page == '4'){
        return (
        <div className= "setting">

        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="Reset Password" title="Reset Password">
            <div className="password_reset">
            <Form>
                <Form.Group controlId="ormBasicPassword">
                    <Form.Label>Old Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                    Hope you know your password. If don't <a href="#"> click me</a>
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I am not a robot" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    CHANGE
                </Button>
            </Form>
            </div>
            </Tab>
            <Tab eventKey="Personal Information" title="Ppersonal Information">
            <div>
            <Card>
                <Image src='images/User.jpg' wrapped ui={false} />
                <Card.Content>
                <Card.Header>NTHU</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a href="#">
                    <Icon name='user' />
                    <AssignmentTurnedInIcon/>
                    22 article release
                </a>
                </Card.Content>
            </Card>
            </div>
            </Tab>
            <Tab eventKey="contact" title="Contact" >
                    <User_information/>
            </Tab>
</Tabs>
</div>
        ) 
    }else{

        return (<div>error</div>)
    }
    }
}