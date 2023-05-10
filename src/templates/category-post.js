import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
  // const { markdownRemark: post } = data
  return (
    <div>
      <p>Hello Categories</p>
    </div>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query CategoryPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
