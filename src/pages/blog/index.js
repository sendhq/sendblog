import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import TopPost from '../../components/TopPost'
import CategoriesPage from '../categories'

export default class BlogIndexPage extends React.Component {
  state = {
    filterCategory: 'All',
  }
  updateFilterCategory = (filterCategory) => {
    this.setState({ filterCategory })
  }
  render() {
    const { filterCategory } = this.state
    return (
      <Layout>
        <div className="top back_sky clearfix">
          <div className="contain top_content">
            <TopPost />
            <CategoriesPage
              filterCategory={filterCategory}
              updateFilterCategory={this.updateFilterCategory}
            />
          </div>
        </div>

        <BlogRoll filterCategory={filterCategory} />
      </Layout>
    )
  }
}
