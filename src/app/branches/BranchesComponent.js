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

class BranchesComponent extends Component {

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
                Header: 'Tên cơ sở',
                accessor: 'id',
                show: true
            },
            {
                Header: 'Địa chỉ',
                accessor: 'address',
                show: true
            },
            {
                Header: 'Quản lý',
                accessor: 'address',
                show: true
            },
            {
                Header: 'Liên hệ',
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
                Cell: row => (<div style={{ textAlign: 'center' }}><Button color='success' onClick={() => { this.props.history.push('/branchs/832') }}>Xem</Button></div>)
            }
        ]
        return (
            <div className='EmployeesComponent'>
                <Card>
                    <CardBody>
                        <div className='l_header'>
                            <Row>
                                <Col sm="4">
                                    <h4 className="mb-0" style={{ display: "inline" }}><strong>Quản lý cơ sở</strong></h4>{' '}
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
                    className={'modal-info modal-lg ' + this.props.className}>
                    <ModalHeader toggle={() => this.setState({ modal: !this.state.modal })}><strong>Thêm cơ sở</strong></ModalHeader>
                    <ModalBody>
                        <Container>
                            <Form className="form-horizontal">
                                <h5>Thông tin cơ sở</h5>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">Tên cơ sở</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='text' />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">Địa chỉ</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='text' />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">Nhân viên quản lý</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='select' />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">Trạng thái</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='checkbox' />
                                    </Col>
                                </FormGroup>
                                <hr />
                                <h5>Quy định</h5>
                                Table
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

export default BranchesComponent