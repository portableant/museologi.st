/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// All import statements have been converted to CommonJS require() calls.

require("@popperjs/core/dist/umd/popper.min");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.min");
require("./src/styles/global.css");
require("@fontsource/public-sans");
require("typeface-sorts-mill-goudy/index.css");
require("./static/plyr.css");
require("prismjs/themes/prism-tomorrow.css");

// The deckDeckGoHighlightElement function is also imported using require().
// Note that its import syntax is a bit different because it's a dynamic ES6 import,
// so we need to use a slightly different approach to get the loader.
const { defineCustomElements: deckDeckGoHighlightElement } = require('@deckdeckgo/highlight-code/dist/loader');

deckDeckGoHighlightElement();

// This shouldUpdateScroll function is already in the correct CommonJS format.
exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  // Check if there is a hash in the URL. If there is, it's likely an anchor link,
  // so we'll let the browser handle the scroll.
  if (location.hash) {
    return false;
  }
  // Otherwise, always scroll to the top of the page.
  return true;
};