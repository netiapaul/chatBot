import React from "react";
import "./register.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Divider } from "antd";

function Register() {
  return (
    <div className="container-fluid m-0 bg-dark p-0">
      <div className="row g-0">
        <div className="col-12 col-md-5 form">
          <div className="card p-5">
            <div className="card-body">
              <h4 className="m-0">Sign Up</h4>
              <p className="m-0">
                Enter your credentials to register your account.
              </p>
              <div className="d-grid gap-2 my-4">
                <button className="btn btn-primary" type="button">
                  Button
                </button>
              </div>

              <div className="my-5">
                <Divider>or</Divider>
              </div>

              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@compay.com" />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </div>
              </Form>

              <p className="my-3">
                Already a member? <Link to={`/`}> Sign In</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7 login-quotes d-none d-md-block">
          <div className="card">
            <div className="card-body">
              This is some text within a card body.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
