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

class ResourcesComponent extends Component {

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
                Header: 'Tên',
                accessor: 'id',
                show: true
            },
            {
                Header: 'Loại',
                accessor: 'name',
                show: true
            },
            {
                Header: 'Cơ sở ',
                accessor: 'address',
                show: true
            },
            {
                Header: 'Số lượng',
                accessor: 'address',
                show: true
            },
            {
                Header: 'Trạng thái',
                accessor: 'address',
                show: true
            },
            {
                Header: 'Active',
                Cell: row => (<div style={{ textAlign: 'center' }}><Button color='success' onClick={() => this.setState({ modal: !this.state.modal })}>Xem</Button></div>)
            }
        ]
        return (
            <div className='EmployeesComponent'>
                <Card>
                    <CardBody>
                        <div className='l_header'>
                            <Row>
                                <Col sm="4">
                                    <h4 className="mb-0"><strong>Quản lý tài sản</strong></h4>
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
                                        <option value="">Loại</option>
                                        <option value="TEACHER">Hàng hóa</option>
                                        <option value="TEACHER">Cơ sở vật chất</option>
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
                    className={'modal-info modal-lg ' + this.props.className}>
                    <ModalHeader toggle={() => this.setState({ modal: !this.state.modal })}>$ Tên tài sản</ModalHeader>
                    <ModalBody>
                        <Container>
                            <Card>
                                <CardBody>
                                    <h5>Thông tin tài sản</h5>
                                    <hr />
                                    <Form className="form-horizontal">
                                        <FormGroup row>
                                            <Col md="3">
                                                <Label htmlFor="hf-name">Tên</Label>
                                            </Col>
                                            <Col xs="12" md="9">
                                                tên
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Col md="3">
                                                <Label htmlFor="hf-name">Cơ sở</Label>
                                            </Col>
                                            <Col xs="12" md="9">
                                                cơ sở
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Col md="3">
                                                <Label htmlFor="hf-name">Số lượng (Gói)</Label>
                                            </Col>
                                            <Col xs="12" md="2">
                                                <Input type='number' />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Col md="3">
                                                <Label htmlFor="hf-name">Trạng thái</Label>
                                            </Col>
                                            <Col xs="12" md="2">
                                                <Input type='checkbox' />
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                    <hr />
                                    <Button color='primary' className="float-right">Update</Button>
                                </CardBody>
                            </Card>
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

export default ResourcesComponent