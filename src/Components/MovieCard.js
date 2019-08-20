import React from 'react'
import Review from './Review'

class MovieCard extends React.Component{

  render(){
      return(
        <div>
          <div className="card">
            <div className="card-body">
            <h4 className="card-title">{this.props.movie.title} ({this.props.movie.year})</h4>
            <div><img alt={""} src={this.props.movie.poster}></img></div>
            <h5 className="card-text">{this.props.movie.genre} </h5>
            <p className="card-text">{this.props.movie.plot}</p>
            <p>Reviews: <Review review={this.props.movie.review}/></p>
            <button className="button" onClick={this.props.handleClick}>Add to Favourites</button><br></br>
            <button className="button" onClick={this.props.handleUpdate}  >Add Review</button>
            <input onChange={this.props.handleChange} />
            </div>
          </div>

        </div>
        )
      }
  }



export default MovieCard
