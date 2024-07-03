"use strict";
/* 지금 파일과 연결된 html(view)단과 연결된 javascript파일 */

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const re_pw = document.querySelector("#re-pw");
const email = document.querySelector("#email");
const name = document.querySelector("#name");
const signBtn = document.querySelector("#button");

signBtn.addEventListener("click", sign);


function sign(){

    if(!id.value){
        return alert("아이디를 입력해주세요");
    }
    if(!email.value){
        return alert("이메일을 입력해주세요");
    }
    if(pw.value !== re_pw.value){
        return alert("비밀번호가 일치하지 않습니다");
    }
    const req = {
       id : id.value,
       pw : pw.value,
       re_pw: re_pw.value,
       email : email.value,
       name : name.value
    }; 
    console.log(req);  

    fetch("/login",{ //fetch함수는 http요청을 보내는 api
        method : "POST", //상태
        headers: { //표현
            "Content-Type" : "application/json",
        },
        body:JSON.stringify(req) // 페이로드
        
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            console.log("회원가입 완료");
            location.herf = "/";
        }else{
            console.log("회원가입 실패");
            alert(res.msg);         
        }
    })
    .catch((err) => {
        console.log(new Error("회원가입 중 오류 발생"));
    });


    console.log("JSON 문자열 변환 ==>" + JSON.stringify(req));

};