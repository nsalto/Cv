const nombre = "Maximiliano Nahuel Salto"

const experiencia = [
    {
        lugar: "Fullstack develop",
        periodo: "Dic 2020 - Actualidad",
        descripción: "Actualmente trabajo como desarrollador Fullstack en Ross outside the box, entre mis funciones está la creación, implementación de software tanto en backend como en frontend"
    },
    {
        lugar: "QA Automation",
        periodo: "Oct 2020 - Actualidad",
        descripción: "Quality Assurance en Ross outside the box, entre mis funciones se encuentran: crear planes de prueba y testing, probar y crear automatizaciones, mejorar estrategias de prueba y asegurar la calidad del software"
    },
    {
    lugar: "Analista de Datos",
    periodo: "Feb 2018 -  Oct 2020",
    descripción: "Realizar automatizaciones, informes, mediciones, gráficos para el seguimiento de las actividades, y detectar falencias y/o posibilidad de optimizaciones de tareas en diversas áreas."
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
        name: "NodeJS",
        img:"https://raw.githubusercontent.com/devicons/devicon/2809b567852a4648062a2d3e7c1c531367458c0b/icons/nodejs/nodejs-original.svg"
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
        name: "C",
        img: "https://raw.githubusercontent.com/devicons/devicon/2809b567852a4648062a2d3e7c1c531367458c0b/icons/c/c-original.svg",
    },
    {
        name: "SASS",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
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
    <span class="card-title h6 exp-title">${experiencia[i].lugar}</span>
    <span class="exp-date">${experiencia[i].periodo}</span>
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
    <span class="exp-date">${estudios[i].periodo}</span>
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