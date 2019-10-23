import React, { Component } from 'react';
import {
    Card,
    CardBody,
    Button,
    Row,
    Col
} from 'reactstrap'
import ScrollArea from 'react-scrollbar'

class BillComponent extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    toggle(text) {
        this.props.fetchN(text)
        this.props.history.push('/tuition')
    }
    render() {
        let props = this.props; console.log(props);
        return (
            <div>
                <Card>
                    <CardBody>
                        <div className='mid_header'>
                            <h4 className="mb-0"><strong>Lập hóa đơn</strong></h4>
                            <div className="small text-muted">{(new Date()).toLocaleString()}</div>
                        </div>
                        <hr />
                        <Row>
                            <Col sm='7'>
                                <Card className='menu'>
                                    <ScrollArea>
                                        <CardBody>
                                            <Row>
                                                <Col sm={3}>
                                                    <div className='item_menu'>
                                                        <img src={require('../../utils/32.png')} className='img_item' alt="##" />
                                                        <p>tên món</p>
                                                    </div>
                                                </Col>
                                                <Col sm={3}>
                                                    <div className='item_menu'>
                                                        <img src={require('../../utils/32.png')} className='img_item' alt="##" />
                                                        <p>tên món</p>
                                                    </div>
                                                </Col>
                                                <Col sm={3}>
                                                    <div className='item_menu'>
                                                        <img src={require('../../utils/32.png')} className='img_item' alt="##" />
                                                        <p>tên món</p>
                                                    </div>
                                                </Col>
                                                <Col sm={3}>
                                                    <div className='item_menu'>
                                                        <img src={require('../../utils/32.png')} className='img_item' alt="##" />
                                                        <p>tên món</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </ScrollArea>
                                </Card>
                            </Col>
                            <Col sm='5'>
                                <Card className='bill'>
                                    <CardBody>
                                        <Row>
                                            <Col sm={5}>
                                                Tên món
                                            </Col>
                                            <Col sm={3}>
                                                Số lượng
                                            </Col>
                                            <Col sm={4}>
                                                Giá(VND)
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col sm={5}>
                                                Cafe sữa
                                            </Col>
                                            <Col sm={3}>
                                                2
                                            </Col>
                                            <Col sm={4}>
                                                10000
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col sm={8}>
                                                Tổng
                                            </Col>
                                            <Col sm={4}>
                                                10000
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Button color='primary'>Xác nhận</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Button onClick={() => this.toggle('11111')}>111111</Button>
                <Button onClick={() => this.toggle('22222')}>222222</Button>
                {props.toggleText}
            </div>
        );
    }
}

export default BillComponent