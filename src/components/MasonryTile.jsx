
import { createSignal, Show } from 'solid-js';


function MasonryTile(props) {
    return (
        <div class='box'>
            <h2 class="subtitle my-1">{props.title}</h2>
            <p >{props.content}</p>
            <Show when={props.img}>
                <figure class="image is-square mt-2">
                    <img src={props.img} />
                </figure>
            </Show>
        </div>
    );
}

export default MasonryTile;