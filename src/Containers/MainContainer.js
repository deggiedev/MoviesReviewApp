import React from 'react'
import MovieContainer from './MovieContainer'
import SearchBar from '../Components/SearchBar'

const movieAPI = ('http://localhost:3000/movies')

const getMovies = () =>
  fetch(movieAPI)
  .then(resp => resp.json())


class MainContainer extends React.Component{

state = {
  movies: [],
  selectedMovieIds: [],
  filterChoice: "None",
  sortChoice: "",
  reviewInput: ""
}

componentDidMount(){
  getMovies()
  .then(movies => this.setState({movies}))
  
}

updateReview = (movieObj) => {
    fetch(`http://localhost:3000/movies/${movieObj.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: movieObj.id,
        title: movieObj.title,
        genre: movieObj.genre,
        plot: movieObj.plot,
        poster: movieObj.poster,
        year: movieObj.year,
        review: [this.state.reviewInput].concat(movieObj.review)}
      )
    })
    getMovies()
    .then(movies => this.setState({movies}))
    
}

addReview = event => {
  this.setState({reviewInput: event.target.value})
}

selectMovie = movie => {
    if (this.state.selectedMovieIds.includes(movie.id)) return;
  this.setState({
    selectedMovieIds: [...this.state.selectedMovieIds, movie.id]
  })
}


getSelectedMovie = () =>
this.state.selectedMovieIds.map(
  selectedMovieId =>
  this.state.movies.find(movie => movie.id === selectedMovieId))

removeMovie = movie =>
this.setState({
  selectedMovieIds: this.state.selectedMovieIds.filter(selectedMovieId => selectedMovieId !==movie.id)
})


filterMovies = () => {
  return this.state.movies.filter(movie => {
    if(this.state.filterChoice === "None") return true;
    if (this.state.filterChoice === "Drama") return movie.genre === "Drama";
    if (this.state.filterChoice === "Crime") return movie.genre === "Crime";
    if (this.state.filterChoice === "Thriller") return movie.genre === "Thriller";
    if (this.state.filterChoice === "Action") return movie.genre === "Action";
  })
}

changeFilterChoice = event => {
  this.setState({filterChoice: event.target.value});
}


sortMovies = (filteredMovies) => {
  return filteredMovies.sort((movieA, movieB) => {
    if (this.state.sortChoice === "") return 0;
    if (this.state.sortChoice === "Alphabetically") {return (movieA.title.localeCompare(movieB.title))}
    if(this.state.sortChoice === "year") {return (movieB.year - movieA.year)}
  })
}

changeSortChoice = event => {
  this.setState({ sortChoice: event.target.value})

}



render(){
    const filteredMovies = this.filterMovies();
    const sortedMovies = this.sortMovies(filteredMovies)
  return(
    <div>
      <SearchBar
      changeFilterChoice={this.changeFilterChoice}
      filterChoice={this.state.filterChoice}
      changeSortChoice={this.changeSortChoice}
      sortChoice={this.state.sortChoice}
      />
    <div className="row">
    <div className="col-4">
    <MovieContainer movies={this.getSelectedMovie()} selectMovie={this.removeMovie} title={"Favourite Movies"}/>
    </div>
    <div className="col-8">
    <MovieContainer movies={sortedMovies} selectMovie={this.selectMovie} title={"Movies"} addReview={this.addReview} updateReview={this.updateReview} />
    </div>
    </div>
    </div>
  )
}


}










export default MainContainer
