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


class TuitionReportComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date(), modal: false }
    }
    render() {
        const fakeData = [

        ]
        const columns = [
            {
                Header: '#',
                Cell: row => (<div></div>),
                show: true
            },
            {
                Header: 'Cơ sở',
                accessor: 'address',
                show: true
            },
            {
                Header: 'Doanh thu',
                accessor: 'name',
                show: true
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
                                    <h4 className="mb-0" style={{ display: "inline" }}><strong>Thống kê doanh thu giảng dạy</strong></h4>{' '}
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
                                minRows={5}
                                columns={columns}
                                showPagination={false}
                            />
                        </Container>
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.modal} toggle={() => this.setState({ modal: !this.state.modal })}
                    className={'modal-info modal-lg ' + this.props.className}>
                    <ModalHeader toggle={() => this.setState({ modal: !this.state.modal })}>Timework {(new Date()).toLocaleDateString()}</ModalHeader>
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
                                        Header: 'Description',
                                        Cell: row => (<div style={{ textAlign: 'center' }}><Input type='text' /></div>)
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

export default TuitionReportComponent