const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const boutiqueProductTemplate = path.resolve(`src/templates/product.js`)
  const boutiqueProductsTemplate = path.resolve(`src/templates/products.js`)
  const blogPostTemplate = path.resolve(`src/templates/event.js`)

  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allContentfulProducts(limit: $limit) {
          edges {
            node {
              title
              slug
              collection
            }
          }
        }
        allContentfulEvents(limit: $limit) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create product pages.
    result.data.allContentfulProducts.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.slug}`,
        component: boutiqueProductTemplate,
        context: {
          slug: edge.node.slug,
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })

    // Create product pages.
    result.data.allContentfulProducts.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `products/${edge.node.collection.toLowerCase()}`,
        component: boutiqueProductsTemplate,
        context: {
          filterBy: edge.node.collection.toLowerCase(),
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })

    // Create product pages.
    result.data.allContentfulEvents.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.title}`,
        component: blogPostTemplate,
        context: {
          slug: edge.node.title,
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
  })
}
