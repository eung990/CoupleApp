"use strict";

const { post } = require("../../../routes/home");

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBtn = document.querySelector("#login");

loginBtn.addEventListener("click", login);


function login(){
    const req = {
       id : id.value,
       pw : pw.value
    };

    console.log(req);
    console.log(JSON.stringify(req));

    fetch("/login",{
        method : "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body:JSON.stringify(req)
    })

};