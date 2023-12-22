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
import SearchBarPage from "./pages/SearchPage/SearchBar"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filterBooks = () => {
    const filteredBooks = books.filter(
      (book) =>
        book.title.includes(searchTerm) ||
        book.ratiing.includes(searchTerm) ||
        book.author.includes(searchTerm)
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
        <Route path="/bookdetails" element={<BookDetailsPage />} />
        <Route path="/favoriteslist" element={<PrivateRoute><FavoritesPage /></PrivateRoute>} />
        <Route path="/search" element={<PrivateRoute><SearchBarPage onSearchChange ={filterBooks} setSearchTerm={setSearchTerm} searchTerm={searchTerm} /></PrivateRoute>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
