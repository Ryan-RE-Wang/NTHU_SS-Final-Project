import React, { useState } from 'react';
import { ListGroup, ListGroupItem, } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Popup, Card, Image, Rating } from 'semantic-ui-react';
import './Manager.css'

export default class Manager extends React.Component {
  

    constructor(props) {
        super(props);
        this.state={
            nowpage:'1'
        }
    }
    
    

    render() {
 
        return (
            <Row >
                 <Col xs={12} md={2} >
                        <ListItem button >
                        <ListItemIcon>
                            <AssignmentIndIcon />
                        </ListItemIcon>
                        <ListItemText primary="Manager" />
                        </ListItem>
                        <ListItem button>
                        <ListItemIcon>
                            <AmpStoriesIcon />
                        </ListItemIcon>
                        <ListItemText primary="Articles" />
                        </ListItem>
                        <ListItem button>
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Analysis" />
                        </ListItem>
                </Col>
                <Col xs={12} md={9}>         
                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                <Tab eventKey="home" title="Home">
                                    
                                    
                                        <div>
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
                                        <div>
                                        2
                                        我們以神聖的愛，彼此來關懷，
                                        這愛在末後日子，更洋溢佈開；
                                        主引導我們的心，進入神的愛，
                                        豫備我們全人，盼望那日主來。
                                        </div>
                                        <div>
                                        3
                                        信實的主必保守我們的各部─
                                        靈、魂、身子全聖別，構成祂新婦；
                                        今日凡事願聽從主大小吩咐，
                                        不久就要聽見祂的再臨招呼。
                                        </div>
                                        <div>
                                        4
                                        我們等候主回來─祂甜美同在；
                                        哦，何等榮耀盼望！“主，願你快來！”
                                        作光明、白晝之子，儆醒勿懈怠，
                                        惟盼主顯榮身，婚娶之日，樂哉！
                                        </div>
                                </Tab>
                                <Tab eventKey="profile" title="Profile"> 
                                <Container>
                                    <Row>
                                        <Col xs={12} md={4}>
                                            <div>
                                                <a href="#"><img src="images/風景1.jpg" alt="tree" width="300" height="200px" /></a>
                                                <p className="picture_d">picture1</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <div>
                                                <a href="#"><img src="images/w-thunderstorm-bg.jpg" alt="thunderstorm" width="300" height="200px" /></a>
                                                <p className="picture_d">picture2</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <div>
                                                <a href="#"><img src="images/w-na-bg.jpg" alt="na" width="300" height="200px" /></a>
                                                <p className="picture_d">picture3</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                                </Tab>
                                <Tab eventKey="contact" title="Contact" >
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
                                </Tab>
                            </Tabs>           
                </Col>     
            </Row>
            

         
   
        )
    }
}