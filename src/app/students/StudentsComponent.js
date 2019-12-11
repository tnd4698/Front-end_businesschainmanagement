import React, { Component } from 'react';
import {
    Card,
    CardBody,
    Button,
    Label,
    Form,
    FormGroup,
    Col,
    Row,
    Container,
    Input,
    InputGroup,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap'
import ReactTable from 'react-table'

class StudentsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { modal: false };
    }

    componentDidMount() {
        this.props.getListStudent();
        setTimeout(() => this.forceUpdate(), 1000);
    }
    render() {

        const columns = [
            {
                Header: '#',
                Cell: row => (<div style={{ textAlign: "center" }}>1</div>),
                show: true
            },
            {
                Header: 'Mã học viên',
                accessor: 'studentID',
                Cell: row => (<div style={{ textAlign: "center" }}>{row.value}</div>),
                show: true
            },
            {
                Header: 'Họ tên',
                accessor: 'name',
                Cell: row => (<div style={{ textAlign: "center" }}>{row.value}</div>),
                show: true
            },
            {
                Header: 'Lớp học',
                accessor: 'classID',
                Cell: row => (<div style={{ textAlign: "center" }}>{row.value}</div>),
                show: true
            },
            {
                Header: 'Cơ sở',
                accessor: 'branchName',
                Cell: row => (<div style={{ textAlign: "center" }}>{row.value}</div>),
                show: true
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: row => {
                    if (row.value == 1)
                        return (
                            <div style={{ textAlign: 'center' }}>
                                <Button color='success' disabled>active</Button>
                            </div>
                        )
                    else
                        return (
                            <div style={{ textAlign: 'center' }}>
                                <Button color='secondary' disabled>inactive</Button>
                            </div>
                        )
                },
                show: true
            },
            {
                Header: 'Học phí',
                accessor: 'statusTuition',
                Cell: row => {
                    if (row.value == 0)
                        return (
                            <div style={{ textAlign: 'center' }}>
                                <Button color='warning'>Thu học phí</Button>
                            </div>
                        )
                    else
                        return (
                            <div style={{ textAlign: 'center' }}>
                                <Button color='secondary' disabled>Thu học phí</Button>
                            </div>
                        )
                }
            },
            {
                Header: 'Active',
                Cell: row => (
                    <div style={{ textAlign: 'center' }}>
                        <Button color='success' onClick={() => this.setState({ modal: !this.state.modal })}>Xem</Button>
                    </div>
                )
            }
        ]
        return (
            <div className='EmployeesComponent'>
                <Card>
                    <CardBody>
                        <div className='l_header'>
                            <Row>
                                <Col sm="4">
                                    <h4 className="mb-0" style={{ display: "inline" }}><strong>Quản lý học viên</strong></h4>{' '}
                                    <Button outline color='info' style={{ display: "inline" }} onClick={() => this.setState({ modal: !this.state.modal })}>+</Button>
                                </Col>
                                <Col sm="8" className="d-none d-sm-inline-block">
                                    <InputGroup className='float-right search'>
                                        <Input type="text" id="input1-group2" name="input1-group2" placeholder="Search" />
                                        <div className="input-group-append">
                                            <Button type="button" color="primary"><i className="fa fa-search"></i></Button>
                                        </div>
                                    </InputGroup>
                                    <Input type='select' color="primary" className="float-right select_header">
                                        <option value="">Status</option>
                                        <option value="">Hoat dong</option>
                                    </Input>
                                    <Input type='select' color="primary" className="float-right select_header">
                                        <option value="">Tuition</option>
                                        <option value="">Đã thu</option>
                                    </Input>
                                    <Input type='select' color="primary" className="float-right select_header">
                                        <option value="">Chi nhánh</option>{' '}
                                        <option value="thuduc">Thu duc</option>
                                    </Input>
                                </Col>
                            </Row>
                            <hr />
                        </div>
                        <ReactTable
                            data={this.props.listStudent}
                            minRows={0}
                            columns={columns}
                        />
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.modal} toggle={() => this.setState({ modal: !this.state.modal })}
                    className={'modal-info ' + this.props.className}>
                    <ModalHeader toggle={() => this.setState({ modal: !this.state.modal })}>Học viên</ModalHeader>
                    <ModalBody>
                        <Container>
                            <Form className="form-horizontal">
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">Họ tên</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='text' />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">CMND</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='text' />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">Ngày sinh</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='date' />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">Giới tính</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='select'>
                                            <option value='' unselectable>Giới tính</option>
                                            <option value=''>Nam</option>
                                            <option value=''>Nữ</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">Địa chỉ cư trú</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='text' />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">Số điện thoại</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='text' />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">Email</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='email' />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">Lớp học</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        Lớp học
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-status">Trạng thái</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        trạng thái
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.setState({ modal: !this.state.modal })}>OK</Button>{' '}
                        <Button color="primary" onClick={() => this.setState({ modal: !this.state.modal })}>Cancel</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default StudentsComponent