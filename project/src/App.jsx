import React, { useState } from "react";
import "./App.css"; // Ensure this file exists
import image from "./assets/image.png";
import image1 from "./assets/Lilo & Stitch.jpg";
import image2 from "./assets/thunder.jpg";
import image3 from "./assets/black.jpg";
import image4 from "./assets/avathar3.jpg";
import image5 from "./assets/deadpool3.jpg";
import image6 from "./assets/joker2.jpg";
import image7 from "./assets/starwars.jpg";
import image8 from "./assets/insideout2.jpg";
import image9 from "./assets/kraven.jpg";
import image10 from "./assets/beetlejuice2.jpg";
import image11 from "./assets/gladiator2.jpg";
const movies = [
  {
    title: "Black Bag",
    image: image3,
    genre: "Spy Drama",
    director: "Steven Soderbergh",
    releaseDate: "March 14, 2025",
    rating: "Not Yet Rated",
    description: "A suspenseful spy drama where intelligence officers navigate betrayal and deception.",
    cast: ["Cate Blanchett", "Michael Fassbender", "Regé-Jean Page", "Marisa Abela"],
    source: "https://editorial.rottentomatoes.com/article/the-most-anticipated-movies-of-2025/"
  },
  {
    title: "Thunderbolts*",
    image: image2,
    genre: "Superhero",
    director: "Jake Schreier",
    releaseDate: "May 2, 2025",
    rating: "Not Yet Rated",
    description: "A group of anti-heroes must work together to survive after being trapped by a powerful adversary.",
    cast: ["Florence Pugh", "Sebastian Stan", "David Harbour", "Wyatt Russell"],
    source: "https://www.vulture.com/article/everything-we-know-about-thunderbolts-cast-trailer-crew.html"
  },
  {
    title: "Lilo & Stitch",
    image: image1,
    genre: "Family, Adventure",
    director: "Dean Fleischer Camp",
    releaseDate: "May 23, 2025",
    rating: "Not Yet Rated",
    description: "A live-action remake where a young girl's wish for a friend brings a chaotic alien into her life.",
    cast: ["Maia Kealoha", "Chris Sanders", "Tia Carrere", "Amy Hill"],
    source: "https://ew.com/watch-stitch-crash-land-on-earth-in-first-lilo-and-stitch-trailer-11695595"
  },
  {
    title: "Mission: Impossible - The Final Reckoning",
    image: image,
    genre: "Action, Thriller",
    director: "Christopher McQuarrie",
    releaseDate: "May 23, 2025",
    rating: "Not Yet Rated",
    description: "Ethan Hunt faces his most dangerous mission yet in this thrilling conclusion to the series.",
    cast: ["Tom Cruise", "Simon Pegg", "Rebecca Ferguson", "Ving Rhames"],
    source: "https://www.forbes.com/sites/timlammers/2024/12/22/25-big-movies-coming-to-theaters-in-2025/"
  },
  {
    title: "Avatar 3",
    image: image4,
    genre: "Sci-Fi, Adventure",
    director: "James Cameron",
    releaseDate: "December 19, 2025",
    rating: "Not Yet Rated",
    description: "The journey of Pandora continues with breathtaking visuals and a compelling story.",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Stephen Lang"],
    source: "https://www.imdb.com/title/tt1757678/"
  },
  {
    title: "Deadpool 3",
    image: image5,
    genre: "Action, Comedy, Superhero",
    director: "Shawn Levy",
    releaseDate: "July 26, 2025",
    rating: "Not Yet Rated",
    description: "Deadpool joins forces with unexpected allies in this wild and hilarious adventure.",
    cast: ["Ryan Reynolds", "Hugh Jackman", "Morena Baccarin", "Stefan Kapicic"],
    source: "https://www.marvel.com/articles/movies/deadpool-3"
  },
  {
    title: "Joker: Folie à Deux",
    image: image6,
    genre: "Drama, Thriller",
    director: "Todd Phillips",
    releaseDate: "October 4, 2025",
    rating: "Not Yet Rated",
    description: "A deep dive into the twisted mind of Arthur Fleck and his descent into madness.",
    cast: ["Joaquin Phoenix", "Lady Gaga", "Zazie Beetz", "Brendan Gleeson"],
    source: "https://www.dc.com/movies/joker-2"
  },
  {
    title: "Untitled Star Wars Movie",
    image: image7,
    genre: "Sci-Fi, Adventure",
    director: "Sharmeen Obaid-Chinoy",
    releaseDate: "December 18, 2025",
    rating: "Not Yet Rated",
    description: "A new era of Star Wars begins with fresh characters and an exciting galactic saga.",
    cast: ["Daisy Ridley", "New Cast TBD"],
    source: "https://www.starwars.com/news/upcoming-star-wars-movies"
  },
  {
    title: "Gladiator 2",
    image: image11,
    genre: "Action, Drama, Historical",
    director: "Ridley Scott",
    releaseDate: "November 22, 2025",
    rating: "Not Yet Rated",
    description: "A new warrior rises in the Colosseum, continuing the epic tale of Gladiator.",
    cast: ["Paul Mescal", "Denzel Washington", "Barry Keoghan", "Connie Nielsen"],
  
  },
  {
    title: "Inside Out 2",
    image: image8,
    genre: "Animation, Comedy",
    director: "Kelsey Mann",
    releaseDate: "June 13, 2025",
    rating: "Not Yet Rated",
    description: "Riley grows up, and new emotions emerge.",
    cast: ["Amy Poehler", "Phyllis Smith", "Lewis Black"],
    source: "https://www.imdb.com/title/tt6561502/"
  },
  {
    title: "Fantastic Four",
    image: image7,
    genre: "Superhero",
    director: "Matt Shakman",
    releaseDate: "July 25, 2025",
    rating: "Not Yet Rated",
    description: "The Marvel Cinematic Universe introduces the Fantastic Four.",
    cast: ["TBD"],
    source: "https://www.imdb.com/title/tt10676048/"
  },
  {
    title: "The Batman Part II",
    image: image9,
    genre: "Action, Crime",
    director: "Matt Reeves",
    releaseDate: "October 3, 2025",
    rating: "Not Yet Rated",
    description: "Batman continues his fight against crime in Gotham City.",
    cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano"],
    source: "https://www.imdb.com/title/tt1877830/"
  }
];

export default function MovieRecommendation() {
  const [query, setQuery] = useState("");

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">🎬 Upcoming Movies 2025 🎥</h1>
        <p className="subtitle">Discover the most anticipated movies of 2025</p>
      </header>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="movie-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <div key={index} className="movie-card">
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <div className="movie-info">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-genre">Genre: {movie.genre}</p>
                <p className="movie-director">Director: {movie.director}</p>
                <p className="movie-release-date">Release Date: {movie.releaseDate}</p>
                <p className="movie-rating">⭐ Rating: {movie.rating}</p>
                <p className="movie-description">{movie.description}</p>
                <p className="movie-cast">Cast: {movie.cast.join(", ")}</p>
                <a href={movie.source} className="details-button" target="_blank" rel="noopener noreferrer">View Details</a>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">❌ No movies found</p>
        )}
      </div>
    </div>
  );
}                 
