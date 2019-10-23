import React, { Component } from 'react';
import {
    Card,
    CardBody,
    Table,
    Input,
    Button,
    Col,
    Label,
    Row
} from 'reactstrap';

class ShipwayComponent extends Component {
    
    render() {

        return (
            <div className='small_container'>
                <Card>
                    <CardBody>
                        <div className='mid_header'>
                            <h4 className="mb-0"><strong>Luân chuyển hàng hóa</strong></h4>
                            <div className="small text-muted">{(new Date()).toLocaleString()}</div>
                        </div>
                        <hr />
                        <Row>
                            <Col sm='1'>
                                <Label>From</Label>
                            </Col>
                            <Col sm='4'>
                                <Input type='select'>
                                    <option>kho chinh</option>
                                </Input>
                            </Col>
                            <Col sm='1'>
                                <Label>To</Label>
                            </Col>
                            <Col sm='4'>
                                <Input type='select'>
                                    <option>thu duc</option>
                                </Input>
                            </Col>
                        </Row>
                        <hr/>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Code</th>
                                    <th>Tên</th>
                                    <th>Số lượng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <Input type='select'>
                                            <option value=''>Choose code</option>
                                        </Input>
                                    </td>
                                    <td></td>
                                    <td><Input type='number'></Input></td>
                                </tr>
                            </tbody>
                        </Table>
                        <hr />
                        <Button color="primary" className='float-right'>Lưu</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default ShipwayComponent