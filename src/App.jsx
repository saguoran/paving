import { Route, Routes, A } from "@solidjs/router";
// import logo from './assets/logo.png';
import Home from './pages/Home';
import Service from './pages/Services';
import PageWrapper from "./components/PageWrapper";

import { Router } from "@solidjs/router";

import logo from "./assets/logo2.png";
const og_url = "https://ogc-web-30135.web.app";
import og_image from './assets/ogc-og_img.jpg';

export const baseUrl = '/';
const companyName = 'One General Construction';
const phone = '6477401168';
const email = 'OneGeneralConstruction@gmail.com';
const location = '47 Thorncliffe Park Dr, East York, ON M4H 1J5';
const title = "One General Construction - Flagstone, Interlock, Landscaping, Power Wash";
const description = "Our expert team creates beautiful outdoor spaces and ensures long-lasting durability. Contact us for all your landscaping and hardscaping needs.";

//import { MetaProvider, Title, Link, Meta } from '@solidjs/meta';
//<MetaProvider>
//<div class="Home">
  //<Meta charset="utf-8" />
  //<Meta name="viewport" content="width=device-width, initial-scale=1" />
  //<Link rel="shortcut icon" type="image/ico" href={logo} />
  //<Link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
  //<Title>One General Construction - Flagstone, Interlock, Landscaping, Power Wash</Title>
  //<Meta name="title" content={title} />
  //<Meta name="description" content={description} />
  //{/* <!-- Google / Search Engine Tags --> */}
  //<Meta itemprop="name" content={title} />
  //<Meta itemprop="description"  content={description}/>
  //<Meta itemprop="image" content={og_image}/>
  //{/* <!-- Open Graph / Facebook --> */}
  //<Meta property="og:type" content="website" />
  //<Meta property="og:url" content={og_url} />
  //<Meta property="og:title" content={title} />
  //<Meta property="og:description" content={description} />
  //<Meta property="og:image" content={og_image} />
  //{/* <!-- Twitter --> */}
  //<Meta property="twitter:card" content={og_image} />
  //<Meta property="twitter:url" content={og_url} />
  //<Meta property="twitter:title" content={title} />
  //<Meta property="twitter:description" content={description} />
  //<Meta property="twitter:image" content={og_image} />
//</div>
//</MetaProvider>
function App() {
  return (
    <>

  <Router>

      <Routes >
        <Route path={baseUrl} component={PageWrapper} >
          <Route path="/" component={Home} />
          <Route path="/services" component={Service} />
          <Route path="/about" component={() => <div>about</div>} />
        </Route>
      </Routes>
  </Router>
    </>
  );
}

export default App;
