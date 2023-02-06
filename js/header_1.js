const HMI = document.getElementById("HMI");
const HMI1 = document.getElementById("HMI1");
const HMI2 = document.getElementById("HMI2");
const HMI3 = document.getElementById("HMI3");
const HMI4 = document.getElementById("HMI4");
const HMI5 = document.getElementById("HMI5");

HMI1.addEventListener("click",()=>{
    HMI.innerHTML=`
    <button>Новинка</button>
    <img src="./images/Rectangle 6.2.svg" alt="" style="width:100%;">
    `
})
HMI2.addEventListener("click",()=>{
    HMI.innerHTML=`
    <button>Новинка</button>
    <img src="./images/Rectangle 19.svg" alt="" style="width:100%;">
    `
})
HMI3.addEventListener("click",()=>{
    HMI.innerHTML=`
    <button>Новинка</button>
    <img src="./images/Rectangle 19.1 (1).svg" alt="" style="width:100%;">
    `
})
HMI4.addEventListener("click",()=>{
    HMI.innerHTML=`
    <button>Новинка</button>
    <img src="./images/Rectangle 19.2.svg" alt="" style="width:100%;">
    `
})
HMI5.addEventListener("click",()=>{
    HMI.innerHTML=`
    <button>Новинка</button>
    <img src="./images/Rectangle 19.3.svg" alt="" style="width:100%;">
    `
})

