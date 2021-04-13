import { React, Component } from 'react';
import { Col, Card, ListGroup } from 'react-bootstrap';
import './styles.css';

class Content extends Component {
  render() {
    return (
      <Col md={8}>
        <Card className="mx-4 p-2 content-card border card-shadow overflow-auto">
          <Card.Title className="p-4 mx-4 p-2 mt-4 border content-title">
            <strong>Experiências</strong>
          </Card.Title>
          <Card.Body className="mb-4">
            <ListGroup className="border">
              <ListGroup.Item action href="#">Nick Builder - Back-End Developer</ListGroup.Item>
              <ListGroup.Item action href="#">Grupo Delta - Full-Stack Developer</ListGroup.Item>
              <ListGroup.Item action href="#">Teknisa - Estágio Programador</ListGroup.Item>
              <ListGroup.Item action href="#">Stefanini - Analista de Suporte Jr.</ListGroup.Item>
              <ListGroup.Item action href="#">Etros Promoções - Estágio</ListGroup.Item>
              <ListGroup.Item action href="#">Bot Recuperação de Dados - Estágio</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Content;