import * as React from 'react';
import { Row, Col } from "reactstrap";

export const HomePage: React.FC = () => {
    return (
    <div className="home-main">
      <Row className="home-row tan">
        <Col>
          Test
        </Col>
      </Row>
      <Row className="home-row green">
        {/* <Col>
          .col
        </Col> */}
      </Row>
      <Row className="home-row red">
        {/* <Col>
          .col
        </Col> */}
      </Row>
    </div>

  );
}

export default HomePage