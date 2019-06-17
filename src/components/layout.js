import React from 'react'
import PropTypes from 'prop-types'
import Sticky from "react-stickynode"
import { ThemeProvider } from 'styled-components'

import Header from './Header/'
import ResetCss from "./resetCSS"
import { theme } from '../theme'

const Layout = ({ children }) => {
  return ( 
    <ThemeProvider theme={theme}>
      <>
        <ResetCss/>
        
        <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
          <Header className='header'/>
        </Sticky>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: '1.45rem',
          }}
        >
          {children}
        </div>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
