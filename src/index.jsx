/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';
import { Router } from "@solidjs/router";
import App from './App';

import logo from "./assets/logo2.png";

render(() => (
  <Router>

    <App />
  </Router>
), document.getElementById('root')
);
render(() => (
  <>
    <meta charset="utf-8" />
    <title>One General Construction - Flagstone, Interlock, Landscaping, Power Wash</title>
    <meta name="description" content="One Gene
ral Construction specializes in flagstone installations, interlock driveways, landscaping, flower boxes, sod installation, power washing, and sealing services. Our expert team creates beautiful outdoor spaces and ensures long-lasting durability. Contact us for all your landscaping and hardscaping needs."/>
    <meta name="keywords" content="One General Construction, flagstone, interlock driveways, landscaping, flower boxes, sod installation, power wash, sealing services, hardscaping" />
    <meta property="og:title" content="One General Construction - Flagstone, Interlock, Landscaping, Power Wash" />
    <meta property="og:description" content="One General Construction specializes in flagstone installations, interlock driveways, landscaping, flower boxes, sod installation, power washing, and sealing services. Our expert team creates beautiful outdoor spaces and ensures long-lasting durability. Contact us for all your landscaping and hardscaping needs." />
    <meta property="og:image" content="https://www.onegeneralconstruction.com/images/og-image.jpg" />
    <meta property="og:url" content="https://www.onegeneralconstruction.com/services" />
    <link rel="canonical" href="https://www.onegeneralconstruction.com/services" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta name="theme-color" content="#ffffff" />
    <link rel="shortcut icon" type="image/ico" href={logo} />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
    <title>One General Construction</title>
  </>
), document.getElementById('meta')
);


