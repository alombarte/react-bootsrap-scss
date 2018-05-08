import React from 'react'
import Helmet from 'react-helmet'

class Site extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Helmet
          title="Movies example"
          meta={[
            {
              name: 'description',
              content: 'An example site'
            }
          ]}
        />
        {this.props.children}
      </div>
    )
  }
}
export default Site
