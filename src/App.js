import React, {Component, Fragment} from 'react';
import LoginImg from './login.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Container,Row,Col,Form,Button} from "react-bootstrap";
class LoginForm extends Component {
  render() {
    return( 
      <Fragment>
        <Container>
          <Row>
            <Col lg = {6} md = {6} sm = {12}>
            <div className = "LoginBox p-5">
              <img className = "LoginImg"src ={LoginImg} alt = "PersonLogo"/>
            <Form className = "mt-3">
              <Form.Group>
              <Form.Control type="email" placeholder="Enter email" />
               </Form.Group>

              <Form.Group >
               <Form.Control type="password" placeholder="Password" />
               </Form.Group>

                <Form.Group className = "float-left">
                <Form.Check type="checkbox" label="Show Password" />
                 </Form.Group>

                  <a className = "ml-3" href = "javascript" >Forgot Password?</a>
                 <Button className = "btn-block" variant="success" type="submit">
                               Submit
                     </Button>
                        </Form>
            </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default LoginForm;


