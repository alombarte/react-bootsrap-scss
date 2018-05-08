import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Movie extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
  }

  render() {
    const { id, poster, title, year } = this.props

    return (
      <div className="col-sm-4 mb-4">
        <Link to={`/detail/${id}`} className="card">
          <div className="card">
            <img src={poster} alt={title} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">Year {year}</p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}
