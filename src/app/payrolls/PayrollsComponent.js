import React, { Component } from 'react';
import {
    Card,
    CardBody,
    FormGroup,
    Col,
    Label,
    Input,
    Button,
    Row,
    InputGroup,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
    Form
} from 'reactstrap';
import ReactTable from 'react-table'

class PayrollsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false }
    }
    render() {
        const columns = [
            {
                Header: '#',
                Cell: row => (<div></div>),
                show: true
            },
            {
                Header: 'Mã nhân viên',
                accessor: 'id',
                show: true
            },
            {
                Header: 'Họ tên',
                accessor: 'name',
                show: true
            },
            {
                Header: 'Lương cơ bản',
                accessor: 'name',
                show: true
            },
            {
                Header: 'Số ngày nghỉ',
                accessor: 'name',
                show: true
            },
            {
                Header: 'Các khoản khác',
                accessor: 'name',
                show: true
            },
            {
                Header: 'Tổng',
                accessor: 'name',
                show: true
            },
            {
                Header: 'Active',
                Cell: row => (<div style={{ textAlign: 'center' }}><Button color='success' onClick={() => this.setState({ modal: !this.state.modal })}>Edit</Button></div>)
            }
        ]
        return (
            <div>
                <Card>
                    <CardBody>
                        <div className='l_header'>
                            <Row>
                                <Col sm="4">
                                    <h4 className="mb-0" style={{ display: "inline" }}><strong>Thanh toán lương</strong></h4>{' '}
                                </Col>
                                <Col sm="8" className="d-none d-sm-inline-block">
                                    <InputGroup className='float-right search'>
                                        <Input type="text" id="input1-group2" name="input1-group2" placeholder="Search" />
                                        <div className="input-group-append">
                                            <Button type="button" color="primary"><i className="fa fa-search"></i></Button>
                                        </div>
                                    </InputGroup>
                                    <Input type='select' color="primary" className="float-right select_header">
                                        <option value="">Role</option>
                                        <option value="TEACHER">Teacher</option>
                                    </Input>
                                    <Input type='select' color="primary" className="float-right select_header">
                                        <option value="">Chi nhánh</option>{' '}
                                        <option value="thuduc">Thu duc</option>
                                    </Input>
                                </Col>
                            </Row>
                        </div>
                        <hr />
                        <FormGroup row>
                            <Col sm={2}>
                                <Label>Tháng lương</Label>
                            </Col>
                            <Col sm={2.1}>
                                <Input type='month' defaultValue="2019-10" />
                            </Col>
                        </FormGroup>
                        <hr />
                        <ReactTable
                            data={[{}]}
                            columns={columns}
                            minRows={0}
                        />
                        <hr/>
                        <Button color="primary" className='float-right'>Xác nhận</Button>
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.modal} toggle={() => this.setState({ modal: !this.state.modal })}
                    className={'modal-info ' + this.props.className}>
                    <ModalHeader toggle={() => this.setState({ modal: !this.state.modal })}>Edit</ModalHeader>
                    <ModalBody>
                        <Container>
                            <Form className="form-horizontal">
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">Khoản khác</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='text' />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">Chú thích</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='text' />
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.setState({ modal: !this.state.modal })}>Lưu</Button>{' '}
                        <Button color="primary" onClick={() => this.setState({ modal: !this.state.modal })}>Thoát</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default PayrollsComponent