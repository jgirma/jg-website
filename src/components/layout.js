import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <Wrapper>
        <div>
          {children}
        </div>
      </Wrapper>
    )
  } else {
    content = (
      <Wrapper>
        <div id="wrapper" className="page">
          <div>
            {children}
          </div>
        </div>
      </Wrapper>
    )
  }

  return (
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
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Jonathan Girma Personal Site' },
              { name: 'keywords', content: 'freelance, engeineer, developer, amazon, jonathan, girma' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Wrapper = styled.div`
scroll-snap-type: y proximity;
overflow-y: scroll;
height: 100vh;

ul {
  list-style-type: none;
}

section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
}
`

export default Layout
