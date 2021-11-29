import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class LoginForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label for="Login-Username">Username *</Form.Label>
          <Form.Control
            className="bg-light text-dark rounded form-control"
            id="Login-Username"
            type="text"
            name="Username"
            placeholder="Username"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label for="Login-Password">Password *</Form.Label>
          <Form.Control
            className="bg-light text-dark rounded form-control"
            id="Login-Password"
            type="text"
            name="Password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group>
          <a
            href="/accountPage.html"
            class="btn btn-primary form-control rounded-pill mt-2"
            id="Login-Submit"
          >
            Login!
          </a>
        </Form.Group>

        <Form.Group>
          <button className="btn btn-outline-primary rounded-pill form-control">
            Forgot Password?
          </button>
        </Form.Group>
      </Form>
    );
  }
}
