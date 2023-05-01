function ServiceCard(props) {
    return (
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src={props.img} alt="Placeholder image" />
                </figure>
            </div>
            <div class="card-content">
                <div class="content">
                    <p class="title is-4">{props.title}</p>
                    <p class="subtitle is-6">{props.subtitle}</p>

                </div>
            </div>
        </div>
    );
}

export default ServiceCard;