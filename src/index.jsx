/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';
import { Router } from "@solidjs/router";
import App from './App';
import og_image from './assets/ogc-og_img.jpg';
import logo from "./assets/logo2.png";
const og_url =  "https://ogc-web-30135.web.app";
render(() => (
  <Router>

    <App />
  </Router>
), document.getElementById('root')
);
render(() => (
  <>
  <meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="shortcut icon" type="image/ico" href={logo} />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />


{/* <!-- Primary Meta Tags --> */}
<title>One General Construction - Flagstone, Interlock, Landscaping, Power Wash</title>
<meta name="title" content="One General Construction - Flagstone, Interlock, Landscaping, Power Wash" />
<meta name="description" content="Our expert team creates beautiful outdoor spaces and ensures long-lasting durability. Contact us for all your landscaping and hardscaping needs." />

{/* <!-- Open Graph / Facebook --> */}
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.heymeta.com/url/metatags.io" />
<meta property="og:title" content="One General Construction - Flagstone, Interlock, Landscaping, Power Wash" />
<meta property="og:description" content="Our expert team creates beautiful outdoor spaces and ensures long-lasting durability. Contact us for all your landscaping and hardscaping needs." />
<meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

{/* <!-- Twitter --> */}
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://www.heymeta.com/url/metatags.io" />
<meta property="twitter:title" content="One General Construction - Flagstone, Interlock, Landscaping, Power Wash" />
<meta property="twitter:description" content="Our expert team creates beautiful outdoor spaces and ensures long-lasting durability. Contact us for all your landscaping and hardscaping needs." />
<meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

  </>
), document.getElementById('meta')
);


