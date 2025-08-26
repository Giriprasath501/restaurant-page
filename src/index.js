import {loadhome} from "./home"
import {loadmenu} from "./menu"
import {loadcontact} from "./contact"
import "./style.css"

const btn = document.querySelector('.home');
btn.addEventListener('click', ()=>{
    btn.innerHTML = "";
    loadhome();

});
const btn1 = document.querySelector('.menu');
btn1.addEventListener('click', ()=>{
    btn1.innerHTML = "";
    loadmenu();

});
const btn2 = document.querySelector('.contact');
btn2.addEventListener('click', ()=>{
    btn2.innerHTML = "";
    loadcontact();

});