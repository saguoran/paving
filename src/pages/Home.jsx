

import hero from "./../assets/images/31.jpeg";
import img4 from "./../assets/images/19.jpeg";
import img3 from "./../assets/images/33.jpeg";
import img2 from "./../assets/images/23.jpeg";
import img1 from "./../assets/images/35.jpeg"
import MasonryTile from "../components/MasonryTile";
const title = "One General Construction - Flagstone, Interlock, Landscaping, Power Wash";
const description = "Our expert team creates beautiful outdoor spaces and ensures long-lasting durability. Contact us for all your landscaping and hardscaping needs.";
const og_url = "https://ogc-web-30135.web.app";
import heroImage from './../assets/images/28.jpeg';
import { MetaProvider, Title, Link, Meta } from '@solidjs/meta';

const phone = '647-740-1168';
const twitter = 'https://twitter.com/LicenseNon';
function Home(props) {
    return (
        <main>
            <section>
                <div class="hero ">
                    <img src={heroImage}></img>
                    <div className="max-width-1200 flex-end flex-direction_column width-height_100">
                        <div className="opacity-background flex-center">
                            <div className="flex-center flex-direction_column max-width-1200">
                                <h1>
                                    Our team of experts provides top-quality interlocking solutions that are tailored to your specific needs, ensuring long-lasting beauty and functionality for your outdoor spaces.
                                </h1>
                                <address>
                                    <a href={'tel:' + phone} title={'phone: ' + phone} data-animated='true'>
                                        Call Us At <i>{phone}</i>
                                    </a>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="background-color_1 color_1 height_100svh-h1">
                <div className="max-width-1200" >
                    <h1 className="text-transform_uppercase">Twitter</h1>
                    <div className="max-width-600 flex-center flex-direction_column ">
                        <div className="twitter-container">
                            <a class="twitter-timeline" href={twitter} data-chrome="nofooter noborders noheader" data-height="800">Our Tweets</a>
                        </div>
                        <p className="flex-center">
                            <a href={twitter} target="_blank" className="flex-center button_1">Follow Us</a>
                        </p>

                    </div>
                </div>
            </section>
            <section class="max-width-1200">
                <h1 class="title is-3">Top-quality Pavers</h1>
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-8">
                        <div class="tile">
                            <div class="tile is-parent">
                                <article class="tile is-child">
                                    <MasonryTile title="Low Maintenance" content="Pavers are low maintenance and easy to clean, making them a cost-effective and practical choice for any property owner." img={img1} />
                                </article>
                            </div>
                            <hr />
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child">
                                    <MasonryTile title="Durability" content=" Pavers are extremely durable and can withstand heavy foot traffic and harsh weather conditions without cracking or fading." img={img2} />
                                </article>
                                <article class="tile is-child">
                                    <MasonryTile title="Versatility" content="Pavers come in a wide range of sizes, shapes, and colors, allowing for endless design possibilities to match any style or taste." img={img3} />

                                </article>
                            </div>
                        </div>

                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child">
                            <MasonryTile title="Environmentally Friendly" content="Pavers are eco-friendly as they allow water to filter into the ground, reducing runoff and contributing to a healthier environment." img={img4} />
                        </article>
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Home;