import { Route, Routes, A } from "@solidjs/router";
import logo from './assets/logo.png';
import Home from './pages/Home';
import Service from './pages/Services';
import PageWrapper from "./components/PageWrapper";
// import { baseUrl } from './../vite.config';
// console.log()
export const baseUrl = '/';
const companyName = 'One General Construction';
const phone = '6477401168';
const email = 'OneGeneralConstruction@gmail.com';
const location = '47 Thorncliffe Park Dr, East York, ON M4H 1J5';

function App() {
  return (
      <Routes >
        <Route path={baseUrl} component={PageWrapper} >
          <Route path="/" component={Home} />
          <Route path="/services" component={Service} />
          <Route path="/about" component={() => <div>about</div>} />
        </Route>
      </Routes>
    
  );
}

export default App;
