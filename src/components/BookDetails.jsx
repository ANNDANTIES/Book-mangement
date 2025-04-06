import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Table } from "react-bootstrap";

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
            console.log("Fetching book details for ID:", id);
            const response = await axios.get(`https://book-management-server-1-512x.onrender.com/books/all/${id}`);
            console.log("Response from backend:", response.data);
            setBook(response.data);
        } catch (error) {
            console.error("Error fetching book details:", error);
        }
    };

    const fetchExternalBookData = async (title) => {
        try {
            console.log("Fetching external data for:", title);
            const response = await axios.get(`http://localhost:8080/proxy/books/search?query=${title}`);
            console.log("External data response:", response.data);

            if (Array.isArray(response.data) && response.data.length > 0) {
                setExternalData(response.data[0]);
            }
        } catch (error) {
            console.error("Error fetching external book data:", error);
        }
    };

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <h2>📖 {book.title}</h2>

            {!showMoreDetails && (
                <Table className="mb-3">
                    <tbody>
                        <tr><th>Title:</th><td>{book.title}</td></tr>
                        <tr><th>Author:</th><td>{book.author}</td></tr>
                        <tr><th>Genre:</th><td>{book.genre}</td></tr>
                        <tr><th>Publication Date:</th><td>{book.publicationDate || "Unknown"}</td></tr>
                        <tr><th>ISBN:</th><td>{book.isbn}</td></tr>
                        <tr><th>Rating:</th><td>⭐ {book.rating}</td></tr>
                    </tbody>
                </Table>
            )}

            {showMoreDetails && externalData && (
                <div>
                    <img
                        src={externalData?.medium_cover || "default-image.jpg"}
                        alt="Book Cover"
                        style={{ width: "200px", height: "300px" }}
                    />

                    
                    <p><strong>Publisher:</strong> {externalData.authors || "Unknown"}</p>
                    <p><strong>Publisher:</strong> {externalData.publisher || "Unknown"}</p>
                    <p><strong>Average Rating:</strong> {externalData.averageRating|| "No title available"}</p>
                    <p><strong>Description:</strong> {externalData.description || "N/A"}</p>
                    
                </div>
            )}

            {/* Buttons for toggling sections */}
            <div className="mb-3">
                <Button 
                    className={`me-2 ${!showMoreDetails ? "btn-primary" : "btn-secondary"}`}
                    onClick={() => setShowMoreDetails(false)}
                >
                    📚 Basic Details
                </Button>

                <Button 
                    className={`${showMoreDetails ? "btn-primary" : "btn-secondary"}`}
                    onClick={() => setShowMoreDetails(true)}
                >
                    📖 More Details
                </Button>
            </div>

            <Button className="btn-primary m-5 float-end." onClick={() => navigate("/")}>
                🔙 Back to Book List
            </Button>
        </div>
    );
};

export default BookDetails;
