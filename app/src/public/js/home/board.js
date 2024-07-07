
const conBtn = document.querySelector("#conBtn");
const account = document.querySelector("#account");

conBtn.addEventListener("click", conURL);
account.addEventListener("click", myInfo);

async function conURL() {
  await navigator.geolocation.getCurrentPosition(console.log);

};

async function myInfo() {
  res =  await fetch("/session", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await res.json();
  const {u_id,coupleURL} = await response;
 

  await alert("당신의 ID : " + u_id + "\n당신의 coupleURL : " + coupleURL);

}


