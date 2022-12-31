import * as React from 'react';
import { Row, Col } from "reactstrap";
import home_image from "../images/home_image.jpg"

export const HomePage: React.FC = () => {
    return (
    <div>
      {/* <Row className="tan">
        <Col>
          <h2>Mobile Equine and Housecall Service</h2>
        </Col>
      </Row> */}
      <Row className="tan">
        <Col>
          <img className="homeImage" alt="homeImage" src={home_image} />
        </Col>
      </Row>
      <Row className="tan">
        <Col>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Col>
      </Row>
      <Row className="green">
        <Col>
          <h3>Dogs & Cats</h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </Col>
        <Col>
          <h3>Equine</h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </Col>
      </Row>
      <Row className="tan">
        <Col>
          Test 3
        </Col>
      </Row>
    </div>

  );
}

export default HomePage