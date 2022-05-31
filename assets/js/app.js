let eighties = document.getElementById("80s");
let present = document.getElementById("present");
let imgContainer = document.getElementById("img-container");
let iconResponsive = document.getElementById("icon-responsive");
let iconNavegate = document.getElementById("icon-navegate");
let iconModern = document.getElementById("icon-modern");
let iconFast = document.getElementById("icon-fast");
let minimalCoffee = document.getElementById("minimal-coffee");
let contador = document.getElementById("contador-calorias");
let footer = document.getElementById("footer");

eighties.addEventListener(("click"), setEighties);
present.addEventListener(("click"), setPresent);

function setPresent() {
    resetHTML();
};

function setEighties() {
    resetHTML();
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
......................//.........................<br>
..................//////////.....................<br>
.................////////////....................<br>
.................////////////....................<br>
..................///////////....................<br>
..................////..../////..................<br>
.................////........////................<br>
................//............./////.............<br>
...............//................/////...........<br>
..............//....................//////////...<br>
............///.......................//////////.<br>
...........///.......................////////////<br>
..........///.....................//////////////.<br>
.........///................/////////..///////...<br>
........///.........../////////..................<br>
...../////....../////////........................<br>
.//////////////////..............................<br>
/////////////....................................<br>
////////////.....................................<br>
.////////........................................<br>
.................................................<br>
.................................................<br>
    </p>
</div>`;
    iconFast.innerHTML= `<div class="icon-container">
    <p>
.................................................<br>                 
..........................////////////////.......<br>
.........................///////////////.........<br>
........................///////////////..........<br>
.......................//////////////............<br>
......................//////////////.............<br>
.....................//////////////..............<br>
..................../////////////................<br>
.................../////////////.................<br>
..................////////////...................<br>
.................////////////....................<br>
................///////////////////..............<br>
...............///////////////////...............<br>
.....................////////////................<br>
....................///////////..................<br>
...................//////////....................<br>
................../////////......................<br>
.................////////........................<br>
...............///////...........................<br>
............../////..............................<br>
.............////................................<br>
...........///...................................<br>
..........//.....................................<br>
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



function resetHTML(){
    imgContainer.innerHTML =   `<img src="/assets/images/placeholder.webp" alt="">
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
    alert("reset");
};