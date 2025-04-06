import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";
// import {addBookAPi} from '../service/allAPI'
const BookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    genre: "Fiction",
    rating: 1,
    publicationDate: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form before submission
  const validateForm = () => {
    let newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.author.trim()) newErrors.author = "Author is required";
    if (!formData.isbn.match(/^\d{13}$/)) newErrors.isbn = "ISBN must be 13 digits";
    if (!formData.publicationDate) newErrors.publicationDate = "Publication Date is required";
    if (formData.rating < 1 || formData.rating > 5) newErrors.rating = "Rating must be between 1 and 5";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post("https://book-management-server-1-512x.onrender.com/books/add", formData, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200 || response.status === 201) {
        alert("Book added successfully!");
      }
      } catch (error) {
          console.error("Error:", error);
          alert("Failed to add book. Please try again.");
      }
  };

  return (
    <div className="container mt-4">
      <h2>Add a New Book</h2>

      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errors.api && <Alert variant="danger">{errors.api}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            isInvalid={!!errors.title}
            maxLength={100}
            required
          />
          <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            isInvalid={!!errors.author}
            maxLength={50}
            required
          />
          <Form.Control.Feedback type="invalid">{errors.author}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="text"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            isInvalid={!!errors.isbn}
            maxLength={13}
            required
          />
          <Form.Control.Feedback type="invalid">{errors.isbn}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Select name="genre" value={formData.genre} onChange={handleChange}>
            <option>Fiction</option>
            <option>Non-Fiction</option>
            <option>Mystery</option>
            <option>Fantasy</option>
            <option>Romance</option>
            <option>Sci-Fi</option>
            <option>Others</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rating (1-5)</Form.Label>
          <Form.Control
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            isInvalid={!!errors.rating}
            required
          />
          <Form.Control.Feedback type="invalid">{errors.rating}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Publication Date</Form.Label>
          <Form.Control
            type="date"
            name="publicationDate"
            value={formData.publicationDate}
            onChange={handleChange}
            isInvalid={!!errors.publicationDate}
            required
          />
          <Form.Control.Feedback type="invalid">{errors.publicationDate}</Form.Control.Feedback>
        </Form.Group>

        <Button className='btn-info'variant="primary" type="submit">Add Book
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
