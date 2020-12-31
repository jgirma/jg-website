import React from "react";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

const ProjectTab = ({ img, gif, alt, summary, link, src }) => (
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row>
      <Col sm={3}>
        <Nav variant="tabs" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="first">Cover</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Gif</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Summary</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={9}>
        <Tab.Content style={{ width: "25rem", height: "20rem" }}>
          <Tab.Pane eventKey="first">
            <img src={img} alt={alt} />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <img src={gif} alt={alt} />
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <p>{summary}</p>
            {link && <a href={link}>Check out the Site!</a>}
            {src && <a href={src}>Source Code</a>}
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
);
export default ProjectTab;
