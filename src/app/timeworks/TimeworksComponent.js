import React, { Component } from 'react';
import {
    Card,
    CardBody,
    Button,
    Form,
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
import DatePicker from "react-datepicker";


class TimeworksComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date(), modal: false }
    }
    render() {
        const fakeData = [
            { branchName: 'name1', age: 50, date: '04/12/2019' },
            { branchName: 'name1', age: 50, date: '04/12/2019' },
            { branchName: 'name1', age: 50, date: '04/12/2019' },
            { branchName: 'name1', age: 50, date: '05/12/2019' }
        ]
        const columns = [
            {
                Header: '#',
                Cell: row => (<div style={{textAlign:"center"}}></div>),
                show: true
            },
            {
                Header: 'Cơ sở',
                accessor: 'branchName',
                Cell: row => (<div style={{textAlign:"center"}}>{row.value}</div>),
                show: true
            },
            {
                Header: 'Ngày',
                accessor: 'date',
                Cell: row => (<div style={{textAlign:"center"}}>{row.value}</div>),
                show: true
            },
            {
                Header: 'Active',
                Cell: row => (<div style={{ textAlign: 'center' }}><Button color='success' onClick={() => this.setState({ modal: !this.state.modal })}>Xem</Button></div>)
            }
        ];
        const ExampleCustomInput = ({ value, onClick }) => (
            <Button outline size='sm' color='primary' onClick={onClick}>
                {value}
            </Button>
        );
        return (
            <div>
                <Card>
                    <CardBody>
                        <div className='l_header'>
                            <Row>
                                <Col sm="4">
                                    <h4 className="mb-0" style={{ display: "inline" }}><strong>Quản lý thời gian làm việc</strong></h4>{' '}
                                    <Button outline color='info' style={{ display: "inline" }} onClick={() => this.setState({ modal: !this.state.modal })}>+</Button>
                                    <Form inline>
                                        <DatePicker
                                            dateFormat="dd/MM/yyyy"
                                            selected={this.state.date}
                                            onChange={date => this.setState({ date: date })}
                                            customInput={<ExampleCustomInput />}
                                        />
                                        <i class="fas fa-angle-double-right    "></i>
                                        <InputGroup className='date'>
                                            <DatePicker
                                                dateFormat="dd/MM/yyyy"
                                                selected={this.state.date}
                                                onChange={date => this.setState({ date: date })}
                                                customInput={<ExampleCustomInput />}
                                            />
                                        </InputGroup>
                                    </Form>
                                </Col>
                                <Col sm="8" className="d-none d-sm-inline-block">
                                    <InputGroup className='float-right search'>
                                        <Input type="text" id="input1-group2" name="input1-group2" placeholder="Search" />
                                        <div className="input-group-append">
                                            <Button color="primary"><i className="fa fa-search"></i></Button>
                                        </div>
                                    </InputGroup>
                                    <Input type='select' color="primary" className="float-right select_header">
                                        <option value="">Branch</option>{' '}
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
                    <ModalHeader toggle={() => this.setState({ modal: !this.state.modal })}>
                        <h5>Timework</h5>
                        <Input type='date' defaultValue='2019-11-04' />
                    </ModalHeader>
                    <ModalBody>
                        <Container>
                            <ReactTable
                                data={fakeData}
                                minRows={0}
                                columns={[
                                    {
                                        Header: '#',
                                        Cell: row => (<div></div>),
                                        show: true
                                    },
                                    {
                                        Header: 'Mã nhân viên',
                                        accessor: 'address',
                                        show: true
                                    },
                                    {
                                        Header: 'Tên nhân viên',
                                        accessor: 'name',
                                        show: true
                                    },
                                    {
                                        Header: 'Active',
                                        Cell: row => (<div style={{ textAlign: 'center' }}><input type="checkbox" defaultChecked /></div>)
                                    }
                                ]}
                            />
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

export default TimeworksComponent