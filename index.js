$(document).ready(() => {

  $('.navbar-nav .nav-link').on('click', function() {
    // Fermer le menu
    $('.navbar-collapse').collapse('hide');
  });

  let frontEnd = [
    {
      title: "HTML",
      image: "assets/img/icons/HTML5_logo_and_wordmark.svg.png",
    },
    {
      title: "CSS",
      image: "assets/img/icons/CSS3_logo_and_wordmark.png",
    },
    {
      title: "Javascript",
      image: "assets/img/icons/JavaScript-logo.png",
    },
    {
      title: "Bootstrap",
      image: "assets/img/icons/bootstrap-5-logo-icon.webp",
    },
  ];

  let backEnd = [
    {
      title: "PHP",
      image: "assets/img/icons/php-logo.png",
    },
    {
      title: "NodeJs",
      image: "assets/img/icons/node.png",
    },
  ];

  let database = [
    {
      title: "MySQL",
      image: "assets/img/icons/png-clipart-mysql-mysql.png",
    },
    {
      title: "PostgreSQL",
      image:
        "assets/img/icons/png-transparent-postgresql-logo-computer-software-database-open-source-s-text-head-snout.png",
    },
    {
      title: "MongoDB",
      image:
        "assets/img/icons/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
    },
  ];

  let framework = [
    {
      title: "Codigniter3",
      image: "assets/img/icons/1724795.png",
    },
    {
      title: "ExpressJS",
      image: "assets/img/icons/Expressjs.png",
    },
    {
      title: "ReactJS",
      image:
        "assets/img/icons/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png",
    },
    {
      title: "Symfony",
      image: "assets/img/icons/symfony_black_03.png",
    },
  ];

  let autres = [
    {
      title: "Git",
      image: "assets/img/icons/Git-Logo-2Color.png",
    },
    {
      title: "jQuery",
      image: "assets/img/icons/62a76aadbd73a4af5c5d4fc5.png",
    },
    {
      title: "Leaflet",
      image: "assets/img/icons/leaflet2903.logowik.png",
    },
  ];

  let baeloo = {
    image: [
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-33-11 Home.png",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-33-12 Home.png",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-33-13 Home.png",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-35-22 Login.png",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-36-36 Fiche Sous-Catégorie.png",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-37-52 Page Sous-Catégorie.png",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-38-10 SB Admin 2 - Login.png",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-39-24 Admin.png",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-39-40 Admin.png",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-39-56 Admin.png",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-40-04 Admin.png",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-40-21 Admin.png",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-40-37 Admin.png",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-40-45 Admin.png",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-40-59 Admin.png",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-41-05 Admin.png",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-41-19 Admin.png",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-42-48 Admin.png",
    ],
    technologies: [
      frontEnd[0],
      frontEnd[1],
      frontEnd[2],
      frontEnd[3],
      database[2],
      framework[1],
      framework[2],
      backEnd[1],
    ],
    titre: "Baeloo - Site de référencement",
    description: `
    Il s'agit d'un site de référencement de plusieurs services (Hébergements, Restaurations, etc...). Les clients pourrant demander des devis pour mettre en avant leur service.
    L'utilisateur pourra consulter les services qui lui intéressent (par exemple, s'il est en voyage, quel hôtel est le mieux référencié)
    `,
  };

  let informationsMaritimes = {
    image: [
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-01-10 CFIM - Login Page.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-15-11 CFIM - Tableau de bord.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-15-25 CFIM - Tableau de bord.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-16-28 CFIM - Calendrier d'insertion de données.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-19-41 CFIM - Carte.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-19-58 CFIM - Carte.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-21-40 CFIM - Carte.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-22-44 CFIM - Carte.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-23-29 CFIM - Carte.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-25-28 CFIM - Carte.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-29-28 CFIM - Navire.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-29-35 CFIM - Navire.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-30-28 CFIM - Navire.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-30-37 CFIM - Navire.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-30-38 CFIM - Navire.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-33-13 CFIM - Type de Navire.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-33-24 CFIM - Type de Navire.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-33-48 CFIM - Classe de Navire.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-33-53 CFIM - Classe de Navire.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-34-04 CFIM - Mouvement de Navire.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-34-05 CFIM - Mouvement de Navire.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-34-06 CFIM - Mouvement de Navire.PNG",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-36-30 CFIM - Mouvement de Navire.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-36-45 CFIM - Mouvement de Navire.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-42-54 CFIM - Couche.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-43-01 CFIM - Couche.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-43-11 CFIM - Utilisateur.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-43-44 CFIM - Utilisateur.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-46-07 CFIM - Fiche Utilisateur.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-46-13 CFIM - Fiche Utilisateur.png",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-46-21 CFIM - Fiche Utilisateur.png",
    ],
    technologies: [
      frontEnd[0],
      frontEnd[1],
      frontEnd[2],
      frontEnd[3],
      backEnd[0],
      database[0],
      framework[0],
      autres[1],
      autres[2],
    ],
    titre:
      "Suivi du traffic maritimes dansla Zone Economique Exclusive de Madagascar (ZEE)",
    description:
      "Cette plateforme permet aux utilisateurs de faire un suivi du traffic de navires dans les zones maritimes de Madagascar. Il permet en soi d'importer les données issues des plateformes satellitaires exactEarth et SeaVision, d'importer les couches aux alentours du pays, de filter les données de navires selon différents critère, d'avoir un visuel des trajets et de gérer les utilisateurs",
  };

  let worldData = {
    image: [
      "assets/img/worldData/Screenshot 2023-12-08 at 10-32-28 30 Days Of JavaScript Final Projects.png",
      "assets/img/worldData/Screenshot 2023-12-08 at 10-33-13 30 Days Of JavaScript Final Projects.png",
      "assets/img/worldData/Screenshot 2023-12-08 at 10-33-32 30 Days Of JavaScript Final Projects.png",
      "assets/img/worldData/Screenshot 2023-12-08 at 10-34-35 30 Days Of JavaScript Final Projects.png",
      "assets/img/worldData/Screenshot 2023-12-08 at 10-35-29 30 Days Of JavaScript Final Projects.png",
      "assets/img/worldData/Screenshot 2023-12-08 at 10-36-31 30 Days Of JavaScript Final Projects.png",
    ],
    technologies: [
      frontEnd[0],
      frontEnd[1],
      frontEnd[2],
      frontEnd[3],
      autres[1],
    ],
    titre: "Projet de filtrage d'informations",
    description: "Il s'agit d'un projet permettant der filtrer les données des pays du monde selon le nom, la capital et la population en utilisant une API en ligne"
  }

  let gestionProduit = {
    image: [
      "assets/img/gestionProduit/Screenshot 2023-12-08 at 10-47-29 Matiere Premiere.png",
      "assets/img/gestionProduit/Screenshot 2023-12-08 at 10-48-07 Stock matière.png",
      "assets/img/gestionProduit/Screenshot 2023-12-08 at 10-48-19 Produit.png",
      "assets/img/gestionProduit/Screenshot 2023-12-08 at 10-48-37 Formule.png",
      "assets/img/gestionProduit/Screenshot 2023-12-08 at 10-49-04 Fabrication.png",
      "assets/img/gestionProduit/Screenshot 2023-12-08 at 10-49-17 Fabrication.png",
    ],
    technologies: [
      frontEnd[0],
      frontEnd[1],
      backEnd[0],
      database[0],
      framework[3]
    ],
    titre: "Gestion de produit et fabrication",
    description: "Ils'agit d'une petite application permettant de suivre le processus d'achat à la fabrication d'un produit incluant donc l'achat de matières premières, les mouvements de stock, les formules de fabrications et la fabrication"
  }

  let html = "";
  html += addSkills("Front-end", "frontEnd", frontEnd);
  html += addSkills("Back-end", "backEnd", backEnd);
  html += addSkills("Base de données", "database", database);
  html += addSkills("Framework", "framework", framework);
  html += addSkills("Autres", "autres", autres);
  //   console.log(html);
  $("#mySkillsContainer").html(html);

  html = "";
  html += addProject(baeloo);
  html += addProject(informationsMaritimes);
  html += addProject(worldData);
  html += addProject(gestionProduit);
  $(".myProjectsContainer").html(html);

  $("#frontEndButton").on("click", async () => {
    let html = "";
    let element = $("#frontEnd");
    // console.log(element.css("max-height"));
    if (element.css("max-height") == "0px") {
      element.css("max-height", "100vh");
      $("#frontEndButton").html(`
              Front-end <i class="fa fa-chevron-up"></i>
          `);
    } else {
      element.css("max-height", "0px");
      $("#frontEndButton").html(`
              Front-end <i class="fa fa-chevron-down"></i>
          `);
    }
  });

  $("#backEndButton").on("click", async () => {
    let html = "";
    let element = $("#backEnd");
    // console.log(element.css("max-height"));
    if (element.css("max-height") == "0px") {
      element.css("max-height", "100vh");
      $("#backEndButton").html(`
              Back-end <i class="fa fa-chevron-up"></i>
          `);
    } else {
      element.css("max-height", "0px");
      $("#backEndButton").html(`
              Back-end <i class="fa fa-chevron-down"></i>
          `);
    }
  });

  $("#databaseButton").on("click", async () => {
    let html = "";
    let element = $("#database");
    // console.log(element.css("max-height"));
    if (element.css("max-height") == "0px") {
      element.css("max-height", "100vh");
      $("#databaseButton").html(`
              Base de données <i class="fa fa-chevron-up"></i>
          `);
    } else {
      element.css("max-height", "0px");
      $("#databaseButton").html(`
              Base de données <i class="fa fa-chevron-down"></i>
          `);
    }
  });

  $("#frameworkButton").on("click", async () => {
    let html = "";
    let element = $("#framework");
    // console.log(element.css("max-height"));
    if (element.css("max-height") == "0px") {
      element.css("max-height", "100vh");
      $("#frameworkButton").html(`
              Framework <i class="fa fa-chevron-up"></i>
          `);
    } else {
      element.css("max-height", "0px");
      $("#frameworkButton").html(`
              Framework <i class="fa fa-chevron-down"></i>
          `);
    }
  });

  $("#autresButton").on("click", async () => {
    let html = "";
    let element = $("#autres");
    // console.log(element.css("max-height"));
    if (element.css("max-height") == "0px") {
      element.css("max-height", "100vh");
      $("#autresButton").html(`
              Autres <i class="fa fa-chevron-up"></i>
          `);
    } else {
      element.css("max-height", "0px");
      $("#autresButton").html(`
              Autres <i class="fa fa-chevron-down"></i>
          `);
    }
  });
});

function addSkills(title, elementId, skills) {
  let html = `
            <div>
                <p role="button" class="fs-1 w-100" id="${elementId}Button">
                    ${title} <i class="fa fa-chevron-down"></i>
                </p>
                <div class="row d-flex justify-content-center" id="${elementId}">
                <div class="col-md-6">
                    <div
                    class="d-flex justify-content-around gap-3 bg-white p-5 m-5 flex-wrap shadow p-3 mb-5 rounded"
                    >
        `;
  let element = $(`#${elementId}`);
  for (let i = 0; i < skills.length; i++) {
    html += `
            <div class="text-center">
                <p>
                    <img
                    src="${skills[i].image}"
                    alt=""
                    style="max-height: 100px; max-width: 100%;"
                    />
                </p>
                <p class="fs-4" style="color: black">${skills[i].title}</p>
            </div>`;
  }
  html += `
        </div>
      </div>
     </div> 
      `;
  return html;
}

function addProject(projet) {

  var uniqueId = generateUniqueId();
  // console.log(uniqueId);
  
  let html = `
    <div class="py-2">
        <div
        id="carouselExampleDark${uniqueId}"
        class="carousel carousel-dark slide pb-5"
        data-bs-ride="carousel"
        >
        <div class="carousel-inner">
        `;

  // console.log(projet.image.length);

  for (let i = 0; i < projet.image.length; i++) {
    if (i == 0) {
      html += `
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img
                            src="${projet.image[i]}"
                            class="d-block w-100"
                            alt=""
                        />
                        <div class="carousel-caption d-none d-md-block"></div>
                    </div>
                    `;
    } else {
      html += `
                    <div class="carousel-item" data-bs-interval="10000">
                        <img
                            src="${projet.image[i]}"
                            class="d-block w-100"
                            alt=""
                        />
                        <div class="carousel-caption d-none d-md-block"></div>
                    </div>
                    `;
    }
  }

  html += `
        </div>
        
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark${uniqueId}"
            data-bs-slide="prev"
        >
            <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
        </button>
        
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark${uniqueId}"
            data-bs-slide="next"
        >
            <span
            class="carousel-control-next-icon"
            aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>

        <p class="fs-1">${projet.titre}</p>
        <p class="fs-4">Technologies:</p>

        <div class="d-flex w-100 align-items-center flex-wrap gap-3">
        `;

  for (let i = 0; i < projet.technologies.length; i++) {
    html += `
            <p>
                <img
                src="${projet.technologies[i].image}"
                alt=""
                height="50px"
                />
            </p>
            `;
  }

  html += `
        </div>
        <p class="fs-4">Description:</p>
        <div class="description">
        <p>
            ${projet.description}
        </p>
        `;
  html += `
            </div>
        </div>
        <hr class="py-2">
        `;

  return html;
}

function generateUniqueId() {
  var timestamp = Date.now().toString(16); // Horodatage en hexadécimal
  var randomNum = Math.random().toString(16).substr(2); // Nombre aléatoire en hexadécimal
  return timestamp + randomNum;
}

$("#menuDesktopMyPersonalInfos").on("click", function(){
  $("#menuDesktopMyPersonalInfos").removeClass("active")
  $("#menuDesktopMySkills").removeClass("active")
  $("#menuDesktopMyProjects").removeClass("active")
  $("#menuDesktopMyContacts").removeClass("active")
  $("#menuMobileMyPersonalInfos").removeClass("active")
  $("#menuMobileMySkills").removeClass("active")
  $("#menuMobileMyProjects").removeClass("active")
  $("#menuMobileMyContacts").removeClass("active")
  $(this).addClass("active");
  $("#menuMobileMyPersonalInfos").addClass("active");
});

$("#menuDesktopMySkills").on("click", function(){
  $("#menuDesktopMyPersonalInfos").removeClass("active")
  $("#menuDesktopMySkills").removeClass("active")
  $("#menuDesktopMyProjects").removeClass("active")
  $("#menuDesktopMyContacts").removeClass("active")
  $("#menuMobileMyPersonalInfos").removeClass("active")
  $("#menuMobileMySkills").removeClass("active")
  $("#menuMobileMyProjects").removeClass("active")
  $("#menuMobileMyContacts").removeClass("active")
  $(this).addClass("active");
  $("#menuMobileMySkills").addClass("active");
});

$("#menuDesktopMyProjects").on("click", function(){
  $("#menuDesktopMyPersonalInfos").removeClass("active")
  $("#menuDesktopMySkills").removeClass("active")
  $("#menuDesktopMyProjects").removeClass("active")
  $("#menuDesktopMyContacts").removeClass("active")
  $("#menuMobileMyPersonalInfos").removeClass("active")
  $("#menuMobileMySkills").removeClass("active")
  $("#menuMobileMyProjects").removeClass("active")
  $("#menuMobileMyContacts").removeClass("active")
  $(this).addClass("active");
  $("#menuMobileMyProjects").addClass("active");
});

$("#menuDesktopMyContacts").on("click", function(){
  $("#menuDesktopMyPersonalInfos").removeClass("active")
  $("#menuDesktopMySkills").removeClass("active")
  $("#menuDesktopMyProjects").removeClass("active")
  $("#menuDesktopMyContacts").removeClass("active")
  $("#menuMobileMyPersonalInfos").removeClass("active")
  $("#menuMobileMySkills").removeClass("active")
  $("#menuMobileMyProjects").removeClass("active")
  $("#menuMobileMyContacts").removeClass("active")
  $(this).addClass("active");
  $("#menuMobileMyContacts").addClass("active");
});


$("#menuMobileMyPersonalInfos").on("click", function(){
  $("#menuDesktopMyPersonalInfos").removeClass("active")
  $("#menuDesktopMySkills").removeClass("active")
  $("#menuDesktopMyProjects").removeClass("active")
  $("#menuDesktopMyContacts").removeClass("active")
  $("#menuMobileMyPersonalInfos").removeClass("active")
  $("#menuMobileMySkills").removeClass("active")
  $("#menuMobileMyProjects").removeClass("active")
  $("#menuMobileMyContacts").removeClass("active")
  $(this).addClass("active");
  $("#menuDesktopMyPersonalInfos").addClass("active");
});

$("#menuMobileMySkills").on("click", function(){
  $("#menuDesktopMyPersonalInfos").removeClass("active")
  $("#menuDesktopMySkills").removeClass("active")
  $("#menuDesktopMyProjects").removeClass("active")
  $("#menuDesktopMyContacts").removeClass("active")
  $("#menuMobileMyPersonalInfos").removeClass("active")
  $("#menuMobileMySkills").removeClass("active")
  $("#menuMobileMyProjects").removeClass("active")
  $("#menuMobileMyContacts").removeClass("active")
  $(this).addClass("active");
  $("#menuDesktopMySkills").addClass("active");
});

$("#menuMobileMyProjects").on("click", function(){
  $("#menuDesktopMyPersonalInfos").removeClass("active")
  $("#menuDesktopMySkills").removeClass("active")
  $("#menuDesktopMyProjects").removeClass("active")
  $("#menuDesktopMyContacts").removeClass("active")
  $("#menuMobileMyPersonalInfos").removeClass("active")
  $("#menuMobileMySkills").removeClass("active")
  $("#menuMobileMyProjects").removeClass("active")
  $("#menuMobileMyContacts").removeClass("active")
  $(this).addClass("active");
  $("#menuDesktopMyProjects").addClass("active");
});

$("#menuMobileMyContacts").on("click", function(){
  $("#menuDesktopMyPersonalInfos").removeClass("active")
  $("#menuDesktopMySkills").removeClass("active")
  $("#menuDesktopMyProjects").removeClass("active")
  $("#menuDesktopMyContacts").removeClass("active")
  $("#menuMobileMyPersonalInfos").removeClass("active")
  $("#menuMobileMySkills").removeClass("active")
  $("#menuMobileMyProjects").removeClass("active")
  $("#menuMobileMyContacts").removeClass("active")
  $(this).addClass("active");
  $("#menuDesktopMyContacts").addClass("active");
});

$("#bouttonLinkedInDiv").on("click", function(){
  // console.group("Hi")
  window.open("https://www.linkedin.com/in/faliana-ranaivoseheno-45488425b/", '_blank');
});

$("#CVButton").on("click", function(){
  // console.group("Hi")
  var link = document.createElement('a');
  link.href = "CV RANAIVOSEHENO Faliana Nirindra v4.pdf";
  link.download = "CV RANAIVOSEHENO Faliana Nirindra v4.pdf";
  link.target = '_blank';
  link.click();
});