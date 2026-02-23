const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    const templatesDir = path.resolve("src/templates");

    posts.forEach((edge) => {
      const id = edge.node.id;
      const templateKey = String(edge.node.frontmatter.templateKey);

      // Allowlist: only permit alphanumerics, hyphens, and underscores.
      // This blocks path traversal sequences (../, ..\, /, \, null bytes, etc.)
      // before any path construction occurs.
      if (!/^[a-zA-Z0-9_-]+$/.test(templateKey)) {
        console.error(
          `Invalid templateKey "${templateKey}" — skipping page creation`,
        );
        return;
      }

      // Construct the resolved path only after the allowlist check passes.
      const templatePath = path.resolve(templatesDir, `${templateKey}.js`);

      // Secondary boundary check: ensure the resolved path stays within
      // src/templates/. The trailing separator prevents a match on a sibling
      // directory that shares the same prefix (e.g. src/templates-evil/).
      if (!templatePath.startsWith(templatesDir + path.sep)) {
        console.error(
          `Template path escapes templates directory — skipping page creation`,
        );
        return;
      }

      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: templatePath,
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode }).replace(
      /\d{4}-\d{2}-\d{2}-/,
      "",
    );

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
