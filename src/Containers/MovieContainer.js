import React from 'react'
import MovieCard from '../Components/MovieCard'

class MovieContainer extends React.Component{


  state = {
    searchInput: '',
    reviewInput: '' 
  }

  render(){
    return(
        <div>
        <input className='bg-light-green pa2 input-reset ba w-50 measure' type="text" placeholder="Search for Movie" onChange={(event) => this.setState({searchInput: event.target.value})}/>

        <h2>{this.props.title}</h2>
        {
          this.props.movies.filter((movie) => movie.title.toLowerCase().includes(this.state.searchInput.toLowerCase()))
          .map(movie => <MovieCard movie={movie} handleClick={() => this.props.selectMovie(movie)} handleChange={(event) => this.props.addReview(event)} handleUpdate={() => this.props.updateReview(movie)} />)
      }
      </div>

    )
  }
}



export default MovieContainer
