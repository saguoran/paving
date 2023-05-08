import ServiceCard from "../components/ServiceCard";

import hero from "./../assets/images/42.jpeg";
import driveway1 from "./../assets/images/0.jpeg";
import driveway2 from "./../assets/images/1.jpeg";
import driveway3 from "./../assets/images/2.jpeg";
import paver1 from "./../assets/images/3.jpeg";
import masonry2 from "./../assets/images/4.jpeg";
import masonry3 from "./../assets/masonry3.jpg"
import masonry5 from "./../assets/images/5.jpeg"
import MasonryTile from "../components/MasonryTile";

function Home(props) {
    const style={background: `url(${hero}) center center`};
    console.log(style)
    return (
        <>
            <section class={"hero is-primary is-medium hero-background-image"} style={style}>

                <div class="hero-body">
                    <div>
                        <p class="title is-2">
                            Paving the Way to Success: Choose Gundam for Your Next Project
                            <br />
                            Pave the Way to a Beautiful Home: Our Expert Paving Services Can Transform Your Property
                        </p>
                    </div>
                </div>
            </section>
            <section class="section pt-3 pb-0">
                <h3 class="title is-3">Services</h3>
                <div class="columns">
                    <div class="column">
                        <ServiceCard title='Paving and Asphalt Services' subtitle='We offer paving services including new construction, resurfacing, and repairs.' img={driveway1} />
                    </div>
                    <div class="column">
                        <ServiceCard title='Excavation and Site Development' subtitle='We offer excavation services for new construction projects, grading, and drainage solutions.' img={driveway2} />
                    </div>
                    <div class="column">
                        <ServiceCard title='Technology Consulting' subtitle='Our technology consulting services include market analysis, product development, and go-to-market strategy.' img={driveway3} />
                    </div>
                </div>
            </section>
            <section class="section pt-3">
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
                                    <MasonryTile title="Versatility" content="Pavers come in a wide range of sizes, shapes, and colors, allowing for endless design possibilities to match any style or taste." img={paver1}/>

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
        </>

    );
}

export default Home;