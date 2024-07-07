
const conBtn = document.querySelector("#conBtn");
const cutBtn = document.querySelector("#cutBtn");

conBtn.addEventListener("click", conMap);
cutBtn.addEventListener("click", cutMap);

async function conMap(){
    await navigator.geolocation.getCurrentPosition(console.log);
   
};

async function cutMap(){
    
}