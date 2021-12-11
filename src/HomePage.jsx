import React, { Component } from "react";
import { Container, Form, Button, FloatingLabel } from "react-bootstrap";
import ImagesHome from "./Components/HomeImages";


export default class HomePage extends Component {
  render() {
    return (
      <div>
        <section className="bg-gradient">
          <ImagesHome />
      
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#ffffff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>

        </section>
        
        <Container>
          <div className="text-center font-weight-bold mt-5">
              <p>{"If you had the power to change ONE THING about your life, about yourself, what would it be? Only you know what habit you may need to replace or improve in order to affect long-term change."}
              <br></br><br></br>
              {"Close your eyes, sit back, and take a moment to think about that ONE THING and write it down below. The act of writing it down will start a domino effect of positive change in your life!"}
              </p>
          </div>
          {/* floating label doesn't work */}
          <Form className="mt-5">
            <Form.Group>
                    controlId="floatingInput" 
                    label="One Thing"
                    className="bm-3">
                  <Form.Control 
                    type="text"  
                    placeholder="One Thing"
                  />
                <Button 
                  type="submit"
                  value="submit"  
                  variant="btn btn-primary form-control rounded-pill mt-4" 
                  
                  >Commit!
                </Button>
            </Form.Group>
          </Form>      
        </Container>
        
        <footer className="one-thing-section">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,256L40,240C80,224,160,192,240,181.3C320,171,400,181,480,202.7C560,224,640,256,720,261.3C800,267,880,245,960,208C1040,171,1120,117,1200,101.3C1280,85,1360,107,1400,117.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
          <div style={{ backgroundColor: "white" }}>
            <h4 className="m-0 text-center pb-3">
              Copyright © 2021. All Rights Reserved
            </h4>
          </div>
        </footer>
        
      </div>
    );
  }
}
