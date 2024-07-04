"use strict";
/* 지금 파일과 연결된 html(view)단과 연결된 javascript파일 */

const u_id = document.querySelector("#u_id");
const u_pw = document.querySelector("#u_pw");
const u_re_pw = document.querySelector("#u_re_pw");
const u_email = document.querySelector("#u_email");
const u_name = document.querySelector("#u_name");
const signBtn = document.querySelector("#button");

signBtn.addEventListener("click", sign);


async function sign() {

    if (!u_id.value) {
        return alert("아이디를 입력해주세요");
    }
    if (!u_email.value) {
        return alert("이메일을 입력해주세요");
    }
    if (u_pw.value !== u_re_pw.value) {
        return alert("비밀번호가 일치하지 않습니다");
    }
    const req = {
        u_id: u_id.value,
        u_pw: u_pw.value,
        u_email: u_email.value,
        u_name: u_name.value
    };
    console.log(req);

    try {
        const res = await fetch("/sign", { //fetch함수는 http요청을 보내는 api
            method: "POST", //상태
            headers: { //표현
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req) // 페이로드

        });

        const response = await res.json();

        if (response.success) {
            console.log("회원가입 완료");
            parent.location.href  = "/";
        } else {
            console.log("회원가입 실패");
            alert(response.msg);
        }
    }
    catch (err) {
        console.log(new Error("회원가입 중 오류 발생"));
    }

    console.log("JSON 문자열 변환 ==>" + JSON.stringify(req));

};