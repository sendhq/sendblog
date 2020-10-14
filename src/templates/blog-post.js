import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import facebook from '../img/social/facebook.svg'
import twitter from '../img/social/twitter.svg'
import linkedin from '../img/social/linkedin.svg'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  slug,
}) => {
  const PostContent = contentComponent || Content

  const baseURL = `https://blog.send.ng${slug}`
  const fb = `https://www.facebook.com/sharer/sharer.php?u=${baseURL}`
  const twitterLink = `https://twitter.com/share?url=${baseURL}&text=${title}&via=sendDelivery`
  const linkedinLink = `https://www.linkedin.com/shareArticle?url=${baseURL}`
  const handleLinkClick = (link) => {
    window.open(link, '_blank')
  }
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <h3>Share via</h3>
            <div className=" social-section">
              <div
                tabIndex={0}
                role="button"
                onKeyPress={() => handleLinkClick(fb)}
                onClick={() => handleLinkClick(fb)}
              >
                <img src={facebook} alt="Facebook" className="icon" />
              </div>
              <div
                tabIndex={0}
                role="button"
                onKeyPress={() => handleLinkClick(twitterLink)}
                onClick={() => handleLinkClick(twitterLink)}
              >
                <img className="fas fa-lg icon" src={twitter} alt="Twitter" />
              </div>
              <div
                tabIndex={0}
                role="button"
                onKeyPress={() => handleLinkClick(linkedinLink)}
                onClick={() => handleLinkClick(linkedinLink)}
              >
                <img src={linkedin} className="icon" alt="Linkedin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  slug: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        slug={post.fields.slug}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
