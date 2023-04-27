import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';


const styles = {
  background: {
    backgroundColor: "aliceblue"
  },
  card: {
    width: "80vw"
  },
  text: {
    textAlign: "center"
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
}
export default function Contact() {
  return (
    <div style={styles.background}>
      <h1 style={styles.text}>Contact Me</h1>
      <div style={styles.center}>
        <div style={styles.card}>
          <Form action="https://formsubmit.co/tonybologna123@outlook.com" method="POST">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name*</Form.Label>
              <Form.Control required name="name" type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control required name="email" type="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridMobile">
                <Form.Label>Mobile no.</Form.Label>
                <Form.Control name="mobile" placeholder="" />
            </Form.Group>
            <Form.Group as={Col} id="formGridQuery">
                <Form.Label>Query*</Form.Label>
                <Form.Control required name="message" as="textarea" rows={5} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
          </Form >
        </div>
      </div>
    </div>
  );
}
