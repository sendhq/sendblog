import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className="contain pt4">
        <div className="blog_posts">
          {posts &&
            posts.map(({ node: post }) => (
              <div className="one_post clearfix">
                <div className="post_image column right col_4">
                  <div>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                </div>

                <div className="post_attr column col_8">
                  <p className="mb category_date">
                    <Link to="/">Freight Updates</Link>
                    &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                    <span>{post.frontmatter.date}</span>
                  </p>

                  <h2 className="col_11">
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  </h2>
                  <p className="tagline mb col_11"> {post.excerpt}</p>

                  <div className="author">
                    <span>
                      <img src="img/missing.png" alt="Elijah" />
                    </span>
                    <span>Elijah Shokenu</span>
                  </div>
                  
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
