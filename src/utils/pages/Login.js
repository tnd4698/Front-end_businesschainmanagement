import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, Row } from 'reactstrap';
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.redirectLogin = this.redirectLogin.bind(this);
        this.redirectCheckLogin = this.redirectCheckLogin.bind(this);
    }

    handleUserChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }


    handleLogin() {

        const { username, password } = this.state;

        const data = new FormData();
        data.append("username", username);
        data.append("password", password);
        axios({
            method: "POST",
            url: '/login',
            data: data
        })
            .finally(()=>this.redirectLogin())
    }

    redirectLogin() {
        axios({
            method: "GET",
            url: "/api/auth/role"
        })
            .then(response => {
                console.log(response)
                this.setState({
                    auth: response.data

                }, () => {
                    if (this.state.auth !== '[ROLE_ANONYMOUS]') {
                        this.props.history.push('/');
                    }
                }
                )
            })
            .catch(error => {

            });
    }

    redirectCheckLogin() {
        if (this.state.checklogin === true) {
            this.props.history.push('/');
        }

    }


    componentDidMount() {
        this.redirectLogin();

    }

    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>

                    <Row className="justify-content-center">

                        <Col md="8">
                            <CardGroup>

                                <Card className="p-4">
                                    <CardBody>

                                        <h1>Login</h1>
                                        <p className="text-muted">Sign In to your account</p>
                                        <InputGroup className="mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="icon-user"></i>
                                                </span>
                                            </div>

                                            <Input
                                                placeholder="Username"
                                                type="text"
                                                id="username"
                                                className="validate"
                                                value={this.state.username}
                                                name="username"
                                                onChange={this.handleUserChange}
                                                required />
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="icon-lock"></i>
                                                </span>
                                            </div>
                                            <Input
                                                placeholder="Password"
                                                type="password"
                                                id="password"
                                                className="validate"
                                                value={this.state.password}
                                                name="password"
                                                onChange={this.handleUserChange}
                                                required />
                                        </InputGroup>
                                        <Row>
                                            <Col xs="6">
                                                <Button color="primary" className="px-4" type="submit"
                                                    value="Submit" name="action"
                                                    onClick={this.handleLogin}>Login</Button>

                                            </Col>
                                            <Col xs="6" className="text-right">
                                                <Button color="link" className="px-0">Forgot password?</Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                                <Card className="text-white bg-primary py-5 d-md-down-none"
                                    style={{ width: 44 + '%' }}>
                                    <CardBody className="text-center">
                                        <div>
                                            <h2>Sign up</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.</p>

                                            <Button color="primary" className="mt-3" href="/register" active>Register
                                                Now!</Button>
                                        </div>
                                    </CardBody>
                                </Card>

                            </CardGroup>
                        </Col>

                    </Row>


                </Container>
            </div>
        );
    }


}

export default Login;
