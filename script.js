"use strict"; 
import { data } from "./data.js";
const container = document.querySelector(".container");

for (let i = 0; i < data.length; i++)  {
    if (data[i].popularity > 13) {
        container.innerHTML += `
        <div class="language">
        <ul class="language_list">
        <span>${data[i].language}</span>
        <li style = "
        background-color: rgb(129, 182, 213); 
        width:${Math.floor(data[i].popularity*32)}px"> 
        ${data[i].popularity} 
        </li></ul>
    </div>`
    }
    else if (data[i].popularity > 7 && data[i].popularity <= 13) {
        container.innerHTML += `
        <div class="language">
        <ul class="language_list">
        <span>${data[i].language}</span>
        <li style = "
        background-color: rgb(21, 205, 202);
        width:${Math.floor(data[i].popularity*32)}px"> 
        ${data[i].popularity} 
        </li></ul>
    </div>`
    }
    else if (data[i].popularity > 1 && data[i].popularity <= 7) {
        container.innerHTML += `
        <div class="language">
        <ul class="language_list">
        <span>${data[i].language}</span>
        <li style = "
        background-color: rgb(21, 205, 202);
        width:${Math.floor(data[i].popularity*32)}px"> 
        ${data[i].popularity} 
        </li></ul>
    </div>`
    }
    else if (data[i].popularity > 0 && data[i].popularity <= 1) {
        container.innerHTML += `
        <div class="language">
        <ul class="language_list">
        <span>${data[i].language}</span>
        <li style = "
        background-color: rgb(190, 232, 232);        
        width:${Math.floor(data[i].popularity*32)}px"></li>
        <span style = "
        text-align: left;
        color: aqua;
        margin-top: 5px;
        font-weight: bold;"
        >${data[i].popularity} </span>
        </ul>
    </div>`
    }
    }