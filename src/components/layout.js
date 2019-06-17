import React from 'react'
import PropTypes from 'prop-types'
import Sticky from "react-stickynode"
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header/'
import ResetCss from "./resetCSS"
import { theme } from '../theme'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render = { data => ( 
      <ThemeProvider theme={theme}>
        <>
          <ResetCss/>
          
          <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
            <Header className='header' siteTitle={data.site.siteMetadata.title} />
          </Sticky>
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
