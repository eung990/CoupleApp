"use strict";
/* 지금 파일과 연결된 html(view)단과 연결된 javascript파일 */

const u_id = document.querySelector("#u_id");
const u_pw = document.querySelector("#u_pw");
const loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

async function login() {
    const req = {
        u_id: u_id.value,
        u_pw: u_pw.value,
    };
  
    try {
      const res = await fetch("/board", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      });
  
      const response = await res.json();
  
      if (response.success) {
        console.log("로그인 완료");
        location.href = "/board";
      } else {
        console.log("로그인 실패");
        alert(response.msg);
      }
    } catch (err) {
      console.log(new Error("로그인 중 오류 발생"));
    }
  
    console.log("JSON 문자열 변환 ==>" + JSON.stringify(req));
  }
  