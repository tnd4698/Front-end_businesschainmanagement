import React, { Component } from 'react';
import {
    Card,
    CardBody,
    FormGroup,
    Col,
    Container,
    Input,
    Label,
    Button
} from 'reactstrap'
import ReactTable from 'react-table'

class BranchDetailComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { modal: false };
    }

    render() {
        let props = this.props; console.log(props);
        return (
            <div className='small_container'>
                <Card>
                    <CardBody>
                        <div className='mid_header'>
                            <h4 className="mb-0"><strong>Thông tin cơ sở</strong></h4>
                            <div className="small text-muted">cơ sở</div>
                            <hr />
                        </div>
                        <Container fluid>
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
                                    <Label htmlFor="hf-name">Trạng thái</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type='checkbox' />
                                </Col>
                            </FormGroup>
                            <hr />
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="hf-name">Quản lý cơ sở</Label>
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
                                    <Input type='text' />
                                </Col>
                            </FormGroup>
                            <hr />
                            <h5>Các điều khoản quy định</h5>
                            <ReactTable
                                minRows={0}
                                showPagination={false}
                                columns={[
                                    {
                                        Header: '#',
                                        Cell: row => (<div></div>),
                                        show: true
                                    },
                                    {
                                        Header: 'Tên quy định',
                                        accessor: 'name',
                                        Cell: row => (<div style={{ textAlign: "center" }}>{row.data}</div>),
                                        show: true
                                    },
                                    {
                                        Header: 'nội dung',
                                        accessor: 'value',
                                        Cell: row => (<div style={{ textAlign: "center" }}>{row.data}</div>),
                                        show: true
                                    },
                                    {
                                        Header: 'Loại quy định',
                                        accessor: 'type',
                                        Cell: row => (<div style={{ textAlign: "center" }}>{row.data}</div>),
                                        show: true
                                    }
                                ]}
                                data={[{
                                    name: 'Số nhân viên tối đa',
                                    value: '5',
                                    type: 'contract'
                                }]} />
                            <Button color='primary' className='float-right'>Lưu</Button>
                        </Container>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default BranchDetailComponent