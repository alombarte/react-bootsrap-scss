import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Movie } from './Movie'

export class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array
  }

  render() {
    const { movies } = this.props
    return (
      <div className="row">
        {movies.map(movie => {
          return (
            <Movie
              title={movie.Title}
              poster={movie.Poster}
              year={movie.Year}
              id={movie.imdbID}
              key={movie.imdbID}
            />
          )
        })}
      </div>
    )
  }
}
