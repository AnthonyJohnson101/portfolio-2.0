import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub} from "@fortawesome/free-brands-svg-icons"

const styles = {
  caro: {
    height: "85vh",
    width: "90%"
  },
  image: {
    height: "85vh",
    width: "90%"
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center"
  },
  background: {
    backgroundColor: "aliceblue",
    textAlign: "center"
  }
};

export default function Portfolio() {
  return (
    <div style={styles.background}>
      <h1>Portfolio Projects</h1>
      <div style={styles.center} >
        <Carousel style={styles.caro} variant="dark">
          <Carousel.Item>
            <img style={styles.image}
              className="d-block w-100"
              src="https://github.com/AnthonyJohnson101/recent-events-dashboard/raw/main/assets/images/screenshot_of_website_desktop.jpg"
              alt="Application image"
            />
            <Carousel.Caption>
              <h3><a href="https://anthonyjohnson101.github.io/recent-events-dashboard/">Day2Day</a></h3>
              <p>My first collaberative project. A recent event dashboard that displays front-end and API proficency</p>
              <a href="https://github.com/AnthonyJohnson101/recent-events-dashboard">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={styles.image}
              className="d-block w-100"
              src="https://user-images.githubusercontent.com/116526152/234104372-fe05e745-876b-4ab6-8632-22dea19fe816.png"
              alt="Application image"
            />
            <Carousel.Caption>
              <h3><a href="https://recipeers.herokuapp.com/">ReciPeers</a></h3>
              <p>My second collaborative project. Focuses mainly on back-end express and mysql databasing. Follows the MVC structure.</p>
              <a href="https://github.com/AnthonyJohnson101/project-2">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={styles.image}
              className="d-block w-100"
              src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"
              alt="Very cute cat"
            />
            <Carousel.Caption>
              <h3><a href="">Place Holder for final project</a></h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <a href="https://github.com/AnthonyJohnson101">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={styles.image}
              className="d-block w-100"
              src="https://user-images.githubusercontent.com/116526152/234118898-c0a67c54-320f-465a-9d63-9806fa9881a4.png"
              alt="Application Image"
            />
            <Carousel.Caption>
              <h3>Node Team Generator</h3>
              <p>
                A node CLI application that generates html. Uses test-driven development standards.
              </p>
              <a href="https://github.com/AnthonyJohnson101/team-generator">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={styles.image}
              className="d-block w-100"
              src="https://user-images.githubusercontent.com/116526152/234422292-c44a8184-45a1-4086-9e5a-71d221205b10.png"
              alt="Application Image"
            />
            <Carousel.Caption>
              <h3>E-Commerce Back-End</h3>
              <p>
                Strictly back-end application to show proficency in common ecommerce practices.
              </p>
              <a href="https://github.com/AnthonyJohnson101/ecommerce">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={styles.image}
              className="d-block w-100"
              src="https://user-images.githubusercontent.com/116526152/210303611-12de4abc-2740-4da8-aa16-1fae62287650.png"
              href="https://anthonyjohnson101.github.io/work-day-scheduler/"
              alt="Application Image"
            />
            <Carousel.Caption>
              <h3><a>Work Day Scheduler</a></h3>
              <p>
                A very basic application to demonstrate local storage data persistence.
              </p>
              <a href="https://github.com/AnthonyJohnson101/work-day-scheduler">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    
  );
}
