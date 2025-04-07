import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Table, Row, Col, Spinner, Container } from "react-bootstrap";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [externalData, setExternalData] = useState(null);
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  useEffect(() => {
    if (book?.title) {
      fetchExternalBookData(book.title);
    }
  }, [book]);

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(
        `https://book-management-server-2-qccz.onrender.com/books/all/${id}`
      );
      setBook(response.data);
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  const fetchExternalBookData = async (title) => {
    try {
        console.log("Fetching external data for:", title);
        const response = await axios.get(`https://book-management-server-2-qccz.onrender.com/proxy/books/search?query=${title}`);
        console.log(response)
        if (response.data.length > 0) {
            console.log("External data:", response.data[0]);
            setExternalData(response.data[0]);
        }
    } catch (error) {
        console.error("Error fetching external book data:", error);
    }
};

  if (!book) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading book details...</p>
      </div>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="text-center text-primary mb-4">📘 {book.title}</h2>

      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          {!showMoreDetails && (
            <Table striped bordered hover responsive className="bg-white shadow">
              <tbody>
                <tr><th>Title</th><td>{book.title}</td></tr>
                <tr><th>Author</th><td>{book.author}</td></tr>
                <tr><th>Genre</th><td>{book.genre}</td></tr>
                <tr><th>Publication Date</th><td>{book.publicationDate || "Unknown"}</td></tr>
                <tr><th>ISBN</th><td>{book.isbn}</td></tr>
                <tr><th>Rating</th><td>⭐ {book.rating}</td></tr>
              </tbody>
            </Table>
          )}

          {showMoreDetails && (
            <div className="bg-light p-4 rounded shadow">
              <Row>
                <Col xs={12} md={5} className="text-center mb-3">
                <img
                    src={externalData?.medium_cover || "https://placehold.co/200x300"}
                    alt="Book Cover"
                    className="img-fluid rounded"
                    style={{ maxHeight: "300px" }}
                    />

                </Col>
                <Col xs={12} md={7}>
                  <p><strong>Authors:</strong> {externalData?.authors || "Unknown"}</p>
                  <p><strong>Publisher:</strong> {externalData?.publisher || "Unknown"}</p>
                  <p><strong>Average Rating:</strong> ⭐ {externalData?.averageRating || "N/A"}</p>
                  <p><strong>Description:</strong> {externalData?.description || "No description available."}</p>
                </Col>
              </Row>
            </div>
          )}

          <div className="d-flex justify-content-center my-4 flex-wrap gap-2">
            <Button
              variant={!showMoreDetails ? "primary" : "outline-primary"}
              onClick={() => setShowMoreDetails(false)}
            >
              📚 Basic Details
            </Button>
            <Button
              variant={showMoreDetails ? "primary" : "outline-primary"}
              onClick={() => setShowMoreDetails(true)}
            >
              📖 More Details
            </Button>
          </div>

          <div className="text-center">
            <Button variant="dark" onClick={() => navigate("/")}>
              🔙 Back to Book List
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;
