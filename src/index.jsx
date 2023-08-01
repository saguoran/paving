/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';
import App from './App';
import og_image from './assets/ogc-og_img.jpg';
import { Router } from "@solidjs/router";



  //<Router>
//    <MetaProvider>
//     
//    </MetaProvider>
  //</Router>
render(() => (
    App
), document.getElementById('root')
);

