package dev.hristovm.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired // lets the framework know we want to instantiate the class
    private MovieRepository movieRepository;
    public List<Movie> allMovies(){
        return movieRepository.findAll();
    }

    public Optional<Movie> getMovie(String imdbId){
        // find by id may not find any - Optional<T> lets Java know we might get a null
        return movieRepository.findMovieByImdbId(imdbId);
    }
}
