import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './memorandum.css'
export default class Memorandum extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
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
                        </Col>
                </Row>
                <Row>
                <Col>
                    <div className="manager_text">
                        2
                        我們以神聖的愛，彼此來關懷，
                        這愛在末後日子，更洋溢佈開；
                        主引導我們的心，進入神的愛，
                        豫備我們全人，盼望那日主來。
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="manager_text">
                        3
                        信實的主必保守我們的各部─
                        靈、魂、身子全聖別，構成祂新婦；
                        今日凡事願聽從主大小吩咐，
                        不久就要聽見祂的再臨招呼。
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="manager_text">
                        4
                        我們等候主回來─祂甜美同在；
                        哦，何等榮耀盼望！“主，願你快來！”
                        作光明、白晝之子，儆醒勿懈怠，
                        惟盼主顯榮身，婚娶之日，樂哉！
                    </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}