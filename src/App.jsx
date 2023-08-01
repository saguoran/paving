import { Route, Routes, A } from "@solidjs/router";
// import logo from './assets/logo.png';
import Home from './pages/Home';
import Service from './pages/Services';
import PageWrapper from "./components/PageWrapper";

import { Router } from "@solidjs/router";

import logo from "./assets/logo2.png";

export const baseUrl = '/';
// const companyName = 'One General Construction';
// const phone = '6477401168';
// const email = 'OneGeneralConstruction@gmail.com';
// const location = '47 Thorncliffe Park Dr, East York, ON M4H 1J5';
// const title = "One General Construction - Flagstone, Interlock, Landscaping, Power Wash";
// const description = "Our expert team creates beautiful outdoor spaces and ensures long-lasting durability. Contact us for all your landscaping and hardscaping needs.";
// import og_image from './assets/ogc-og_img.jpg';
// const og_url = "https://ogc-web-30135.web.app";
function App() {
  return (
    <Router>
        <Routes >
          <Route path={baseUrl} component={PageWrapper} >
            <Route path="/" component={Home} />
            <Route path="/services" component={Service} />
            <Route path="/about" component={() => <div>about</div>} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
