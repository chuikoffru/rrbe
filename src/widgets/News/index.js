import React from "react";
import { Row, Card } from "react-bootstrap";
import axios from "axios";

const News = async (props) => {
  const news = await axios.get(`/api/posts/${props.category}`).data;

  return (
    <Row>
      {news.map((item) => (
        <Card>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
};

export default News;
