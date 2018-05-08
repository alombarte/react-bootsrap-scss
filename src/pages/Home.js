import React, { Component } from 'react'
import { Title } from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import { MoviesList } from '../components/MoviesList'

class Home extends Component {
  state = { results: [], usedSearch: false }

  _handleResults = results => {
    this.setState({ results, usedSearch: true })
  }

  _renderResults() {
    return this.state.results.length === 0 ? (
      <p>No results</p>
    ) : (
      <MoviesList movies={this.state.results} />
    )
  }

  render() {
    return (
      <div className="container">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <Title>Movie Search</Title>
          <p className="lead">An example using React + Bootstrap + SCSS</p>
        </div>
        <section>
          <div className="card-deck mb-3 text-center">
            <div className="">
              <SearchForm onResults={this._handleResults} />
            </div>
          </div>
          <div className="row">
            {this.state.usedSearch ? (
              this._renderResults()
            ) : (
              <small>Type text to find related results</small>
            )}
          </div>
        </section>
      </div>
    )
  }
}

export default Home
