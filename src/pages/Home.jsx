

import hero from "./../assets/images/31.jpeg";
import paver1 from "./../assets/images/3.jpeg";
import masonry2 from "./../assets/images/4.jpeg";
import masonry3 from "./../assets/masonry3.jpg"
import masonry5 from "./../assets/images/5.jpeg"
import MasonryTile from "../components/MasonryTile";
// import og_image from '../assets/ogc-og_img.jpg';
const title = "One General Construction - Flagstone, Interlock, Landscaping, Power Wash";
const description = "Our expert team creates beautiful outdoor spaces and ensures long-lasting durability. Contact us for all your landscaping and hardscaping needs.";
const og_url = "https://ogc-web-30135.web.app";
import heroImage from './../assets/images/28.jpeg';
import { MetaProvider, Title, Link, Meta } from '@solidjs/meta';

const phone = '647-740-1168';
function Home(props) {
    const style = { background: ` url(${hero}) center center` };
    console.log(style)
    return (
        <main>
            <section>
                <div class="hero ">
                    <img src={heroImage}></img>
                    <div className="max-width-1200 flex-center flex-direction_column width-height_100">
                        <div className="opacity-background">
                            <h1>
                                Our team of experts provides top-quality interlocking solutions that are tailored to your specific needs, ensuring long-lasting beauty and functionality for your outdoor spaces.
                            </h1>
                            <address>
                                <a href={'tel:' + phone} title={'phone: ' + phone}>
                                    Call Us At <i>{phone}</i> Now
                                </a>
                            </address>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section pt-3 flow">
                <h3 class="title is-3">Top-quality Pavers</h3>
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-8">
                        <div class="tile">
                            <div class="tile is-parent">
                                <article class="tile is-child">
                                    <MasonryTile title="Low Maintenance" content="Pavers are low maintenance and easy to clean, making them a cost-effective and practical choice for any property owner." img={masonry5} />
                                </article>
                            </div>
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child">
                                    <MasonryTile title="Durability" content=" Pavers are extremely durable and can withstand heavy foot traffic and harsh weather conditions without cracking or fading." />
                                </article>
                                <article class="tile is-child">
                                    <MasonryTile title="Versatility" content="Pavers come in a wide range of sizes, shapes, and colors, allowing for endless design possibilities to match any style or taste." img={paver1} />

                                </article>
                            </div>
                        </div>

                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child">
                            <MasonryTile title="Environmentally Friendly" content="Pavers are eco-friendly as they allow water to filter into the ground, reducing runoff and contributing to a healthier environment." img={masonry2} />
                        </article>
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Home;