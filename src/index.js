import {loadhome} from "./home"
import {loadmenu} from "./menu"
import {loadcontact} from "./contact"
import "./style.css"

const btn = document.querySelector('.home');
btn.addEventListener('click', ()=>{
    content.innerHTML = "";
    loadhome();

});
const btn1 = document.querySelector('.menu');
btn1.addEventListener('click', ()=>{
    content.innerHTML = "";
    loadmenu();

});
const btn2 = document.querySelector('.contact');
btn2.addEventListener('click', ()=>{
    content.innerHTML = "";
    loadcontact();

});
loadhome();