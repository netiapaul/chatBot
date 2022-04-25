import React, { useState } from "react";
import "./register.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { Divider } from "antd";

function Register() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let response = await fetch("http://localhost:4400/api/v1/register", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // 'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setEmail("");
        setPassword("");
        setError("");
        return navigate("/");
      } else {
        const data = await response.json();
        console.log(data);
        setError(data.message);

        // console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    // <div className="d-flex bg-dark min-vh-100">
    //   <div className="p-2  bg-danger">Flex item</div>
    //   <div className="p-2 bg-danger">Flex item</div>
    //   <div className="p-2 bg-danger">Third flex item</div>
    // </div>
    <div className="container-fluid m-0 bg-dark p-0">
      <div className="row g-0">
        <div className="col-12 col-md-5 form">
          <div className="card p-1 p-md-5 p-xl-5">
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

              <div className="my-1">
                <Divider>or</Divider>
              </div>

              {error && (
                <div className="alert alert-danger mb-1 p-2" role="alert">
                  {error}
                </div>
              )}

              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@compay.com"
                  />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>{" "}
                        Loading...
                      </>
                    ) : (
                      "Sign Up"
                    )}
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
