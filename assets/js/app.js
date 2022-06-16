//CSS file and buttons
let cssFile = document.getElementById("style");
let favicon = document.getElementById("favicon");
let eighties = document.getElementById("80s");
let nineties = document.getElementById("90s");
let twoThousands = document.getElementById("00s");
let twentyTen = document.getElementById("10s");
let twentyTwenty = document.getElementById("20s");

//common variables
let logo = document.getElementById("logo");
let iconLink = Array.from(document.querySelectorAll("[icon-link]"));
let btnLink = Array.from(document.querySelectorAll("[btn-link]"));
let portInfoIcon = Array.from(document.querySelectorAll("[portfolio-info-icon]"));
let portInfoText = Array.from(document.querySelectorAll("[portfolio-info-text]"));

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
let ninetiesContactTitle = document.getElementById("contact-title");
let ninetiesContactImg = document.getElementById("contact-img");
let ninetiesHr = Array.from(document.querySelectorAll("hr"));

//2000s variables
let twoThousandsAboutImg = document.getElementById("2000aboutImg");
let twoThousandsIconResponsive = document.getElementById("2000iconResponsive");
let twoThousandsIconNavegate = document.getElementById("2000iconNavegate");
let twoThousandsIconModern = document.getElementById("2000iconModern");
let twoThousandsIconFast = document.getElementById("2000iconFast");

//2010s variables
let twentyTenProfilePic = document.getElementById("2010profilePic");
let twentyTenAboutImg = document.getElementById("2010aboutImg");
let twentyTenIconResponsive = document.getElementById("2010iconResponsive");
let twentyTenIconNavegate = document.getElementById("2010iconNavegate");
let twentyTenIconModern = document.getElementById("2010iconModern");
let twentyTenIconFast = document.getElementById("2010iconFast");


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
twentyTen.addEventListener(("click"), setTwentyTen);
twentyTwenty.addEventListener(("click"), setTwentyTwenty);

function setEighties() {
    let eightiesElements = [eightiesAboutImg, eightiesIconResponsive, eightiesIconNavegate, eightiesIconModern, eightiesIconFast, btnLink, portInfoText];
    cssFile.setAttribute("href", "assets/css/style80.css");
    logo.setAttribute("src", "assets/images/2020logowhite.png");
    hideAll();
    eightiesElementsFlat = eightiesElements.flat();
    eightiesElementsFlat.forEach(function(el) {
        el.classList.remove("hide")
    });
}

function setNineties() {
    let ninetiesElements = [ninetiesAboutImg, ninetiesIconResponsive, ninetiesIconNavegate, ninetiesIconModern, ninetiesIconFast, btnLink, portInfoText,ninetiesContactTitle, ninetiesContactImg, ninetiesHr];
    cssFile.setAttribute("href", "assets/css/style90.css");
    favicon.setAttribute("href", "assets/images/1990favicon.png");
    logo.setAttribute("src", "assets/images/1990logo.png");
    hideAll();
    ninetiesElementsFlat = ninetiesElements.flat();
    ninetiesElementsFlat.forEach(function(el) {
        el.classList.remove("hide")
    });
}

function setTwoThousands() {
    let twoThousandsElements = [twoThousandsAboutImg, twoThousandsIconResponsive, twoThousandsIconNavegate, twoThousandsIconModern, twoThousandsIconFast,
    btnLink, portInfoText];
    cssFile.setAttribute("href", "assets/css/style00.css");
    favicon.setAttribute("href", "assets/images/2000favicon.png");
    logo.setAttribute("src", "assets/images/2000logo.png");
    hideAll();
    twoThousandsElementsFlat = twoThousandsElements.flat();
    twoThousandsElementsFlat.forEach(function(el) {
        el.classList.remove("hide")
    });
}

function setTwentyTen() {
    let twentyTenElements = [twentyTenProfilePic, twentyTenAboutImg, twentyTenIconResponsive, twentyTenIconNavegate, twentyTenIconModern, twentyTenIconFast, iconLink, portInfoIcon]
    cssFile.setAttribute("href", "assets/css/style10.css");
    favicon.setAttribute("href", "assets/images/2010logo.png");
    logo.setAttribute("src", "assets/images/2010logo.png");
    hideAll();
    twentyTenElementsFlat = twentyTenElements.flat();
    twentyTenElementsFlat.forEach(function(el) {
        el.classList.remove("hide")
    });
}

function setTwentyTwenty() {
    let TwentyTwentyElements = [twentyTwentyAboutImg, twentyTwentyAboutBorder, twentyTwentyIconResponsive, twentyTwentyIconNavegate, twentyTwentyIconModern, twentyTwentyIconFast, iconLink, portInfoIcon];
    cssFile.setAttribute("href", "assets/css/style20.css");
    favicon.setAttribute("href", "assets/images/2020favicon.png");
    logo.setAttribute("src", "assets/images/2020logo.png");
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
    
        ninetiesAboutImg, ninetiesIconResponsive, ninetiesIconNavegate, ninetiesIconModern, ninetiesIconFast, ninetiesContactImg, ninetiesContactTitle, ninetiesHr,

        twoThousandsAboutImg, twoThousandsIconResponsive, twoThousandsIconNavegate, twoThousandsIconModern, twoThousandsIconFast,

        twentyTenProfilePic, twentyTenAboutImg, twentyTenIconResponsive, twentyTenIconNavegate, twentyTenIconModern, twentyTenIconFast,
        
        twentyTwentyAboutImg, twentyTwentyAboutBorder, twentyTwentyIconResponsive, twentyTwentyIconNavegate, twentyTwentyIconModern, twentyTwentyIconFast,
    
        iconLink, btnLink, portInfoIcon, portInfoText
    ];
    
    allElementsFlat = allElements.flat();
    allElementsFlat.forEach(function(el) {
        el.classList.add("hide")
    });

}