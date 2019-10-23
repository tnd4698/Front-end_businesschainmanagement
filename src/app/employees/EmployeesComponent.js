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

class EmployeesComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { modal: false };
    }
    render() {
        const fakeData = [
            { name: 'name1', age: 50, address: 'address1' },
            { name: 'name2', age: 20, address: 'address2' },
            { name: 'name3', age: 70, address: 'address3' },
            { name: 'name1', age: 50, address: 'address1' },
            { name: 'name2', age: 20, address: 'address2' },
            { name: 'name3', age: 70, address: 'address3' }
        ]
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
                Header: 'Cơ sở làm việc',
                accessor: 'address',
                show: true
            },
            {
                Header: 'Chức vụ',
                accessor: 'address',
                show: true
            },
            {
                Header: 'Status',
                accessor: 'name',
                show: true
            },
            {
                Header: 'Active',
                Cell: row => (<div style={{ textAlign: 'center' }}><Button color='success' onClick={() => this.setState({ modal: !this.state.modal })}>Xem</Button></div>)
            }
        ]
        return (
            <div>
                <Card>
                    <CardBody>
                        <div className='l_header'>
                            <Row>
                                <Col sm="4">
                                    <h4 className="mb-0" style={{ display: "inline" }}><strong>Quản lý nhân viên</strong></h4>{' '}
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
                                        <option value="">Status</option>{' '}
                                        <option value="thuduc">active</option>
                                        <option value="thuduc">inactive</option>
                                    </Input>
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
                            <hr />
                        </div>
                        <Container fluid>
                            <ReactTable
                                data={fakeData}
                                minRows={0}
                                columns={columns}
                            />
                        </Container>
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.modal} toggle={() => this.setState({ modal: !this.state.modal })}
                    className={'modal-info ' + this.props.className}>
                    <ModalHeader toggle={() => this.setState({ modal: !this.state.modal })}>Menu</ModalHeader>
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
                                        <Label htmlFor="hf-name">Vị trí công việc</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='select'>
                                            <option value='' unselectable>Role</option>
                                            <option value=''>Nhân viên phục vụ</option>
                                            <option value=''>Giảng viên</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-branch">Chi nhánh</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='select'>
                                            <option value='' unselectable>Chi nhánh</option>
                                        </Input>
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

export default EmployeesComponent