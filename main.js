const nombre = "Maximiliano Nahuel Salto"

const experiencia = [
    {
        lugar: "Cocos Capital",
        puesto: "Backend Developer",
        periodo: "Mar 2022 - present",
        descripción: "As a Backend Developer, I am responsible for maintaining and developing new features for a financial application. I work with the team to understand user requirements, and I implement new functionality while maintaining code quality and best practices. Additionally, I have experience in automating processes in different areas of the company, streamlining operations and increasing efficiency. Overall, my goal is to deliver high-quality solutions that meet business requirements and provide value to our users."
    },
    {
        lugar: "Coca-Cola Andina",
        puesto: "Solution Developer",
        periodo: "Jun 2021 - Mar 2022",
        descripción: "Planning, designing and developing and maintaining web and mobile applications"
    },
    {
        lugar: "Ross Outside the Box",
        puesto: "Fullstack develop Jr",
        periodo: "Nov 2020 - Jun 2021",
        descripción: "Fullstack Nodejs, Angular 7+, Vuejs, developing and maintaining web and mobile applications"
    },
    {
        lugar: "Ross Outside the Box",
        puesto: "QA Automation",
        periodo: "Jul 2020 - Nov 2020",
        descripción: "Creating test plans, performing testing and automation using Pyhton, improving testing strategies to ensure software quality"
    }
];

const estudios = [{
    lugar: "Facultad de Matemática, Astronomía, Física y Computación (UNC)",
    periodo: "2016-present",
    descripción: "Licenciatura en ciencias de la Computación"
    }
];

const lenguajesActuales = [
    {
        name: "NodeJS",
        img:"https://raw.githubusercontent.com/devicons/devicon/2809b567852a4648062a2d3e7c1c531367458c0b/icons/nodejs/nodejs-original.svg"
    },
    {
        name: "Typescript",
        img: "https://raw.githubusercontent.com/devicons/devicon/7a4ca8aa871d6dca81691e018d31eed89cb70a76/icons/typescript/typescript-original.svg",
    },
    {
        name: "GIT",
        img:"https://raw.githubusercontent.com/jmnote/z-icons/master/svg/git.svg"
    },
    {
        name: "Python",
        img:"https://raw.githubusercontent.com/jmnote/z-icons/master/svg/python.svg"
    },
    {
        name: "Postgres",
        img: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
    },
    {
        name: "Amazon Web Service",
        img: "https://raw.githubusercontent.com/devicons/devicon/2809b567852a4648062a2d3e7c1c531367458c0b/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
    }
    
]
// Cambia el nombre del H1 que con tiene el nombre del usuario
var nombreDOM = document.getElementById("name")
nombreDOM.innerText = nombre

// Itineración que crea los items en "Experiencia"
for (i = 0; i < experiencia.length; i++){
    var item = document.createElement("div")
    item.innerHTML =
    `<div class="d-flex justify-content-between mt-3">
    <strong><h5 class="card-title exp-title">${experiencia[i].lugar}</h5></strong>
    <p class="card-title exp-title text-muted">${experiencia[i].puesto}</p>
    <span class="exp-date text-muted">${experiencia[i].periodo}</span>
    </div>
    <p>${experiencia[i].descripción}</p>
    <hr>`
    document.getElementById("experiencia").appendChild(item)
}

// Itineración que crea los items en "Estudios"
for (i = 0; i < estudios.length; i++){
    var item = document.createElement("div")
    item.innerHTML =
    `<div class="d-flex justify-content-between">
    <span class="card-title h6 exp-title">${estudios[i].lugar}</span>
    <span class="exp-date text-muted">${estudios[i].periodo}</span>
    </div>
    <p>${estudios[i].descripción}</p>`
    document.getElementById("estudios").appendChild(item)
}

// Itineración que crea los items en "Lenguajes y programas"
for (i = 0; i < lenguajesActuales.length; i++){
    var item = document.createElement("div")
    item.innerHTML = `<img class="languages" title="${lenguajesActuales[i].name}" align="left" alt="${lenguajesActuales[i].name}" width="40" src="${lenguajesActuales[i].img}" />`
    document.getElementById("lenguajes_actuales").appendChild(item)
}

// Itineración que crea los items en "Lenguajes y tecnologias aprendiendo"
for (i = 0; i < lenguajesAprendiendo.length; i++){
    var item = document.createElement("div")
    item.innerHTML = `<img class="languages" align="left" title="${lenguajesAprendiendo[i].name}" alt="${lenguajesAprendiendo[i].name}" width="40" src="${lenguajesAprendiendo[i].img}" />`
    document.getElementById("lenguajes_aprendiendo").appendChild(item)
}


function printDiv(printable){
    var printContents = document.getElementById(printable).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}
