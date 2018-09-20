/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/assets/reset.css';
import 'prismjs/themes/prism-tomorrow.css';
import RootProvider from './src/components/RootProvider';

export const wrapRootElement = RootProvider;
