import { Outlet } from "@solidjs/router";
import { Route, Routes, A } from "@solidjs/router";
import logo from '../assets/logo.png';
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import { baseUrl } from '../App';
// console.log()

const title = 'One General Construction';
const description = 'Flagstone, Interlock, Landscaping, Power Wash';
const phone = '6477401168';
const email = 'OneGeneralConstruction@gmail.com';
const location = '47 Thorncliffe Park Dr, East York, ON M4H 1J5';

function PageWrapper() {
    const routes = [];
    return <>
        <div className="shadow-box">
            <nav role="navigation" className="max-width-1200" aria-label="navigation">
                <A href={baseUrl}>
                    <img src={logo}> </img>
                    <div>
                        <p className="site-title">{title}</p>
                        <p className="site-description">{description}</p>
                    </div>
                </A>

                <ul>
                    {/* <li> <A href={'tel:' + phone}>
                    Call Us At 
                    {phone}
                </A></li> */}
                    {/* <li>  <A href={baseUrl + 'services'} className="text-transform_uppercase">
                        Services
                    </A></li> */}
                    <li> <A href={baseUrl + 'gallery'} className="text-transform_uppercase" data-animated='true'>
                        Gallery
                    </A></li>
                </ul>
            </nav>
        </div>
        <Outlet />
        <footer>
            <article className="max-width-1200 pt_1">
                <div className="flex-start">

                    <figure>
                        <p>
                            <img src={logo} />
                        </p>
                    </figure>
                    <h1 className='text-transform_uppercase'>{title}</h1>
                </div>
                <p>
                    Welcome to <strong>{title}</strong>, where we are passionate about providing our customers with the highest quality products and services in the technology industry. Our team of engineers and developers is constantly pushing the boundaries of innovation, and we are dedicated to helping our clients stay ahead of the curve.
                </p>
                <h2 className="pl_1">Contact Us</h2>
                <address className="pl_1">
                    <div className="flex-start column-gap_1">
                        <ion-icon name="mail-outline"></ion-icon>
                        <a href={'mailto:' + email} title={email}>
                            <i>{email}</i>
                        </a>
                    </div>
                    <div className="flex-start column-gap_1">
                        <ion-icon name="call-outline"></ion-icon>
                        <a href={'tel:' + phone} title={'phone: ' + phone}>
                            <i>{phone}</i>
                        </a>
                    </div>
                    <div className="flex-start column-gap_1">
                        <ion-icon name="location-outline"></ion-icon>
                        <a href="https://www.google.com/maps?q=1750+Finch+Ave+E,+North+York,+ON+M2J+2X5" >
                            <span>{location}</span>
                        </a>
                    </div>
                </address>
            </article>
            <iframe src="https://maps.google.com/maps?width=100%25&amp;height=1000&amp;hl=en&amp;q=%201%20Grafton%2047%20Thorncliffe%20Park%20Dr,%20East%20York,%20ON%20M4H%201J5Street+(One%20General%20Construction)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="700" frameborder="0" style="border:0" allowfullscreen></iframe>
            <p className="max-width-1200">
                All content, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks and/or copyright material of their respective owners. All rights reserved. <br />
            </p>
            <p className="max-width-1200 p">
                &copy; 2023 {title}
            </p>
        </footer>
        <div class="scroll-container">
            <a href="#top">🔝<br />To Top</a>
        </div>
    </>
}

export default PageWrapper;