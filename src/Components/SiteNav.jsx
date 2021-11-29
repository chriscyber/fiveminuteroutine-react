import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default class SiteNav extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid pt-3">
          <header className="d-flex flex-column justify-content-center side-margin">
            <div className="container-lg">
              <Nav className="navbar navbar-expand-md navbar-dark">
                <Navbar.Brand
                  href="/"
                  className="py-2 logo"
                  src="images/Logo.svg"
                  alt=""
                ></Navbar.Brand>
                <Navbar.Toggle
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse navbar id="navbarSupportedContent">
                  <Navbar className="navbar-nav mr-auto">
                    <Nav.Item>
                      <Nav.Link active href="/">
                        Home<span className="sr-only">(current)</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/contactUs.html">Contact Us</Nav.Link>
                    </Nav.Item>
                  </Navbar>
                  <button
                    className="btn btn-outline-info rounded-pill mr-3 mt-3 btn-invert"
                    id="LoginBtn"
                    style={{ minWidth: "100px" }}
                  >
                    Login{" "}
                  </button>
                  <button
                    className="btn btn-info mt-3 rounded-pill text-primary"
                    id="RegisterBtn"
                    style={{ minWidth: "100px" }}
                  >
                    Register{" "}
                  </button>
                </Navbar.Collapse>
              </Nav>
            </div>
          </header>
        </div>
      </div>
    );
  }
}