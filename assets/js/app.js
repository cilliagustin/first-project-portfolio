let cssFile = document.getElementById("style");
let eighties = document.getElementById("80s");
let nineties = document.getElementById("90s");
let twoThousands = document.getElementById("00s");
let twentyTwenties = document.getElementById("10s");
let present = document.getElementById("present");
let imgContainer = document.getElementById("img-container");
let iconResponsive = document.getElementById("icon-responsive");
let iconNavegate = document.getElementById("icon-navegate");
let iconModern = document.getElementById("icon-modern");
let iconFast = document.getElementById("icon-fast");
let minimalCoffee = document.getElementById("minimal-coffee");
let contador = document.getElementById("contador-calorias");
let contactForm = document.getElementById("contact-form");
let footer = document.getElementById("footer");

eighties.addEventListener(("click"), setEighties);
nineties.addEventListener(("click"), setNineties);
twoThousands.addEventListener(("click"), setTwoThousands);
present.addEventListener(("click"), setPresent);

function setEighties() {
    resetHTML();
    cssFile.setAttribute("href", "assets/css/style80.css");
    imgContainer.innerHTML= `<div class="img-text flex-center">
    <p>**************************************************<br>**************************************************<br>**************************************************<br>**************************************************<br>*********************.........********************<br>*****************.................****************<br>***************.....................**************<br>**************......................**************<br>**************.......................*************<br>**************.......................*************<br>************(*(.....................*(************<br>*****************.................****************<br>********************...........*******************<br>***************.....................**************<br>*************.........................************<br>***********.............................**********<br>*********.................................********<br>********...................................*******<br>*******....................................*******<br>*******.....................................******<br></p>
</div>`;
    iconResponsive.innerHTML= `<div class="icon-container">
    <p>
.................................................<br>
.................................................<br>
.................................................<br>
..@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@..<br>
.@@___________________________________________@@.<br>
.@@___________________________________________@@.<br>
.@@___________________________________________@@.<br>
.@@____________@@@@@@@@@@@@@@@@@@@____________@@.<br>
.@@___________@@-----------------@@___________@@.<br>
.@@_____@@@@@@@@@@@--------------@@___________@@.<br>
.@@____@@/////////@@-------------@@___________@@.<br>
.@@____@@/////////@@-------------@@___________@@.<br>
.@@@@@.@@/////////@@-------------@@.@@@@@@@@@@@@.<br>
.@@@@@.@@/////////@@-------------@@.@@@@@@@@@@@@.<br>
..@@@@.@@/////////@@-------------@@.@@@@@@@@@@@..<br>
.......@@/////////@@-------------@@..............<br>
.......@@@@@@@@@@@@@-------------@@..............<br>
.......@@@@@@@@@@@@@.@@@@@@@@@@@@@@.@@@@.........<br>
..............@@@@@@@@@..@@@@@@@@@@..............<br>
...............@@@@@@@@@@@@@@@@@@@...............<br>
.................................................<br>
.................................................<br>
.................................................<br>
.................................................<br>
    </p>
</div> `;
    iconNavegate.innerHTML= `<div class="icon-container">
    <p>
.......................@@@.......................<br>
..............@@@@@@@@@@@@@@@@@@@@@..............<br>
...........@@@@@@@@@@@@@@@@@@@@@@@@@@@...........<br>
........@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@........<br>
......@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@......<br>
.....@@@@@@@@@@@@@@...........@@@@@@@@@@@@@@.....<br>
....@@@@@@@@@@@@.................@@@@@@@@@@@@....<br>
...@@@@@@@@@@@@...................@@@@@@@@@@@@...<br>
...@@@@@@@@@@@.....................@@@@@@@@@@@...<br>
...@@@@@@@@@@@.....................@@@@@@@@@@@...<br>
...@@@@@@@@@@@.....................@@@@@@@@@@@...<br>
....@@@@@@@@@@@...................@@@@@@@@@@@....<br>
.....@@@@@@@@@@@@@.............@@@@@@@@@@@@@.....<br>
......@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@......<br>
.......@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@........<br>
.........@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.........<br>
..........@@@@@@@@@@@@@@@@@@@@@@@@@@@@@..........<br>
............@@@@@@@@@@@@@@@@@@@@@@@@@............<br>
..............@@@@@@@@@@@@@@@@@@@@@..............<br>
...............@@@@@@@@@@@@@@@@@@@...............<br>
.................@@@@@@@@@@@@@@@.................<br>
...................@@@@@@@@@@@...................<br>
.....................@@@@@@@.....................<br>
.......................@@@.......................<br>
    </p>
</div> `;
    iconModern.innerHTML= `<div class="icon-container">
    <p>
.................................................<br>
.................................................<br>
......................@@.........................<br>
..................@@@@@@@@@@.....................<br>
.................@@@@@@@@@@@@....................<br>
.................@@@@@@@@@@@@....................<br>
..................@@@@@@@@@@@....................<br>
..................@@@@....@@@@@..................<br>
.................@@@@........@@@@................<br>
................@@.............@@@@@.............<br>
...............@@................@@@@@...........<br>
..............@@....................@@@@@@@@@@...<br>
............@@@.......................@@@@@@@@@@.<br>
...........@@@.......................@@@@@@@@@@@@<br>
..........@@@.....................@@@@@@@@@@@@@@.<br>
.........@@@................@@@@@@@@@..@@@@@@@...<br>
........@@@...........@@@@@@@@@..................<br>
.....@@@@@......@@@@@@@@@........................<br>
.@@@@@@@@@@@@@@@@@@..............................<br>
@@@@@@@@@@@@@....................................<br>
@@@@@@@@@@@@.....................................<br>
.@@@@@@@@........................................<br>
.................................................<br>
.................................................<br>
    </p>
</div>`;
    iconFast.innerHTML= `<div class="icon-container">
    <p>
.................................................<br>                 
..........................@@@@@@@@@@@@@@@@.......<br>
.........................@@@@@@@@@@@@@@@.........<br>
........................@@@@@@@@@@@@@@@..........<br>
.......................@@@@@@@@@@@@@@............<br>
......................@@@@@@@@@@@@@@.............<br>
.....................@@@@@@@@@@@@@@..............<br>
....................@@@@@@@@@@@@@................<br>
...................@@@@@@@@@@@@@.................<br>
..................@@@@@@@@@@@@...................<br>
.................@@@@@@@@@@@@....................<br>
................@@@@@@@@@@@@@@@@@@@..............<br>
...............@@@@@@@@@@@@@@@@@@@...............<br>
.....................@@@@@@@@@@@@................<br>
....................@@@@@@@@@@@..................<br>
...................@@@@@@@@@@....................<br>
..................@@@@@@@@@......................<br>
.................@@@@@@@@........................<br>
...............@@@@@@@...........................<br>
..............@@@@@..............................<br>
.............@@@@................................<br>
...........@@@...................................<br>
..........@@.....................................<br>
.................................................<br>
    </p>
</div>`;
    minimalCoffee.innerHTML= `<h4 class="portfolio-title">Minimal<br>Coffee</h4>
    <p class="portfolio-text">A website for a fake coffee franchise located in Argentina.<br>The website is divided in 5 pages: <span class="highlight">Inicio</span> (Home), <span class="highlight">Nosotros</span> (About us), <span class="highlight">Menu</span>, <span class="highlight">Sucursales</span> (Locations), <span class="highlight">Contacto</span> (Contact). <br>The goal of this website is to show a correct use of the <span class="highlight">SEO</span> and <span class="highlight">front end tools</span>.</p>
    <div class="portfolio-bottom-info flex-start">
        <p>HTML</p>
        <p>CSS</p>
        <p>Bootstrap</p>
        <p>Lang: SP</p>
    </div>
    <div class="portfolio-links flex-between">
        <a href="https://cilliagustin.github.io/minimalcoffee/" class="btn-custom" target="_blank">Visit website</a>
        <a href="https://github.com/cilliagustin/minimalcoffee" target="_blank" class="btn-custom">Github repository</a>
</div>`;
    contador.innerHTML= `<h4 class="portfolio-title">Contador de calorías</h4>
    <p class="portfolio-text"><span class="highlight">Single page web app</span> made to keep record of the food you eat as well of the calories ingested. This website uses the <span class="highlight">materialize  framework</span> to provide the grid.<br>The website <span class="highlight">stores data in the browser</span> to keep control over the days.</p>
    <div class="portfolio-bottom-info flex-start">
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>Lang: SP</p>
    </div>
    <div class="portfolio-links flex-between">
        <a href="https://github.com/cilliagustin/ContadorDeCalorias/" class="btn-custom" target="_blank">Visit website</a>
        <a href="https://cilliagustin.github.io/ContadorDeCalorias/" target="_blank"class="btn-custom">Github repository</a>
</div>`;
    footer.innerHTML= `<p>© 2022 Agustin Cilli</p>
    <div class="footer-icons">
        <a href="https://github.com/cilliagustin?tab=repositories" target="_blank" class="btn-custom">Visit Github</a>
        <a href = "mailto:abc@example.com?subject=Contact information" target="_blank" class="btn-custom">Send Email</a>
</div>`
};

function setNineties() {
    resetHTML();
    cssFile.setAttribute("href", "assets/css/style90.css");
    imgContainer.innerHTML= `<img src="assets/images/90splaceholder.png" alt="">`;
    iconResponsive.innerHTML= `<div class="icon-container">
    <img src="assets/images/computer90.png" alt="">
    <img src="assets/images/computer-small90.png" alt="">
</div>`;
    iconNavegate.innerHTML= `<div class="icon-container">
    <img src="assets/images/planet90.png" alt="">
</div>`;
    iconModern.innerHTML= `<div class="icon-container">
    <img src="assets/images/gears90.png" alt="">
</div>`;
    iconFast.innerHTML= `<div class="icon-container">
    <img src="assets/images/mouse-speed90.png" alt="">
</div>`;
    minimalCoffee.innerHTML= `<h4 class="portfolio-title">Minimal Coffee</h4>
<div class="portfolio-content">
    <p class="portfolio-text">A website for a fake coffee franchise located in Argentina.<br>The website is divided in 5 pages: <span class="highlight">Inicio</span> (Home), <span class="highlight">Nosotros</span> (About us), <span class="highlight">Menu</span>, <span class="highlight">Sucursales</span> (Locations), <span class="highlight">Contacto</span> (Contact). <br>The goal of this website is to show a correct use of the <span class="highlight">SEO</span> and <span class="highlight">front end tools</span>.</p>
    <hr>
    <div class="portfolio-bottom-info flex-start">
        <p>HTML</p>
        <p>CSS</p>
        <p>Bootstrap</p>
        <p>Lang: SP</p>
    </div>
</div>
<div class="portfolio-links flex-between">
    <a href="https://cilliagustin.github.io/minimalcoffee/" class="btn-custom" target="_blank">Visit website</a>
    <a href="https://github.com/cilliagustin/minimalcoffee" class="btn-custom" target="_blank">Github repository</a>
</div>`;
    contador.innerHTML= `<h4 class="portfolio-title">Contador de calorías</h4>
<div class="portfolio-content">
    <p class="portfolio-text"><span class="highlight">Single page web app</span> made to keep record of the food you eat as well of the calories ingested. This website uses the <span class="highlight">materialize  framework</span> to provide the grid.<br>The website <span class="highlight">stores data in the browser</span> to keep control over the days.</p>
    <hr>
    <div class="portfolio-bottom-info flex-start">
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>Lang: SP</p>
    </div>
</div>
<div class="portfolio-links flex-between">
    <a href="https://github.com/cilliagustin/ContadorDeCalorias/" class="btn-custom" target="_blank">Visit website</a>
    <a href="https://cilliagustin.github.io/ContadorDeCalorias/" class="btn-custom" target="_blank">Github repository</a>
</div>`
    contactForm.innerHTML=` <h3>contact form</h3>
<div class="contact-info">
    <div class="contact-image">
        <img src="assets/images/computers90.png" alt="">
        <img src="assets/images/mail90.png" alt="">
        <img src="assets/images/mail90.png" alt="">
        <img src="assets/images/phone90.png" alt="">
        <img src="assets/images/msn90.png" alt="">
    </div>
    <form action="" method="post">
        <label for="fullname">Full name</label>
        <input type="text" id="fullname" name="fullname" placeholder="Write your full name please">
        <label for="email">Email address</label>
        <input type="email" id="email" name="email" placeholder="Write your email address please">
        <label for="comments">Message</label>
        <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Anything else I should know?..."></textarea>
    </form>
</div>
<hr>
<button class="btn-custom">Send</button>`;
    footer.innerHTML= `<hr>
    <p>© 2022 Agustin Cilli</p>
    <div class="footer-icons">
        <a href="https://github.com/cilliagustin?tab=repositories" target="_blank" class="btn-custom">Visit Github</a>
        <a href = "mailto:abc@example.com?subject=Contact information" target="_blank" class="btn-custom">Send Email</a>
    </div>`;
}

function setTwoThousands() {
    resetHTML();
    cssFile.setAttribute("href", "assets/css/style00.css");
    imgContainer.innerHTML= `<div class="img"></div>`;
    iconResponsive.innerHTML=`<div class="icon-container">
    <img src="assets/images/computer00.svg" alt="">
    <img src="assets/images/phone00.svg" alt="">
</div>`;
    iconNavegate.innerHTML=`<div class="icon-container">
    <img src="assets/images/location00.svg" alt="">
</div>`;
    iconModern.innerHTML=`<div class="icon-container">
    <img src="assets/images/chip00.svg" alt="">
</div>`;
    iconFast.innerHTML=`<div class="icon-container">
    <img src="assets/images/bolt00.svg" alt="">
</div>`;
    minimalCoffee.innerHTML= `<h4 class="portfolio-title">Minimal Coffee</h4>
    <p class="portfolio-text">A website for a fake coffee franchise located in Argentina.<br>The website is divided in 5 pages: <span class="highlight">Inicio</span> (Home), <span class="highlight">Nosotros</span> (About us), <span class="highlight">Menu</span>, <span class="highlight">Sucursales</span> (Locations), <span class="highlight">Contacto</span> (Contact). <br>The goal of this website is to show a correct use of the <span class="highlight">SEO</span> and <span class="highlight">front end tools</span>.</p>
    <div class="portfolio-bottom-info flex-start">
        <p>HTML</p>
        <p>Css</p>
        <p>Bootstrap</p>
        <p>Lang: SP</p>
    </div>
    <div class="portfolio-links flex-between">
        <a href="https://cilliagustin.github.io/minimalcoffee/" class="btn-custom" target="_blank">Visit website</a>
        <a href="https://github.com/cilliagustin/minimalcoffee" class="btn-custom" target="_blank">Github repository</a>
    </div>`;
    contador.innerHTML= `<h4 class="portfolio-title">Contador de calorías</h4>
    <p class="portfolio-text"><span class="highlight">Single page web app</span> made to keep record of the food you eat as well of the calories ingested. This website uses the <span class="highlight">materialize  framework</span> to provide the grid.<br>The website <span class="highlight">stores data in the browser</span> to keep control over the days.</p>
    <div class="portfolio-bottom-info flex-start">
        <p>HTML</p>
        <p>Css</p>
        <p>JavaScript</p>
        <p>Lang: SP</p>
    </div>
    <div class="portfolio-links flex-between">
        <a href="https://cilliagustin.github.io/ContadorDeCalorias/" class="btn-custom" target="_blank">Visit website</a>
        <a href="https://github.com/cilliagustin/ContadorDeCalorias/" class="btn-custom" target="_blank">Github repository</a>
    </div>`;
}

function setPresent() {
    resetHTML();
    cssFile.setAttribute("href", "assets/css/style.css");
};

function resetHTML(){
    imgContainer.innerHTML =   `<img src="assets/images/placeholder.webp" alt="">
                                <div class="img-border"></div>`;
    iconResponsive.innerHTML = `<div class="glow">
    <div class="icon-container">
        <i class="fa-solid fa-mobile-screen-button"></i>
    </div>`;
    iconNavegate.innerHTML = `<div class="glow">
    <div class="icon-container">
         <i class="fa-solid fa-route"></i>
     </div> 
 </div>`;
    iconModern.innerHTML = `<div class="glow">
    <div class="icon-container">
        <i class="fa-solid fa-circle-nodes"></i>
    </div>
</div>`;
    iconFast.innerHTML = `<div class="glow">
    <div class="icon-container">
        <i class="fa-solid fa-gauge-simple-high"></i>
    </div>
</div>`;
    minimalCoffee.innerHTML= `<div class="portfolio-links flex-between">
    <a href="https://cilliagustin.github.io/minimalcoffee/" class="btn-custom" target="_blank">Visit website</a>
    <a href="https://github.com/cilliagustin/minimalcoffee" target="_blank"><i class="fa-brands fa-github"></i></a>
</div>
<h4 class="portfolio-title">Minimal Coffee</h4>
<p class="portfolio-text">A website for a fake coffee franchise located in Argentina.<br>The website is divided in 5 pages: <span class="highlight">Inicio</span> (Home), <span class="highlight">Nosotros</span> (About us), <span class="highlight">Menu</span>, <span class="highlight">Sucursales</span> (Locations), <span class="highlight">Contacto</span> (Contact). <br>The goal of this website is to show a correct use of the <span class="highlight">SEO</span> and <span class="highlight">front end tools</span>.</p>
<div class="portfolio-bottom-info flex-start">
    <i class="fa-brands fa-html5" alt="HTML icon"></i>
    <i class="fa-brands fa-css3-alt" alt="CSS icon"></i>
    <i class="fa-brands fa-bootstrap" alt="Bootstrap icon"></i>
    <p>Lang: SP</p>
</div>`;
    contador.innerHTML= `<div class="portfolio-links flex-between">
    <a href="https://github.com/cilliagustin/ContadorDeCalorias/" class="btn-custom" target="_blank">Visit website</a>
    <a href="https://cilliagustin.github.io/ContadorDeCalorias/" target="_blank"><i class="fa-brands fa-github"></i></a>
</div>
<h4 class="portfolio-title">Contador de calorías</h4>
<p class="portfolio-text"><span class="highlight">Single page web app</span> made to keep record of the food you eat as well of the calories ingested. This website uses the <span class="highlight">materialize  framework</span> to provide the grid.<br>The website <span class="highlight">stores data in the browser</span> to keep control over the days.</p>
<div class="portfolio-bottom-info flex-start">
    <i class="fa-brands fa-html5" alt="HTML icon"></i>
    <i class="fa-brands fa-css3-alt" alt="CSS icon"></i>
    <i class="fa-brands fa-js-square" alt="Javascript icon"></i>
    <p>Lang: SP</p>
</div>`;
    contactForm.innerHTML= `<form action="" method="post">
    <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Anything else I should know?..."></textarea>
    <label for="comments">Message</label>
    <input type="email" id="email" name="email" placeholder="Write your email address please">
    <label for="email">Email address</label>
    <input type="text" id="fullname" name="fullname" placeholder="Write your full name please">
    <label for="fullname">Full name</label>
</form>
<button class="btn-custom">Send</button>`;
    footer.innerHTML= `<p>© 2022 Agustin Cilli</p>
    <div class="footer-icons">
        <a href="https://github.com/cilliagustin?tab=repositories" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href = "mailto:abc@example.com?subject=Contact information" target="_blank"><i class="fa-solid fa-envelope"></i></a>
    </div>`;
    alert("reset");
};