import { Route, Routes, A } from "@solidjs/router";
import logo from './assets/gundam.png';
import Home from './pages/Home';

const phone = '6031112298';
const email = '';
const location = '1750 Finch Ave E, North York, ON M2J 2X5';
function App() {
  return (
    <>
      <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <A class="navbar-item" href="/">
            <img src={logo} width="28" height="28"> </img>
            <span class="title is-4 ml-1">Gundam</span>
          </A>
        </div>
        <div class="navbar-menu is-active">
          <div class="navbar-end">
            <A class="navbar-item" href="/services">
              Services
            </A>
            <A class="navbar-item" href="/about">
              About Us
            </A>
            <A class="navbar-item" href="/contact">
              Contact Us
            </A>
            <a class="navbar-item" href={'tel:' + phone}>
              <button class="button is-primary is-outlined">Call Us At {phone}</button>
            </a>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" component={() => <Home heading={'this is home'} />} />
        <Route path="/paving" component={() => <Home heading={'this is home'} />} />
        <Route path="/services" component={() => <div>services</div>} />
        <Route path="/about" component={() => <div>about</div>} />
      </Routes>
      <footer class="footer px-3 py-3">
      <article class="is-flex is-justify-content-start is-align-items-center">
        <figure class="">
            <p class="image is-64x64">
              <img src={logo} />
            </p>
          </figure>
            <h3 class='title is-1 mx-2'>Gundam</h3>
          
        </article>
        <div class="content">

          <p className='pt-3'>
            Welcome to <strong>Gundam Inc</strong>, where we are passionate about providing our customers with the highest quality products and services in the technology industry. Our team of engineers and developers is constantly pushing the boundaries of innovation, and we are dedicated to helping our clients stay ahead of the curve.
          </p>

          <div class="icon-text">
            <span class="icon has-text-success">
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <span>gundam@gundam.com</span>
          </div>
          <div class="icon-text">
            <span class="icon has-text-success">
              <ion-icon name="call-outline"></ion-icon>
            </span>
            <span>{phone}</span>
          </div>


          <div class="icon-text">
            <span class="icon has-text-success">
              <ion-icon name="location-outline"></ion-icon>
            </span>
            <a href="https://www.google.com/maps?q=1750+Finch+Ave+E,+North+York,+ON+M2J+2X5">
              <span>{location}</span>
            </a>
            <iframe src="https://maps.google.com/maps?q=1750+Finch+Ave+E,+North+York,+ON+M2J+2X5&output=embed" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>

        </div>
        <p>
          Copyright &copy; 2023 By Gundam Inc
        </p>
      </footer>
    </>
  );
}

export default App;
