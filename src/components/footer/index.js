import { React, Component } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import './styles.css';
import Goal from './img/goal.png';
import Books from  './img/books.png';
import Parchment from './img/parchment.png';
import Bag from './img/bag.png';
import Sword from './img/sword.png';

class Footer extends Component {
  render() {
    return (
      <Row className="pb-4 justify-content-md-center text-center">
        <Col md={2} className="mt-4">
          <Card className="footer-card border-radius card-shadow">
            <Card.Body className="align-middle">
              <Image src={ Parchment } className="icon-footer mr-2" fluid />
              <strong>Sobre</strong>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2} className="mt-4">
          <Card className="footer-card border-radius card-shadow">
            <Card.Body className="align-middle">
              <Image src={ Books } className="icon-footer mr-2" fluid />
              <strong>Graduação</strong>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2} className="mt-4">
          <Card className="footer-card border-radius card-shadow footer-card-active">
            <Card.Body className="align-middle">
              <Image src={ Sword } className="icon-footer mr-2" fluid />
              <strong>Experiências</strong>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2} className="mt-4">
          <Card className="footer-card border-radius card-shadow">
            <Card.Body className="align-middle">
              <Image src={ Bag } className="icon-footer mr-2" fluid />
              <strong>Habilidades</strong>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2} className="mt-4">
          <Card className="footer-card border-radius card-shadow">
            <Card.Body className="align-middle">
              <Image src={ Goal } className="icon-footer mr-2" fluid />
              <strong>Extras</strong>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Footer;