import { Div, H1, Button } from '../js/classes.js';

let h1 = new H1('Titulo');
let div = new Div();
div.addElement(h1);
div.render();