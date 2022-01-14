const nombre = "Maximiliano Nahuel Salto"

const experiencia = [
    {
        lugar: "Coca-Cola Andina",
        puesto: "Solution Developer",
        periodo: "Jun 2021 - Actualidad",
        descripción: "Desarrollo y mantenimiento de Web apps y Mobile Apps, planificacion y diseño de nuevas funcionalidades y mejoras."
    },
    {
        lugar: "Ross Outside the Box",
        puesto: "Fullstack develop Jr",
        periodo: "Dic 2020 - Jun 2021",
        descripción: "Fullstack en Ross outside the box, creación e implementación de software tanto en backend como en frontend"
    },
    {
        lugar: "Ross Outside the Box",
        puesto: "QA Automation",
        periodo: "Ago 2020 - Dic 2020",
        descripción: "Quality Assurance en Ross outside the box, Crear planes de prueba y testing, automatizaciones, mejorar estrategias de prueba y asegurar la calidad del software"
    },
    {
        lugar: "Konecta Argentina",
        puesto: "Analista de Datos",
        periodo: "Feb 2018 -  Oct 2020",
        descripción: "Automatizaciones JS, informes, mediciones, gráficos para el seguimiento de las actividades, y detectar falencias y/o posibilidad de optimizaciones de tareas en diversas áreas."
    }
];

const estudios = [{
    lugar: "Facultad de Matemática, Astronomía, Física y Computación (UNC)",
    periodo: "2016-Actualidad",
    descripción: "Licenciatura en ciencias de la Computación"
    }
];

const lenguajesActuales = [
    {
        name: "NodeJS",
        img:"https://raw.githubusercontent.com/devicons/devicon/2809b567852a4648062a2d3e7c1c531367458c0b/icons/nodejs/nodejs-original.svg"
    },
    {
        name: "Vuejs",
        img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
    },
    {
        name: "Angular 7+",
        img:"https://raw.githubusercontent.com/devicons/devicon/2809b567852a4648062a2d3e7c1c531367458c0b/icons/angularjs/angularjs-plain.svg"
    },
    {
        name: "JavaScript",
        img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
    },
    {
        name: "HTML",
        img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
    },
    {
        name: "CSS",
        img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
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
        name: "MySQL",
        img:"https://raw.githubusercontent.com/devicons/devicon/2809b567852a4648062a2d3e7c1c531367458c0b/icons/mysql/mysql-plain.svg"
    } 
    
]

const lenguajesAprendiendo = [
    {
        name: "Angular 7+",
        img: "https://raw.githubusercontent.com/devicons/devicon/2809b567852a4648062a2d3e7c1c531367458c0b/icons/angularjs/angularjs-plain.svg",
    },
    {
        name: "MongoDB",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
    },
    {
        name: "Typescript",
        img: "https://raw.githubusercontent.com/devicons/devicon/7a4ca8aa871d6dca81691e018d31eed89cb70a76/icons/typescript/typescript-original.svg",
    },
    {
        name: "Web 3.0",
        img: "https://raw.githubusercontent.com/vorillaz/devicons/ba75593fdf8d66496676a90cbf127d721f73e961/!SVG/w3c.svg",
    },
    {
        name: "Docker",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
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
