import React, { Component } from 'react'

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY

export class SearchForm extends Component {
  state = {
    movie: ''
  }

  _updateState = e => {
    this.setState({ movie: e.target.value })
  }

  _fetchData = e => {
    e.preventDefault()
    const { movie } = this.state

    fetch(`http://www.omdbapi.com/?s=${movie}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(results => {
        const { Search = [], totalResults = 0 } = results
        console.log({ Search, totalResults })
        this.props.onResults(Search)
      })
  }

  render() {
    return (
      <div>
        {API_KEY.length === 0 ? (
          <div className="alert alert-warning" role="alert">
            Please set your <code>API_KEY</code> in <code>.env</code> file. You
            can get yours for free{' '}
            <a href="http://www.omdbapi.com/apikey.aspx">here</a>
          </div>
        ) : (
          ''
        )}
        <form onSubmit={this._fetchData} className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Find a movie"
            onChange={this._updateState}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    )
  }
}
