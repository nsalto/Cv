const experiencia = [{
    lugar: "Konecta Argentina",
    periodo: "2019 - Actualidad",
    descripción: "Realizar informes, mediciones, gráficos para el seguimiento de las actividades, y detectar falencias y/o posibilidad de optimizaciones de tareas en diversas áreas."
    },
    {
    lugar: "Konecta Argentina",
    periodo: "2017-2019",
    descripción: "Monitoreo, optimizacion y logística de rutas de técnicos instaladores."
    }
];

const estudios = [{
    lugar: "Adolfo Bioy Casares",
    periodo: "2003-2009",
    descripción: "Bachiller en Economía y gestión de las organizaciones con especialidad en turismo y hotelería"
    },
    {
    lugar: "Facultad de Matemática Astronomía, Física y Computación (UNC)",
    periodo: "2015-actualidad",
    descripción: "Licenciatura en ciencias de la computación"
    }
];

const lenguajesActuales = [
    {   ico: "https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-plain.svg",
        label: "Java Script"
    },
    {   ico: "https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original.svg",
        label: "HTML5"
    },
    {   ico: "https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original.svg",
        label: "CSS"
    },
    {   ico: "https://devicons.github.io/devicon/devicon.git/icons/bootstrap/bootstrap-plain.svg",
        label: "Bootstrap"
    },
    {   ico: "https://devicons.github.io/devicon/devicon.git/icons/visualstudio/visualstudio-plain.svg",
        label: "Visual Studio Code"
    },
    {   ico: "https://devicons.github.io/devicon/devicon.git/icons/github/github-original.svg",
        label: "GitHub"
    },
    {   ico: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Microsoft_Excel_2013_logo.svg/782px-Microsoft_Excel_2013_logo.svg.png",
        label: "Excel"
    },
    {   ico: "https://devicons.github.io/devicon/devicon.git/icons/slack/slack-original.svg",
        label: "Slack"
    },
    {   ico: "https://devicons.github.io/devicon/devicon.git/icons/mongodb/mongodb-original.svg",
        label: "MongoDB"
    }
]; 

const cursos_certificados = [
    {   link: "#",
        label: "JavaScript Algorithms and Data Structures",
        icon: "https://img.icons8.com/windows/32/000000/free-code-camp.png"
    },
    {   link: "https://www.freecodecamp.org/certification/fcc992655f2-7dbb-43ef-b180-d87b5c6c259b/data-analysis-with-python-v7",
        label: "Data Analysis with Python",
        icon: "https://img.icons8.com/windows/32/000000/free-code-camp.png"
    },
    {   link: "#",
        label: "Machine Learning: Data Science with Python",
        icon: "https://cdn.freebiesupply.com/logos/large/2x/udemy-1-logo-png-transparent.png"
    }
];


const lenguajesAprendiendo = [
    "https://devicons.github.io/devicon/devicon.git/icons/python/python-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/react/react-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/redux/redux-original.svg",
    "https://i7.pngguru.com/preview/824/41/201/javascript-react-static-web-page-github-npm-gatsby.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToNy-NHNe4UIPIB2AZ9Ll194MlguLTLrj0hg&usqp=CAU",
    "https://devicons.github.io/devicon/devicon.git/icons/angularjs/angularjs-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original.svg",
    
]

// Cursos y certificados
for (i = 0; i < cursos_certificados.length; i++){
    var item = document.createElement("div")
    item.innerHTML =
    `<div class="d-flex justify-content-between mt-4">
    <h6><img width="30px" src=${cursos_certificados[i].icon}/><a href=${cursos_certificados[i].link}> ${cursos_certificados[i].label}</a></h6>
    </div>`
    document.getElementById("cyc").appendChild(item)
}

// Itineración que crea los items en "Experiencia"
for (i = 0; i < experiencia.length; i++){
    var item = document.createElement("div")
    item.innerHTML =
    `<div class="d-flex justify-content-between mt-4">
    <h6 class="br">${experiencia[i].lugar}</h6>
    </div>
    <span class="exp-date"><i class="far fa-calendar-alt mr-2"></i>${experiencia[i].periodo}</span>
    <p>${experiencia[i].descripción}</p> <hr>`
    document.getElementById("experiencia").appendChild(item)
}

// Itineración que crea los items en "Estudios"
for (i = 0; i < estudios.length; i++){
    var item = document.createElement("div")
    item.innerHTML =
    `<div class="d-flex justify-content-between">
    <h6>${estudios[i].lugar}</h6>
    </div>
    <span class="exp-date"><i class="far fa-calendar-alt mr-2"></i>${estudios[i].periodo}</span>
    <p>${estudios[i].descripción}</p>`
    document.getElementById("estudios").appendChild(item)
}

// Itineración que crea los items en "Lenguajes y programas"
for (i = 0; i < lenguajesActuales.length; i++){
    var item = document.createElement("div")
    item.innerHTML = `<img style="margin-right: 15px" align="left" alt="${lenguajesActuales[i].label}" width="40" src="${lenguajesActuales[i].ico}" />`
    document.getElementById("lang_tools").appendChild(item)
}

// Itineración que crea los items en "Lenguajes y tecnologias aprendiendo"
for (i = 0; i < lenguajesAprendiendo.length; i++){
    var item = document.createElement("div")
    item.innerHTML = `<img style="margin-right: 15px" align="left" alt="" width="40" src="${lenguajesAprendiendo[i]}" />`
    document.getElementById("lenguajes_aprendiendo").appendChild(item)
}

function printDiv(printable){
    var printContents = document.getElementById(printable).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}