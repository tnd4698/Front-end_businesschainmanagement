import React, { Component } from 'react';
import {
    Card,
    CardBody,
    Input,
    Button,
    Label,
    Form,
    FormGroup,
    Col
} from 'reactstrap';

class SpendComponent extends Component {

    render() {

        return (
            <div className='small_container'>
                <Card>
                    <CardBody>
                        <div className='mid_header'>
                            <h4 className="mb-0"><strong>Lập phiếu chi</strong></h4>
                            <div className="small text-muted">{(new Date()).toLocaleString()}</div>
                        </div>
                        <hr />
                        <Form className="form-horizontal">
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="hf-name">Nội dung</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type='textarea' id='spend-content'/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor='spend-total'>Số tiền(VND)</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type='number' id='spend-total' />
                                </Col>
                            </FormGroup>
                        </Form>
                        <hr />
                        <Button color="primary" className='float-right'>Lưu</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default SpendComponent