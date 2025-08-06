// File: plugins/gatsby-remark-wrap-tables/index.js

/**
 * Gatsby Remark plugin to wrap tables in a responsive div.
 *
 * This plugin finds Markdown table nodes in the AST, converts them to HTML,
 * and wraps the resulting HTML string with `<div class="table-responsive">...</div>`.
 * It also adds specific Bootstrap-like classes to the `<table>` element itself.
 *
 * @param {object} options - Plugin options (currently none needed).
 * @param {object} options.markdownAST - The Markdown Abstract Syntax Tree.
 * @returns {object} The modified Markdown AST.
 */
module.exports = async ({ markdownAST }) => {
  // Dynamically import unist-util-visit, mdast-util-to-hast, and hast-util-to-html.
  // This allows a CommonJS module to load ES Modules and perform necessary AST transformations.
  const { visit } = await import('unist-util-visit');
  const { toHast } = await import('mdast-util-to-hast');
  const { toHtml } = await import('hast-util-to-html');

  // Define the classes to be added to the <table> element.
  const tableClasses = ['table', 'table-bordered', 'border-primary', 'table-striped', 'table-hover'];

  // Use unist-util-visit to traverse the AST.
  // We are now specifically looking for 'table' type nodes,
  // which represent tables parsed from Markdown syntax.
  visit(markdownAST, 'table', (node, index, parent) => {
    // Convert the mdast 'table' node (Markdown AST) to a hast node (HTML AST).
    // This transforms the structured Markdown table data into an HTML representation.
    const hastNode = toHast(node);

    // Ensure hastNode and its properties exist before trying to modify them.
    if (hastNode && hastNode.properties) {
      // Initialize or update the 'className' property.
      // 'className' in hast is an array of strings.
      if (!hastNode.properties.className) {
        hastNode.properties.className = [];
      }
      // Add the new classes to the existing array of class names.
      hastNode.properties.className = hastNode.properties.className.concat(tableClasses);
    }

    // Serialize the modified hast node into a raw HTML string.
    // This gives us the complete <table>...</table> HTML with the new classes.
    const tableHtml = toHtml(hastNode);

    // Create a new 'html' type node.
    // This new node will replace the original 'table' node in the AST.
    // Its 'value' property contains the full HTML string, now wrapped
    // with our desired `<div class="table-responsive">`.
    const wrappedHtmlNode = {
      type: 'html',
      value: `<div class="table-responsive">${tableHtml}</div>`,
    };

    // Replace the original 'table' node with our new 'html' node.
    // We use splice to remove the old node and insert the new one at the same position
    // within the parent's children array.
    if (parent && parent.children) {
      parent.children.splice(index, 1, wrappedHtmlNode);
    }
  });

  // Return the modified AST. Gatsby will then continue processing this modified tree.
  return markdownAST;
};
