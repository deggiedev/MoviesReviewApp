import React from 'react'
import Review from './Review'
const MovieCard = (props) => {
const { movie } = props;

    return(
      <div>
        <div className="card">
          <div className="card-body">
          <h4 className="card-title">{movie.title} ({movie.year})</h4>
          <div><img src={movie.poster}></img></div>
          <h5 className="card-text">{movie.genre} </h5>
          <p className="card-text">{movie.plot}</p>
          <p className="card-text">Review: {movie.review}</p>
          <button className="button" onClick={props.handleClick}>Add to Favourites</button>

          <button className="button" onClick={()=> props.addReview}>Add Review</button>
          </div>
        </div>

      </div>
    )
  }



export default MovieCard
