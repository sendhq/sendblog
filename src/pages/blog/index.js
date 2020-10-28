import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import TopPost from '../../components/TopPost'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="top back_sky clearfix">
          <div className="contain top_content">
            <TopPost />
            <div className="categories_list">
              <Link to="/" className="active">
                All
              </Link>
              {/* <a href="">Partnerships</a>
                    <a href="">Product</a>
                    <a href="">Customs</a>
                    <a href="">Company</a>
                    <a href="">Engineering</a>
                    <a href="">Others</a> */}
            </div>
          </div>
        </div>

        
        <BlogRoll />
           
      </Layout>
    )
  }
}
