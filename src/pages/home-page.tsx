import * as React from 'react';
import { Row, Col } from "reactstrap";

export const HomePage: React.FC = () => {
    return (
    <div>
      <Row className="home-row">
        <Col >
          .col
        </Col>
      </Row>
      <Row className="home-row">
      <Col>
          .col
        </Col>
      </Row>
      <Row className="home-row">
        <Col>
          .col
        </Col>
      </Row>
    </div>

  );
}

export default HomePage

// style={{"textAlign": "center", "backgroundColor": "#FBECC1", "color": "#DAAD86", "lineHeight": "430%"}}
