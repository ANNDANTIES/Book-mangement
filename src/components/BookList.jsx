import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
const BookList = () => {
    const [books, setBooks] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 10;

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get("https://book-management-server-2-qccz.onrender.com/books/all");
            setBooks(response.data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    const deleteBook = async (id) => {
        try {
            await axios.delete(`https://book-management-server-2-qccz.onrender.com/books/delete/${id}`);
            alert("Book deleted successfully!");
            fetchBooks();
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    };

    const sortBooks = (key) => {
        const sortedBooks = [...books].sort((a, b) => {
            if (sortOrder === "asc") {
                return a[key].localeCompare(b[key]);
            } else {
                return b[key].localeCompare(a[key]);
            }
        });
        setBooks(sortedBooks);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mt-4">
            <h2>📚 Book List</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th onClick={() => sortBooks("title")}>Title 📖</th>
                        <th onClick={() => sortBooks("author")}>Author ✍️</th>
                        <th>Publication Date 📅</th>
                        <th>ISBN 🔢</th>
                        <th>Genre 🎭</th>
                        <th>Rating ⭐</th> 
                        <th>Details 🔍</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {currentBooks.map((book) => (
                        <tr key={book.id}>
                            <td>
                                <Link className="text-decoration-none text-dark"to={`/book/${book.id}`}>{book.title}</Link>
                            </td>
                            <td>{book.author}</td>
                            <td>{book.publicationDate}</td>
                            <td>{book.isbn}</td>
                            <td>{book.genre}</td>
                            <td>{book.rating}</td>
                            <td>
                                <Button variant="danger" onClick={() => deleteBook(book.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Pagination */}
            <Pagination className="pb-5">
                {Array.from({ length: Math.ceil(books.length / booksPerPage) }, (_, index) => (
                    <Pagination.Item key={index + 1} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    );
};

export default BookList;
