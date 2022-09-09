import React from 'react'
import BannerPage from '../components/banner';
import AboutPage from '../components/about';
import Layout from '../components/layout'
import WorkPage from '../components/work';

class IndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <BannerPage />
        <AboutPage />
        <WorkPage />
      </Layout>
    )
  }
}

export default IndexPage
