import paving from "./../assets/images/20.jpeg";
import driveway2 from "./../assets/images/1.jpeg";
import flagstone from "./../assets/images/47.jpeg";
import ServiceCard from "../components/ServiceCard";

function Service(props){
    console.log("Service")
    return (<>
      <section class="section pt-3 pb-0">
                <h3 class="title is-3">Services</h3>
                <div class="columns">
                    <div class="column">
                        <ServiceCard title='Paving Services' subtitle='We provide paving services for new construction, as well as resurfacing and repairs, to ensure your surfaces are always in top shape.' img={paving} />
                    </div>
                    <div class="column">
                        <ServiceCard title='Excavation and Site Development' subtitle='We offer a range of excavation services, including new construction projects, grading, and drainage solutions, to ensure your project is completed to the highest standards.' img={driveway2} />
                    </div>
                    <div class="column">
                        <ServiceCard title='Flagstone Interlocking' subtitle='We are dedicated to providing high-quality Flagstone Interlocking services that will enhance the aesthetic and functionality of your outdoor living spaces, with custom designs and installations that are tailored to your vision.' img={flagstone} />
                    </div>
                </div>
            </section>
    </>);
}

export default Service;