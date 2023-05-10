import React from "react";
import { StaticQuery, graphql } from "gatsby";

class CategoriesPage extends React.Component {
  render() {
    const categories = this.props.data.allMarkdownRemark.edges;
    const { updateFilterCategory, filterCategory } = this.props;

    return (
      <div className='categories_list'>
        <button
          onClick={() => updateFilterCategory("All")}
          className={filterCategory === "All" ? "active" : " "}
        >
          All
        </button>
        {categories.map((category, idx) => (
          <button
            className={
              filterCategory === category.node.frontmatter.title
                ? "active"
                : " "
            }
            key={idx}
            onClick={() =>
              updateFilterCategory(category.node.frontmatter.title)
            }
          >
            {category.node.frontmatter.title}
          </button>
        ))}
      </div>
    );
  }
}

// eslint-disable-next-line
export default (props) => (
  <StaticQuery
    query={graphql`
      query CategoriesQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___title] }
          filter: { frontmatter: { templateKey: { eq: "category-post" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                templateKey
              }
            }
          }
        }
      }
    `}
    render={(data, count) => (
      <CategoriesPage data={data} count={count} {...props} />
    )}
  />
);
