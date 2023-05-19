import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import MdList from "react-ionicons/lib/MdList";

class BlogRoll extends React.Component {
  filterPosts = (filterCategory, posts) => {
    if (filterCategory === "All") return posts;

    const filteredPosts = posts.filter(
      ({ node: post }) => post.frontmatter.category === filterCategory
    );

    return filteredPosts;
  };
  render() {
    const { data, filterCategory } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const filteredPosts = this.filterPosts(filterCategory, posts);

    console.log({ filteredPosts });

    // console.log("dfsdf", __dirname);

    return (
      <div className='contain pt4'>
        <div className='blog_posts'>
          {filteredPosts &&
            filteredPosts.map(({ node: post }) => (
              <div key={post.frontmatter.title} className='one_post clearfix'>
                <div className='post_image column right col_4'>
                  <div>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                </div>

                <div className='post_attr column col_8'>
                  <p className='mb category_date'>
                    <Link to='/'>{post.frontmatter.category}</Link>
                    &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                    <span>{post.frontmatter.date}</span>
                  </p>

                  <h2 className='col_11'>
                    <Link className='max_line_text' to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <p className='tagline mb col_11 max_line_text'>
                    {" "}
                    {post.frontmatter.description}
                  </p>

                  <div className='author'>
                    <span>
                      <img src='imgs/missing.png' alt='Elijah' />
                    </span>
                    <span>{post.frontmatter.author}</span>
                  </div>
                </div>
              </div>
            ))}
          {filteredPosts.length === 0 && (
            <div className='margin_center empty_container'>
              <MdList fontSize='60px' />
              <h1 className='empty_list'>No Posts</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

// eslint-disable-next-line
export default (props) => (
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
                author
                category
                description
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
    render={(data, count) => <BlogRoll data={data} count={count} {...props} />}
  />
);
