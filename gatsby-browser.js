/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "@popperjs/core/dist/umd/popper.min"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"
import "./src/styles/global.css"
import "@fontsource/public-sans";
import 'typeface-sorts-mill-goudy/index.css';
import './static/plyr.css';
import {defineCustomElements as deckDeckGoHighlightElement} from '@deckdeckgo/highlight-code/dist/loader';
require("prismjs/themes/prism-tomorrow.css");

deckDeckGoHighlightElement();
