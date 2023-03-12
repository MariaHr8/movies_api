class movie {
    constructor(id, imdbId, title, releaseDate, trailerLink, genres, poster, backdrops, reviewIds) {
        this.id = id;
        this.imdbId = imdbId;
        this.title = title;
        this.releaseDate = releaseDate;
        this.trailerLink = trailerLink;
        this.genres = genres;
        this.poster = poster;
        this.backdrops = backdrops;
        this.reviewIds = reviewIds;
        return this;
    }

    print() {
        console.log(JSON.stringify(this, null, 2));
    }
}

export default movie;