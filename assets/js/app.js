//CSS file and buttons
let cssFile = document.getElementById("style");
let eighties = document.getElementById("80s");
let nineties = document.getElementById("90s");
let twoThousands = document.getElementById("00s");
let twentyTen = document.getElementById("10s");
let twentyTwenty = document.getElementById("20s");

//common variables
let iconLink = Array.from(document.querySelectorAll(".icon-link"));
let btnLink = Array.from(document.querySelectorAll(".btn-link"));
let portInfoIcon = Array.from(document.querySelectorAll(".portfolio-info-icon"));
let portInfoText = Array.from(document.querySelectorAll(".portfolio-info-text"));
let portfolioText = Array.from(document.querySelectorAll(".portfolio-text"));
let portfolioInfo = Array.from(document.querySelectorAll(".portfolio-bottom-info"));

//80s variables
let eightiesAboutImg = document.getElementById("80aboutImg");
let eightiesIconResponsive = document.getElementById("80iconResponsive");
let eightiesIconNavegate = document.getElementById("80iconNavegate");
let eightiesIconModern = document.getElementById("80iconModern");
let eightiesIconFast = document.getElementById("80iconFast");

//90s variables
let ninetiesAboutImg = document.getElementById("90aboutImg");
let ninetiesIconResponsive = document.getElementById("90iconResponsive");
let ninetiesIconNavegate = document.getElementById("90iconNavegate");
let ninetiesIconModern = document.getElementById("90iconModern");
let ninetiesIconFast = document.getElementById("90iconFast");
let ninetiesportfolio = Array.from(document.querySelectorAll(".portfolio-content"));
let ninetiesContactTitle = document.getElementById("contact-title");
let ninetiesContactImg = document.getElementById("contact-img");
let ninetiesHr = Array.from(document.querySelectorAll("hr"));

//2000s variables
let twoThousandsAboutImg = document.getElementById("2000aboutImg");
let twoThousandsIconResponsive = document.getElementById("2000iconResponsive");
let twoThousandsIconNavegate = document.getElementById("2000iconNavegate");
let twoThousandsIconModern = document.getElementById("2000iconModern");
let twoThousandsIconFast = document.getElementById("2000iconFast");


//2020 variables
let twentyTwentyAboutImg = document.getElementById("2020aboutImg");
let twentyTwentyAboutBorder = document.getElementById("2020aboutBorder");
let twentyTwentyIconResponsive = document.getElementById("2020iconResponsive");
let twentyTwentyIconNavegate = document.getElementById("2020iconNavegate");
let twentyTwentyIconModern = document.getElementById("2020iconModern");
let twentyTwentyIconFast = document.getElementById("2020iconFast");




eighties.addEventListener(("click"), setEighties);
nineties.addEventListener(("click"), setNineties);
twoThousands.addEventListener(("click"), setTwoThousands);
// twentyTen.addEventListener(("click"), setTwentyTen);
twentyTwenty.addEventListener(("click"), setTwentyTwenty);

function setEighties() {
    let eightiesElements = [eightiesAboutImg, eightiesIconResponsive, eightiesIconNavegate, eightiesIconModern, eightiesIconFast, btnLink, portInfoText, portfolioText, portfolioInfo];
    cssFile.setAttribute("href", "assets/css/style80.css");
    hideAll();
    eightiesElementsFlat = eightiesElements.flat();
    eightiesElementsFlat.forEach(function(el) {
        el.classList.remove("hide")
    });
}

function setNineties() {
    let ninetiesElements = [ninetiesAboutImg, ninetiesIconResponsive, ninetiesIconNavegate, ninetiesIconModern, ninetiesIconFast, btnLink, portInfoText, ninetiesportfolio,ninetiesContactTitle, ninetiesContactImg, ninetiesHr];
    cssFile.setAttribute("href", "assets/css/style90.css");
    hideAll();
    ninetiesElementsFlat = ninetiesElements.flat();
    ninetiesElementsFlat.forEach(function(el) {
        el.classList.remove("hide")
    });
}

function setTwoThousands() {
    let twoThousandsElements = [twoThousandsAboutImg, twoThousandsIconResponsive, twoThousandsIconNavegate, twoThousandsIconModern, twoThousandsIconFast,
    btnLink, portInfoText, portfolioText, portfolioInfo];
    cssFile.setAttribute("href", "assets/css/style00.css");
    hideAll();
    twoThousandsElementsFlat = twoThousandsElements.flat();
    twoThousandsElementsFlat.forEach(function(el) {
        el.classList.remove("hide")
    });
}

function setTwentyTwenty() {
    let TwentyTwentyElements = [twentyTwentyAboutImg, twentyTwentyAboutBorder, twentyTwentyIconResponsive, twentyTwentyIconNavegate, twentyTwentyIconModern, twentyTwentyIconFast, iconLink, portInfoIcon, portfolioText, portfolioInfo];
    cssFile.setAttribute("href", "assets/css/style20.css");
    hideAll();
    TwentyTwentyElementsFlat = TwentyTwentyElements.flat();
    TwentyTwentyElementsFlat.forEach(function(el) {
        el.classList.remove("hide")
    });
}

//hides all elements
function hideAll(){
    let allElements = [
        
        eightiesAboutImg, eightiesIconResponsive, eightiesIconNavegate, eightiesIconModern, eightiesIconFast, 
    
        ninetiesAboutImg, ninetiesIconResponsive, ninetiesIconNavegate, ninetiesIconModern, ninetiesIconFast, ninetiesportfolio, ninetiesContactImg, ninetiesContactTitle, ninetiesHr,

        twoThousandsAboutImg, twoThousandsIconResponsive, twoThousandsIconNavegate, twoThousandsIconModern, twoThousandsIconFast,
        
        twentyTwentyAboutImg, twentyTwentyAboutBorder, twentyTwentyIconResponsive, twentyTwentyIconNavegate, twentyTwentyIconModern, twentyTwentyIconFast,
    
        iconLink, btnLink, portInfoIcon, portInfoText, portfolioText, portfolioInfo
    
    ];
    
    allElementsFlat = allElements.flat();
    allElementsFlat.forEach(function(el) {
        el.classList.add("hide")
    });

}