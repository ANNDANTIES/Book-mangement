import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className=" text-center text-white">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={8}>
              <h1 className="display-4 fw-bold">Manage Your Books Easily 📖</h1>
              <p className="lead">Add, View, and Organize Your Book Collection with Ease.</p>
              <Button variant="primary" as={Link} to="/add-book" size="lg">
                Add Your First Book
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* CSS Styles */}
      <style>{`
        .hero-section {
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
                      url('https://source.unsplash.com/1600x900/?books,library') 
                      no-repeat center center/cover;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default Home;
