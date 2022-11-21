import * as React from 'react';
import { Row, Col } from "reactstrap";

export const HomePage: React.FC = () => {
    return (
    <div className="home-main">
      <Row className="tan">
        <Col>
          Test 1
        </Col>
      </Row>
      <Row className="green">
      <Col>
          Test 2
        </Col>
      </Row>
      <Row className="red">
        <Col>
          Test 3
        </Col>
      </Row>
    </div>

  );
}

export default HomePage