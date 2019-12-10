import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    Button,
    Label,
    Form,
    FormGroup,
    Col,
    Container,
    Input
} from 'reactstrap'
import { connect } from 'react-redux';

class TuitionComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { modal: false };
    }
    render() {
        return (
            <div className='small_container'>
                <Card>
                    <CardBody>
                        <div className='mid_header'>
                            <h4 className="mb-0"><strong>Lập phiếu thu học phí</strong></h4>
                            <div className="small text-muted">{(new Date()).toLocaleString()}</div>
                            <hr />
                        </div>
                        <Container fluid className="main_tuition">
                            <Form className="form-horizontal">
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-id">Mã học viên</Label>
                                    </Col>
                                    <Col xs="12" md="8">
                                        <Input type='select' id="hf-id" name="hf-id" />
                                    </Col>
                                    <Col xs="12" md="1">
                                        <Button color='primary'><i className="fas fa-list"></i></Button>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-name">Tên học viên</Label>
                                    </Col>
                                    <Col xs="12" md="8">
                                        Tên học viên
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-class">Lớp học</Label>
                                    </Col>
                                    <Col xs="12" md="8">
                                        <Input type='select' id="hf-class" name="hf-class" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="hf-tuition">Số tiền thu(VND)</Label>
                                    </Col>
                                    <Col xs="12" md="8">
                                        <Input type='number'/>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Container>
                    </CardBody>
                    <CardFooter>
                        <Button className='float-right' color='primary'>Xác nhận</Button>
                    </CardFooter>
                </Card>
                {this.props.toggleText}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const { toggleText } = state.bill;
    return {
      toggleText
    }
  };
  

  
  export default connect(
    mapStateToProps,
    null
  )(TuitionComponent);