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

    componentDidMount() {
        this.props.getListBranch();
        this.props.getListRole();
        if (this.props.curUser.roleName === 'BRANCHMANAGER')
            this.props.getListEmployee(this.props.curUser.branchId);
        else
            this.props.getListEmployee();
    }

    render() {
        const fakeData = [
            {
                id: 'EMPLOYEE29347',
                name: 'nguyen duy tan',
                address: '',
                branchName: '',
                roleName: '',
                status: ''
            },
            {
                id: 'EMPLOYEE29347',
                name: 'nguyen duy tan',
                address: '',
                branchName: '',
                roleName: '',
                status: ''
            },
            {
                id: 'EMPLOYEE29347',
                name: 'nguyen duy tan',
                address: '',
                branchName: '',
                roleName: '',
                status: ''
            }
        ]
        const columns = [
            {
                Header: '#',
                Cell: row => (<div style={{ textAlign: "center" }}>1</div>),
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
                accessor: 'branchName',
                show: true
            },
            {
                Header: 'Chức vụ',
                accessor: 'roleName',
                show: true
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: row => {
                    if(row.value==1)
                    return (
                        <div style={{ textAlign: 'center' }}>
                        <Button color='success'>active</Button>
                        </div>
                    )
                    else
                    return (
                        <div style={{ textAlign: 'center' }}>
                        <Button color='secondary'>inactive</Button>
                            </div>
                    )
                },
                show: true
            },
            {
                Header: 'Active',
                Cell: row => (<div style={{ textAlign: 'center' }}><Button color='success' onClick={() => this.setState({ modal: !this.state.modal })}>Xem</Button></div>)
            }
        ]

        const listBranch = this.props.listBranch.map(branch => (
            <option value={branch.id}>{branch.name}</option>
        ));
        listBranch.unshift(<option value="null">Chi nhánh</option>);

        const listRole = this.props.listRole.map(role => (
            <option value={role.id}>{role.role}</option>
        ));
        listRole.unshift(<option value="null">Role</option>);

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
                                        <option value="null">Status</option>
                                        <option value="1">active</option>
                                        <option value="0">inactive</option>
                                    </Input>
                                    <Input type='select' color="primary" className="float-right select_header">
                                        {listRole}
                                    </Input>
                                    {
                                        this.props.curRole === '[ROLE_BUSINESSMANAGER]' &&
                                        <Input type='select' color="primary" className="float-right select_header">
                                            {listBranch}
                                        </Input>
                                    }

                                </Col>
                            </Row>
                            <hr />
                        </div>
                        <Container fluid>
                            <ReactTable
                                data={this.props.listEmployee}
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