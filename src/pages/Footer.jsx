import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container text-center text-md-start">
        <div className="row">

          {/* About Section */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h5 className="text-uppercase fw-bold">📚 Book Management</h5>
            <p>
              Empowering readers with organization and easy access. Track, manage,
              and discover the joy of reading.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/add-book" className="text-white text-decoration-none">Add Book</a></li>
              <li><a href="/view-bookList" className="text-white text-decoration-none">View Books</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <p><i className="fas fa-envelope me-2"></i> info@bookmanagement.com</p>
            <p><i className="fas fa-phone me-2"></i> +91 9876543210</p>
          </div>

          {/* Embedded Video */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Why Read Books?</h6>
            <div className="ratio ratio-16x9">
            <iframe width="853" height="480" src="https://www.youtube.com/embed/e46AGbBctQk?autoplay" title="Benefits Of Reading" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center p-3 bg-secondary mt-3">
        © 2025 Book Management System. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
