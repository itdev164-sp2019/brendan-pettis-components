import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider, ThemeConsumer } from 'styled-components'

import { Gray as theme } from '../themes/Gray/Gray'
import { Footer, Main } from '../components/Element'
import { Masthead, MastheadDrawer, DefaultLayout }from "../components/Masthead"

import "./layout.css"

export default class Layout extends React.Component {
  
  state = {
    drawerOpen: true,
    prevScrollPosition: null
  }
  
  render() {
  
    const { children } = this.props
     
    return (
      <ThemeProvider theme={theme}>
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
        render={data => (
          <div>
            <Masthead height="85px">
                <ThemeConsumer>
                  {theme => <DefaultLayout image={theme.images.mastheadImage}/>}
                </ThemeConsumer>
            </Masthead>
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              <Main mt={85}>
                <MastheadDrawer
                height="56px"
                width="900px"
                top="85px"
                open={this.state.drawerOpen}>
                </MastheadDrawer>
                {children}
              </Main>
              <Footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </Footer>
            </div>
          </div>
        )}
      />
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
