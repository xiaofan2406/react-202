/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/assets/reset.css';
import 'prismjs/themes/prism-solarizedlight.css';
import ReduxProvider from './src/components/ReduxProvider';

export const wrapRootElement = ReduxProvider;
