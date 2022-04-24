import React from "react";
import "./login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container-fluid m-0 bg-dark p-0">
      <div className="row g-0">
        <div className="col-12 col-md-5">
          <div className="card bg-danger p-5">
            <div className="card-body">
              <h4 className="m-0">Log In</h4>
              <p className="m-0">
                Enter your credentials to access your account.
              </p>
              <div className="d-grid gap-2 my-4">
                <button className="btn btn-primary" type="button">
                  Button
                </button>
              </div>

              <div className="d-flex justify-content-between my-5">
                <hr />

                <div>or</div>

                <hr />
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
                Not a member? <Link to={`/register`}>Sign Up</Link>
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

export default Login;
