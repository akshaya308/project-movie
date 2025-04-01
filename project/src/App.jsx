import React, { useState } from "react";
import "./App.css";

const moviesData = {
  horror: [
    { id: 1, title: "The Conjuring", image:"/image1.png", description: "A chilling horror movie based on real-life events." },
    { id: 2, title: "Insidious", image: "/image3.png", description: "A family is haunted by a dark supernatural presence." },
    { id: 3, title: "It", image: "/image4.png", description: "A terrifying story of a demonic clown preying on children." },
    { id: 4, title: "A Quiet Place", image: "/image5.png", description: "A family must live in silence to avoid blind monsters." },
    { id: 5, title: "The Nun", image: "/image7.png", description: "A dark entity terrorizes a convent in Romania." },
  ],
  action: [
    { id: 6, title: "Mad Max: Fury Road", image: "/image.png", description: "In a post-apocalyptic world, Max teams up with a rebel warrior." },
    { id: 7, title: "John Wick", image: "/image8.png", description: "A retired hitman seeks vengeance against the men who wronged him." },
    { id: 8, title: "Gladiator", image: "/image9.png", description: "A betrayed Roman general seeks revenge against the emperor." },
    { id: 9, title: "Die Hard", image: "/image2.png", description: "A New York cop battles terrorists inside a skyscraper." },
    { id: 10, title: "The Dark Knight", image: "/image10.png", description: "Batman faces off against the Joker in Gotham City." },
  ],
  sciFi: [
    { id: 11, title: "Interstellar", image: "/image11.png", description: "A group of astronauts travel through a wormhole to save humanity." },
    { id: 12, title: "Inception", image: "/image12.png", description: "A thief who enters the dreams of others is given a chance to redeem himself." },
    { id: 13, title: "The Matrix", image: "/image13.png", description: "A hacker discovers that the world around him is a simulated reality." },
    { id: 14, title: "Blade Runner 2049", image: "/image14.png", description: "A new blade runner uncovers a long-buried secret that could reshape society." },
    { id: 15, title: "Dune", image: "/image16.png", description: "A young nobleman must embrace his destiny on the desert planet Arrakis." },
  ],
};

export default function App() {
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = Object.keys(moviesData).reduce((acc, genre) => {
    acc[genre] = moviesData[genre].filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    return acc;
  }, {});

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <div>
          <Navbar onLogout={() => setIsLoggedIn(false)} setActivePage={setActivePage} />
          {activePage === "home" && (
            <Home
              search={search}
              setSearch={setSearch}
              moviesData={filteredMovies}
              onMovieClick={handleMovieClick}
            />
          )}
          {activePage === "about" && <About />}
          {activePage === "description" && <Description />}
        </div>
      )}

      {/* Movie Details Modal */}
      {selectedMovie && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.description}</p>
            <button className="close-modal" onClick={handleCloseDetails}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Login({ onLogin }) {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome to MovieZone</h2>
        <input type="email" placeholder="Enter your email" className="login-input" />
        <input type="password" placeholder="Enter your password" className="login-input" />
        <button className="login-button" onClick={onLogin}>Login</button>
      </div>
    </div>
  );
}

function Navbar({ onLogout, setActivePage }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">🎬 MovieZone</div>
      </div>
      <div className="navbar-right">
        <button className="nav-button" onClick={() => setActivePage("home")}>Home</button>
        <button className="nav-button" onClick={() => setActivePage("about")}>About</button>
        <button className="nav-button" onClick={() => setActivePage("description")}>Description</button>
        <button className="logout-button" onClick={onLogout}>Sign Out</button>
      </div>
    </nav>
  );
}

function Home({ search, setSearch, moviesData, onMovieClick }) {
  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      
    
    
      <h2 className="section-title">Horror Movies</h2>
      <div className="movies-grid">
        {moviesData.horror.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <h3 className="movie-title">{movie.title}</h3>
            <button className="details-button" onClick={() => onMovieClick(movie)}>
              Details
            </button>
          </div>
        ))}
      </div>
      <h2 className="section-title">Sci-Fi Movies</h2>
      <div className="movies-grid">
        {moviesData.sciFi.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <h3 className="movie-title">{movie.title}</h3>
            <button className="details-button" onClick={() => onMovieClick(movie)}>
              Details
            </button>
          </div>
        ))}
      </div>
      <h2 className="section-title">action Movies</h2>
      <div className="movies-grid">
        {moviesData.action.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <h3 className="movie-title">{movie.title}</h3>
            <button className="details-button" onClick={() => onMovieClick(movie)}>
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
    
  );
}

function About() {
  return (
    <div className="page-content">
      <h2>About MovieZone</h2>
      <p>MovieZone is a platform that helps you find the best movies based on your preferences. From action-packed thrillers to mind-bending sci-fi, we have it all!</p>
    </div>
  );
}

function Description() {
  return (
    <div className="page-content">
      <h2>Description</h2>
      <p>With MovieZone, you can explore a wide range of movies categorized by genre. Use our search functionality to find your favorites or browse through our recommendations.</p>
    </div>
  );
}