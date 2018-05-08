import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY

class MovieDetail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { movie: {} }

  _fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(movie => {
        console.log(movie)
        this.setState({ movie })
      })
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this._fetchMovie({ id })
  }

  _goBack() {
    window.history.back()
  }
  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-auto">
            <img alt={Title} src={Poster} />
          </div>
          <div className="col-md">
            <h1>{Title}</h1>
            <p>{Plot}</p>
            <p>
              <strong>Actors:</strong> {Actors}
            </p>
            <p>
              <strong>Metascore:</strong> {Metascore}
            </p>

            <button className="btn btn-primary" onClick={this._goBack}>
              Back
            </button>
          </div>
        </div>
        <Helmet title={Title + ' - Movie Details'} />
      </div>
    )
  }
}

export default MovieDetail
