import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import facebook from "../img/social/facebook.svg";
import twitter from "../img/social/twitter.svg";
import linkedin from "../img/social/linkedin.svg";

import Img from "gatsby-image";

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  featuredImage,
  slug,
  date,
  author,
  category,
}) => {
  const PostContent = contentComponent || Content;
  const baseURL = `https://blog.send.ng${slug}`;
  const fb = `https://www.facebook.com/sharer/sharer.php?u=${baseURL}`;
  const twitterLink = `https://twitter.com/share?url=${baseURL}&text=${title}&via=sendDelivery`;
  const linkedinLink = `https://www.linkedin.com/shareArticle?url=${baseURL}`;
  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className='body_wrap'>
      {helmet || ""}
      <div className='top back_sky clearfix'>
        <div className='contain post_header pt4'>
          <p className='m-b category_date pt'>
            <a href='##' className='_bold uppercased'>
              {category}
            </a>
          </p>

          <h1>
            <a href='##'>{title}</a>
          </h1>
          <p className='tagline mb4'>{description}</p>
          <div className='post_image'>
            <Img
              fluid={featuredImage?.childImageSharp.fluid}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className='clearfix post_body contain'>
        <div className='column col_3  '>
          <div className='author mb4'>
            <span>
              <img src='/imgs/missing.png' alt='Elijah' />
            </span>
            <span className='block_disp'>{author}</span>
          </div>

          <p className='_bold small'>Published On:</p>
          <p>{date}</p>

          <div className='pt4 share_icons'>
            <div
              tabIndex={0}
              role='button'
              onKeyPress={() => handleLinkClick(fb)}
              onClick={() => handleLinkClick(fb)}
            >
              <img src={facebook} alt='Facebook' className='icon' />
            </div>
            <div
              tabIndex={0}
              role='button'
              onKeyPress={() => handleLinkClick(twitterLink)}
              onClick={() => handleLinkClick(twitterLink)}
            >
              <img className='fas fa-lg icon' src={twitter} alt='Twitter' />
            </div>
            <div
              tabIndex={0}
              role='button'
              onKeyPress={() => handleLinkClick(linkedinLink)}
              onClick={() => handleLinkClick(linkedinLink)}
            >
              <img src={linkedin} className='icon' alt='Linkedin' />
            </div>
          </div>
        </div>

        <div className='post_text column col_9 mb4'>
          <PostContent content={content} />
        </div>
      </div>
    </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate='%s | Blog'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        slug={post.fields.slug}
        featuredImage={post.frontmatter.featuredimage}
        date={post.frontmatter.date}
        category={post.frontmatter.category}
        author={post.frontmatter.author}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        description
        tags
        author
        category
        featuredimage {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
