const m = document.querySelectorAll("div.m");
const mh = document.querySelectorAll("div.m h1");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const hdh = document.querySelector(".hd h1");
const pc1 = document.querySelectorAll("div.palavras h2 em");
const pc2 = document.querySelectorAll("div.palavras h2 i");
const com = document.querySelector(".btn button");

const sd1 = new Audio("sd1.mp3");
const sd2 = new Audio("sd2.mp3");

let sel = 0;

let mins = 2;
let secs = 0;
let paused = true;
let intervalid;

let reset = false;

let pcard;

for (let i = 0; i < m.length; i++) {
m[i].addEventListener("click", () => {
    if(sel < 2) {
    m[i].style.transform = "rotateY(180deg)";
    m[i].style.backgroundImage = 'url("https://img.freepik.com/vetores-gratis/design-de-banner-de-fundo-profissional-de-negocios-abstrato-multiuso_1340-16858.jpg?t=st=1727468148~exp=1727471748~hmac=191f9b5facbafbfcb609e8cb608a0bb1b63360dae42a957a3064e76d6bff71bf&w=996")';
    mh[i].style.opacity = "1";
    m[i].style.pointerEvents = "none";
    sel++;
        if(sel == 1) {
            p1.textContent = mh[i].textContent;
        }
        else if(sel == 2) {
            p2.textContent = mh[i].textContent;
        }
    }
})
}

setInterval(() => {
    for (let i = 0; i < pc1.length; i++) {
    if(p1.textContent == pc1[i].textContent) {
        pc1[i].style.color = "rgb(147, 252, 204)";
        pc1[i].style.animationName = "brilho";
    }
    if(p1.textContent == pc2[i].textContent) {
        pc2[i].style.color = "rgb(147, 252, 204)";
        pc2[i].style.animationName = "brilho";
    }
    if(p2.textContent == pc1[i].textContent) {
        pc1[i].style.color = "rgb(147, 252, 204)";
        pc1[i].style.animationName = "brilho";
    }
    if(p2.textContent == pc2[i].textContent) {
        pc2[i].style.color = "rgb(147, 252, 204)";
        pc2[i].style.animationName = "brilho";
    }
}
        if(sel == 2) {
            for (let i = 0; i < m.length; i++) {
            m[i].style.pointerEvents = "none";
            }
            sel = 0;
            sd1.volume = 0.3;
            sd2.volume = 0.3;
            switch (p1.textContent + p2.textContent) {
                case "TARTARUGA":
                    hdh.style.animationName = "brilhoe";
                    sd1.currentTime = 0;
                    sd1.play();
                break;
                case "TORNADO":
                    hdh.style.animationName = "brilhoe";
                    sd1.currentTime = 0;
                    sd1.play();
                break;
                case "DADOS":
                    hdh.style.animationName = "brilhoe";
                    sd1.currentTime = 0;
                    sd1.play();
                break;
                case "CONCHA":
                    hdh.style.animationName = "brilhoe";
                    sd1.currentTime = 0;
                    sd1.play();
                break;
                case "BRASIL":
                    hdh.style.animationName = "brilhoe";
                    sd1.currentTime = 0;
                    sd1.play();
                break;
                case "ABACAXI":
                    hdh.style.animationName = "brilhoe";
                    sd1.currentTime = 0;
                    sd1.play();
                break;
                case "MONTE":
                    hdh.style.animationName = "brilhoe";
                    sd1.currentTime = 0;
                    sd1.play();
                break;
                case "LONTRA":
                    hdh.style.animationName = "brilhoe";
                    sd1.currentTime = 0;
                    sd1.play();
                break;
                default:
                    hdh.style.animationName = "err";
                    sd2.currentTime = 0;
                    sd2.play();
            }
            setTimeout(() => {
                switch (p1.textContent + p2.textContent) {
                    case "TARTARUGA":
                        for (let i = 0; i < m.length; i++) {
                            if(mh[i].textContent == "TARTA" || mh[i].textContent == "RUGA") {
                            p1.textContent = "?";
                            p2.textContent = "?";
                            }
                            else {
                                if(mh[i].style.opacity == "1") {
                                    m[i].style.pointerEvents = "none";
                                }
                                else {
                                    m[i].style.pointerEvents = "auto";
                                }
                            }
                        }
                    break;
                    case "TORNADO":
                        for (let i = 0; i < m.length; i++) {
                            if(mh[i].textContent == "TOR" || mh[i].textContent == "NADO") {
                            p1.textContent = "?";
                            p2.textContent = "?";
                            }
                            else {
                                if(mh[i].style.opacity == "1") {
                                    m[i].style.pointerEvents = "none";
                                }
                                else {
                                    m[i].style.pointerEvents = "auto";
                                }
                            }
                        }
                    break;
                    case "DADOS":
                        for (let i = 0; i < m.length; i++) {
                            if(mh[i].textContent == "DA" || mh[i].textContent == "DOS") {
                            p1.textContent = "?";
                            p2.textContent = "?";
                            }
                            else {
                                if(mh[i].style.opacity == "1") {
                                    m[i].style.pointerEvents = "none";
                                }
                                else {
                                    m[i].style.pointerEvents = "auto";
                                }
                            }
                        }
                    break;
                    case "CONCHA":
                        for (let i = 0; i < m.length; i++) {
                            if(mh[i].textContent == "CON" || mh[i].textContent == "CHA") {
                            p1.textContent = "?";
                            p2.textContent = "?";
                            }
                            else {
                                if(mh[i].style.opacity == "1") {
                                    m[i].style.pointerEvents = "none";
                                }
                                else {
                                    m[i].style.pointerEvents = "auto";
                                }
                            }
                        }
                    break;
                    case "BRASIL":
                        for (let i = 0; i < m.length; i++) {
                            if(mh[i].textContent == "BRA" || mh[i].textContent == "SIL") {
                            p1.textContent = "?";
                            p2.textContent = "?";
                            }
                            else {
                                if(mh[i].style.opacity == "1") {
                                    m[i].style.pointerEvents = "none";
                                }
                                else {
                                    m[i].style.pointerEvents = "auto";
                                }
                            }
                        }
                    break;
                    case "ABACAXI":
                        for (let i = 0; i < m.length; i++) {
                            if(mh[i].textContent == "ABA" || mh[i].textContent == "CAXI") {
                            p1.textContent = "?";
                            p2.textContent = "?";
                            }
                            else {
                                if(mh[i].style.opacity == "1") {
                                    m[i].style.pointerEvents = "none";
                                }
                                else {
                                    m[i].style.pointerEvents = "auto";
                                }
                            }
                        }
                    break;
                    case "MONTE":
                        for (let i = 0; i < m.length; i++) {
                            if(mh[i].textContent == "MON" || mh[i].textContent == "TE") {
                            p1.textContent = "?";
                            p2.textContent = "?";
                            }
                            else {
                                if(mh[i].style.opacity == "1") {
                                    m[i].style.pointerEvents = "none";
                                }
                                else {
                                    m[i].style.pointerEvents = "auto";
                                }
                            }
                        }
                    break;
                    case "LONTRA":
                        for (let i = 0; i < m.length; i++) {
                            if(mh[i].textContent == "LON" || mh[i].textContent == "TRA") {
                            p1.textContent = "?";
                            p2.textContent = "?";
                            }
                            else {
                                if(mh[i].style.opacity == "1") {
                                    m[i].style.pointerEvents = "none";
                                }
                                else {
                                    m[i].style.pointerEvents = "auto";
                                }
                            }
                        }
                    break;
                    default:
                    for (let i = 0; i < m.length; i++) {
                            m[i].style.transform = "rotateY(0deg)";
                            m[i].style.backgroundImage = 'url("https://img.freepik.com/vetores-gratis/fundo-de-tecnologia-abstrato-gradiente_23-2149213766.jpg?t=st=1727466072~exp=1727469672~hmac=e074254831fe36694122eaed84b56ff8d5cd967dc4112aff33a7e46680460d0d&w=740")';
                            mh[i].style.opacity = "0";
                            m[i].style.pointerEvents = "auto";
                            p1.textContent = "?";
                            p2.textContent = "?";
                }
                for (let i = 0; i < pc1.length; i++) {
                    pc1[i].style.color = "rgba(11, 75, 170, 0.295)";
                    pc2[i].style.color = "rgba(11, 75, 170, 0.295)";
                }
            }
            hdh.style.animationName = "";
            }, 1000)
        }
}, 0)

window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
})
for (let i = 0; i < m.length; i++) {
    m[i].style.pointerEvents = "none";
    m[i].style.opacity = "0.2";
}

function rec() {
    for (let i = 0; i < m.length; i++) {
        m[i].style.pointerEvents = "auto";
        m[i].style.opacity = "1";
        m[i].style.transform = "rotateY(0deg)";
        m[i].style.backgroundImage = 'url("https://img.freepik.com/vetores-gratis/fundo-de-tecnologia-abstrato-gradiente_23-2149213766.jpg?t=st=1727466072~exp=1727469672~hmac=e074254831fe36694122eaed84b56ff8d5cd967dc4112aff33a7e46680460d0d&w=740")';
        mh[i].style.opacity = "0";
        m[i].style.pointerEvents = "auto";
        p1.textContent = "?";
        p2.textContent = "?";
    }
}

com.addEventListener("click", () => {
    pcard = ["ABA", "CAXI", "BRA", "SIL", "MON", "TE", "TOR", "NADO", "CON", "CHA", "TARTA", "RUGA", "LON", "TRA", "DA", "DOS"];
    for (let i = 0; i < m.length; i++) {
        let random = Math.round(Math.random() * pcard.length - 1);
        mh[i].textContent = pcard.splice(random, 1);
    }
    for (let i = 0; i < m.length; i++) {
        m[i].style.pointerEvents = "none";
        m[i].style.opacity = "0.2";
    }
    com.style.pointerEvents = "none";
    com.style.opacity = "0.2";
    pauseTimer();
    setTimeout(() => {
        com.style.opacity = "1";
        com.style.pointerEvents = "auto";
        com.textContent = "Recomeçar";
        resetTimer();
        if(paused == true) {
            intervalid = setInterval(updateTime, 1000);
          }
        rec();
    }, 1000);
})
  
  function updateTime() {
  
    secs--;
  
    if (secs < 0) {
      secs = 59;
      mins--;
    }
  
    if(mins == 0 && secs == 0) {
      pauseTimer();
      clearInterval(intervalid);
      for (let i = 0; i < m.length; i++) {
        m[i].style.pointerEvents = "none";
        m[i].style.opacity = "0.2";
        m[i].style.transform = "rotateY(0deg)";
        m[i].style.backgroundImage = 'url("https://img.freepik.com/vetores-gratis/fundo-de-tecnologia-abstrato-gradiente_23-2149213766.jpg?t=st=1727466072~exp=1727469672~hmac=e074254831fe36694122eaed84b56ff8d5cd967dc4112aff33a7e46680460d0d&w=740")';
        mh[i].style.opacity = "0";
        p1.textContent = "?";
        p2.textContent = "?";
    }
    }
  
    secs = pad(secs);
    mins = pad(mins);
  
    timer.textContent = `${mins}:${secs}`;
  
    function pad(unit) {
      return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
  }

function pauseTimer() {
    paused = true;
    clearInterval(intervalid);
  }
  
  function resetTimer() {
    clearInterval(intervalid);
    mins = 2;
    secs = 0;
    timer.textContent = "02:00";
  }
  