"use strict";
/* 지금 파일과 연결된 html(view)단과 연결된 javascript파일 */

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBtn = document.querySelector("#login");

loginBtn.addEventListener("click", login);


function login(){
    const req = {
       id : id.value,
       pw : pw.value
    };   

    fetch("/board",{ //fetch함수는 http요청을 보내는 api
        method : "POST", //상태
        headers: { //표현
            "Content-Type" : "application/json",
        },
        body:JSON.stringify(req) // 페이로드
        
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            console.log("로그인 완료");
            location.herf = "/board";
        }else{
            console.log("로그인 실패");
            alert(res.msg);         
        }
    })
    .catch((err) => {
        console.log(new Error("로그인 중 오류 발생"));
    });


    console.log("JSON 문자열 변환 ==>" + JSON.stringify(req));

};