import React, { Component } from 'react'
import {
    Label,
    Form,
    FormGroup,
    Col,
    Card,
    CardBody
} from 'reactstrap'
class Homecomponent extends Component {


    render() {
        return (
            <div className='small_container'>
                <Card>
                    <CardBody>
                        <Form className="form-horizontal">
                            <h3 style={{textAlign:"center"}}>Thông tin nhân viên</h3>
                            <hr/>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="hf-name">Họ tên</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    text
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="hf-name">CMND</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    text
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="hf-name">Ngày sinh</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    text
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="hf-name">Giới tính</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    text
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="hf-name">Địa chỉ cư trú</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    text
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="hf-name">Số điện thoại</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    text
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="hf-name">Email</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    text
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="hf-name">Vị trí công việc</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    text
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="hf-branch">Chi nhánh</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    text
                                </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Homecomponent;