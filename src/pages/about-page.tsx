import * as React from 'react';
import { Row, Col } from "reactstrap";
import dogs from "../images/dogs.jpg"


export const AboutPage: React.FunctionComponent = () => {

    return (
    <div>
        <Row className="blah">
            <Col className="test-col blah2">
                <img className="test-pic" src={dogs} />
            </Col>
            <Col className="test-col blah2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Col>
        </Row>
        <Row className="blah">
            <Col className="test-col o2 blah2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Col>
            <Col className="o1 test-col blah2">
                <img className="test-pic" src={dogs} />
            </Col>
        </Row>
    </div>
    );
}

export default AboutPage;