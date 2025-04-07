import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section text-white text-center d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <h1 className="display-4 fw-bold mb-4">Manage Your Books Easily 📖</h1>
              <p className="lead mb-4">
                Add, view, and organize your personal library in one place. Start building your book collection today!
              </p>
              <Button variant="light" as={Link} to="/add-book" size="lg" className="fw-semibold shadow">
                ➕ Add Your First Book
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Custom Styles */}
      <style>{`
        .hero-section {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)),
                      url('https://source.unsplash.com/1600x900/?books,library') 
                      no-repeat center center/cover;
          padding: 2rem;
        }

        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2rem;
          }
          .hero-section p {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
