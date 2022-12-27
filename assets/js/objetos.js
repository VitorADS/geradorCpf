import { Div, H, Button } from '../js/classes.js';

let h1 = new H('h1D', 'Gerador de CPF', '1');
let div = new Div('divSite');
let div3 = new Div('row1');
let div4 = new Div('row2');
let div5 = new Div('row3');
let divBotao = new Div('divBotao');
let h2 = new H('h2D', '000.000.000-00', '4');
let button = new Button('b1', 'Gerar', 'gerarCpf()');

div.addElement(div3);
div.addElement(div4);
div.addElement(div5);
div5.addElement(divBotao);
divBotao.addElement(button);
div3.addElement(h1);
div4.addElement(h2);
div.render();

div.addClass('container');
div.addClass('text-center');

div3.addClass('row');
div4.addClass('row');
div4.addClass('alert');
div5.addClass('row');


div5.addClass('justify-content-center');
divBotao.addClass('col');

button.addClass('btn');
button.addClass('btn-primary');
