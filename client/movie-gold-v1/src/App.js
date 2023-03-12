import './App.css';
import react from 'react';
import movie from './movie';

class App extends react.Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    const response = await fetch('/api/v1/movies');
    const body = await response.json();

    var newMovies = body.map(jsonmovie => {
      return new movie(jsonmovie["id"], jsonmovie["imdbId"], jsonmovie["title"],
        jsonmovie["releaseDate"], jsonmovie["trailerLink"], jsonmovie["genres"],
        jsonmovie["poster"], jsonmovie["backdrops"], jsonmovie["reviewIds"]);
    });

    this.setState({ movies: newMovies });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className='App'>
        <header className="App-header">
          <div className="App-intro">
            <h2>Movies</h2>
            {movies.map(movie =>
              <div key={movie.imdbId}>
                {movie.title}
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
