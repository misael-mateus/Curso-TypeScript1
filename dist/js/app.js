import { NegociacaoController } from "./controllers/negociacao-controller.js";
let controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', evt => {
    evt.preventDefault();
    controller.adiciona();
});
