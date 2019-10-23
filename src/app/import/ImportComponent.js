import React, { Component } from 'react';
import {
    Card,
    CardBody,
    Table,
    Input,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
    Form,
    FormGroup,
    Col,
    Label
} from 'reactstrap';

class ImportComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false };
        this.toggleModal=this.toggleModal.bind(this);
    }

    toggleModal(value) {
        if(value==='modal')
        this.setState({modal:value})
    }
    render() {

        return (
            <div className='small_container'>
                <Card>
                    <CardBody>
                        <div className='mid_header'>
                            <h4 className="mb-0"><strong>Lập phiếu nhập</strong></h4>
                            <div className="small text-muted">{(new Date()).toLocaleString()}</div>
                        </div>
                        <hr />
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Code</th>
                                    <th>Tên</th>
                                    <th>Số lượng</th>
                                    <th>Đơn giá(VND)</th>
                                    <th>Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <Input type='select' onChange={e => this.toggleModal(e.target.value)}>
                                            <option value=''>Choose code</option>
                                            <option value='modal'>new</option>
                                        </Input>
                                    </td>
                                    <td></td>
                                    <td><Input type='number'></Input></td>
                                    <td><Input type='number'></Input></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                        <hr />
                        <Button color="primary" className='float-right'>Lưu</Button>
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.modal} toggle={() => this.setState({ modal: !this.state.modal })}
                    className={'modal-info ' + this.props.className}>
                    <ModalHeader toggle={() => this.setState({ modal: !this.state.modal })}>Resource</ModalHeader>
                    <ModalBody>
                        <Container>
                        <Form className="form-horizontal">
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">Code</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='text' />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">Tên</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='text' />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">Phân loại</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type='select'>
                                            <option>Hàng hóa</option>
                                            <option>Cơ sở vật chất</option>
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

export default ImportComponent