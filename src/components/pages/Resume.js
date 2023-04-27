import React from 'react';
import ResumePDF from './Resume/Resume.pdf'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
const styles = {
  text: {
    textAlign: "center"
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  background: {
    backgroundColor: "aliceblue"
  }
};

export default function Resume() {
  return (
    <div style={styles.background}>
      <h1 style={styles.text}>Resume Page</h1>
      <p></p>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Confident</th>
            <th>Decent Understanding</th>
            <th>Work in Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HTML</td>
            <td>jQuery</td>
            <td>Sequelize</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>Node.js</td>
            <td>IndexedDB</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>Object-Oriented Programming</td>
            <td>Express.js</td>
          </tr>
          <tr>
            <td>Server-Side APIs</td>
            <td>Test-Driven Development</td>
            <td>MongoDb/Mongoose</td>
          </tr>
          <tr>
            <td>MySQL</td>
            <td>MERN Stack as a Whole</td>
            <td>GraphQL</td>
          </tr>
          <tr>
            <td>Progressive Web Apps</td>
            <td>Model View Controller</td>
            <td>Computer Science</td>
          </tr>
          <tr>
            <td>React</td>
            <td>Algorithms/Recursion</td>
            <td></td>
          </tr>
        </tbody>
        </Table>
        <h4 style={styles.text}>Feel free to download and check out my resume!</h4>
        <div style={styles.center}>
        <Button variant="primary" href={ResumePDF} download="JohnsonResume">Download <FontAwesomeIcon icon={faDownload} bounce/></Button>
        </div>
    </div>
  );
}
