// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from 'react';


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import BookDetailsPage from "./pages/BookDetailsPage/Book";
import FavoritesPage from "./pages/FavoritesPage/FavoritesList";
import SearchPage from "./pages/SearchPage/SearchPage"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const filterBooks = () => {
    const filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.rating.toString().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks(filteredBooks);
  };
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/book-details" element={<BookDetailsPage />} />
        <Route path="/favoriteslist" element={<PrivateRoute><FavoritesPage /></PrivateRoute>} />
        <Route path="/search" element={<PrivateRoute><SearchPage onSearchChange ={filterBooks} setSearchTerm={setSearchTerm} searchTerm={searchTerm} /></PrivateRoute>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
