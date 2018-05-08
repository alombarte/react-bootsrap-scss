import React from 'react'
import PropTypes from 'prop-types'

import Site from './layout/Site'
import Content from './layout/Content'
import Router from './layout/Router'

import './styles.css'

const Layout = ({ children }) => (
  <Site>
    <Content>
      <Router />
    </Content>
  </Site>
)

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout
