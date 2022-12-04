import * as React from 'react';
import { Row, Col } from "reactstrap";

export const HomePage: React.FC = () => {
    return (
    <div>
      <Row className="tan">
        {/* TO DO:  Name/Picture  */}
        <Col>
          Test 1
        </Col>
      </Row>
      <Row className="green">
        {/* TO DO:  Services  */}
      <Col>
          Test 2
        </Col>
      </Row>
      <Row className="tan">
        {/* TO DO:  Contact/Appt info  */}
        <Col>
          Test 3
        </Col>
      </Row>
    </div>

  );
}

export default HomePage