$(document).ready(() => {
  $(".navbar-nav .nav-link").on("click", function () {
    // Fermer le menu
    $(".navbar-collapse").collapse("hide");
  });

  let frontEnd = [
    {
      title: "HTML",
      image: "assets/img/icons/HTML5_logo_and_wordmark.svg.webp",
    },
    {
      title: "CSS",
      image: "assets/img/icons/CSS3_logo_and_wordmark.webp",
    },
    {
      title: "Javascript",
      image: "assets/img/icons/JavaScript-logo.webp",
    },
    {
      title: "ReactJS",
      image:
        "assets/img/icons/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.webp",
    },
    {
      title: "Bootstrap",
      image: "assets/img/icons/bootstrap-5-logo-icon.webp",
    },
  ];

  let backEnd = [
    {
      title: "PHP",
      image: "assets/img/icons/php-logo.webp",
    },
    {
      title: "NodeJs",
      image: "assets/img/icons/node.webp",
    },
    {
      title: "ExpressJS",
      image: "assets/img/icons/Expressjs.webp",
    },
  ];

  let database = [
    {
      title: "MySQL",
      image: "assets/img/icons/png-clipart-mysql-mysql.webp",
    },
    {
      title: "PostgreSQL",
      image:
        "assets/img/icons/png-transparent-postgresql-logo-computer-software-database-open-source-s-text-head-snout.webp",
    },
    {
      title: "MongoDB",
      image:
        "assets/img/icons/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.webp",
    },
  ];

  let framework = [
    {
      title: "Codigniter3",
      image: "assets/img/icons/1724795.webp",
    },
    {
      title: "Symfony",
      image: "assets/img/icons/symfony_black_03.webp",
    },
  ];

  let autres = [
    {
      title: "Git",
      image: "assets/img/icons/Git-Logo-2Color.webp",
    },
    {
      title: "jQuery",
      image: "assets/img/icons/62a76aadbd73a4af5c5d4fc5.webp",
    },
    {
      title: "Leaflet",
      image: "assets/img/icons/leaflet2903.logowik.webp",
    },
  ];

  let baeloo = {
    image: [
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-33-11 Home.webp",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-33-12 Home.webp",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-33-13 Home.webp",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-35-22 Login.webp",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-36-36 Fiche Sous-Catégorie.webp",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-37-52 Page Sous-Catégorie.webp",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-38-10 SB Admin 2 - Login.webp",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-39-24 Admin.webp",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-39-40 Admin.webp",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-39-56 Admin.webp",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-40-04 Admin.webp",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-40-21 Admin.webp",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-40-37 Admin.webp",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-40-45 Admin.webp",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-40-59 Admin.webp",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-41-05 Admin.webp",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-41-19 Admin.webp",
      "assets/img/baeloo/Screenshot 2023-12-08 at 07-42-48 Admin.webp",
    ],
    technologies: [
      frontEnd[0],
      frontEnd[1],
      frontEnd[2],
      frontEnd[4],
      database[2],
      backEnd[2],
      frontEnd[3],
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
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-01-10 CFIM - Login Page.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-15-11 CFIM - Tableau de bord.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-15-25 CFIM - Tableau de bord.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-16-28 CFIM - Calendrier d'insertion de données.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-19-41 CFIM - Carte.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-19-58 CFIM - Carte.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-21-40 CFIM - Carte.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-22-44 CFIM - Carte.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-23-29 CFIM - Carte.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-25-28 CFIM - Carte.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-29-28 CFIM - Navire.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-29-35 CFIM - Navire.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-30-28 CFIM - Navire.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-30-37 CFIM - Navire.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-30-38 CFIM - Navire.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-33-13 CFIM - Type de Navire.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-33-24 CFIM - Type de Navire.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-33-48 CFIM - Classe de Navire.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-33-53 CFIM - Classe de Navire.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-34-04 CFIM - Mouvement de Navire.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-34-05 CFIM - Mouvement de Navire.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-34-06 CFIM - Mouvement de Navire.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-36-30 CFIM - Mouvement de Navire.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-36-45 CFIM - Mouvement de Navire.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-42-54 CFIM - Couche.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-43-01 CFIM - Couche.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-43-11 CFIM - Utilisateur.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-43-44 CFIM - Utilisateur.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-46-07 CFIM - Fiche Utilisateur.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-46-13 CFIM - Fiche Utilisateur.webp",
      "assets/img/informationsMaritimes/Screenshot 2023-12-08 at 09-46-21 CFIM - Fiche Utilisateur.webp",
    ],
    technologies: [
      frontEnd[0],
      frontEnd[1],
      frontEnd[2],
      frontEnd[4],
      backEnd[0],
      database[0],
      framework[0],
      autres[1],
      autres[2],
    ],
    titre:
      "Suivi du traffic maritimes dans la Zone Economique Exclusive de Madagascar (ZEE)",
    description:
      "Cette plateforme permet aux utilisateurs de faire un suivi du traffic de navires dans les zones maritimes de Madagascar. Il permet en soi d'importer les données issues des plateformes satellitaires exactEarth et SeaVision, d'importer les couches aux alentours du pays, de filter les données de navires selon différents critère, d'avoir un visuel des trajets et de gérer les utilisateurs",
  };

  let worldData = {
    image: [
      "assets/img/worldData/Screenshot 2023-12-08 at 10-32-28 30 Days Of JavaScript Final Projects.webp",
      "assets/img/worldData/Screenshot 2023-12-08 at 10-33-13 30 Days Of JavaScript Final Projects.webp",
      "assets/img/worldData/Screenshot 2023-12-08 at 10-33-32 30 Days Of JavaScript Final Projects.webp",
      "assets/img/worldData/Screenshot 2023-12-08 at 10-34-35 30 Days Of JavaScript Final Projects.webp",
      "assets/img/worldData/Screenshot 2023-12-08 at 10-35-29 30 Days Of JavaScript Final Projects.webp",
      "assets/img/worldData/Screenshot 2023-12-08 at 10-36-31 30 Days Of JavaScript Final Projects.webp",
    ],
    technologies: [
      frontEnd[0],
      frontEnd[1],
      frontEnd[2],
      frontEnd[4],
      autres[1],
    ],
    titre: "Projet de filtrage d'informations",
    description:
      "Il s'agit d'un projet permettant der filtrer les données des pays du monde selon le nom, la capital et la population en utilisant une API en ligne",
  };

  let gestionProduit = {
    image: [
      "assets/img/gestionProduit/Screenshot 2023-12-08 at 10-47-29 Matiere Premiere.webp",
      "assets/img/gestionProduit/Screenshot 2023-12-08 at 10-48-07 Stock matière.webp",
      "assets/img/gestionProduit/Screenshot 2023-12-08 at 10-48-19 Produit.webp",
      "assets/img/gestionProduit/Screenshot 2023-12-08 at 10-48-37 Formule.webp",
      "assets/img/gestionProduit/Screenshot 2023-12-08 at 10-49-04 Fabrication.webp",
      "assets/img/gestionProduit/Screenshot 2023-12-08 at 10-49-17 Fabrication.webp",
    ],
    technologies: [
      frontEnd[0],
      frontEnd[1],
      backEnd[0],
      database[0],
      framework[1],
    ],
    titre: "Gestion de produit et fabrication",
    description:
      "Il s'agit d'une petite application permettant de suivre le processus d'achat à la fabrication d'un produit incluant donc l'achat de matières premières, les mouvements de stock, les formules de fabrications et la fabrication",
  };

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
    let element = $("#frontEndButton");
    if (element.hasClass("collapsed")) {
      element.html(`Front-end <i class="fa fa-chevron-down"></i>`);
    } else {
      element.html(`Front-end <i class="fa fa-chevron-up"></i>`);
    }
  });

  $("#backEndButton").on("click", async () => {
    let html = "";
    let element = $("#backEndButton");
    if (element.hasClass("collapsed")) {
      element.html(`Back-end <i class="fa fa-chevron-down"></i>`);
    } else {
      element.html(`Back-end <i class="fa fa-chevron-up"></i>`);
    }
  });

  $("#databaseButton").on("click", async () => {
    let html = "";
    let element = $("#databaseButton");
    if (element.hasClass("collapsed")) {
      element.html(`Base de données <i class="fa fa-chevron-down"></i>`);
    } else {
      element.html(`Base de données <i class="fa fa-chevron-up"></i>`);
    }
  });

  $("#frameworkButton").on("click", async () => {
    let html = "";
    let element = $("#frameworkButton");
    if (element.hasClass("collapsed")) {
      element.html(`Framework <i class="fa fa-chevron-down"></i>`);
    } else {
      element.html(`Framework <i class="fa fa-chevron-up"></i>`);
    }
  });

  $("#autresButton").on("click", async () => {
    let html = "";
    let element = $("#autresButton");
    if (element.hasClass("collapsed")) {
      element.html(`Autres <i class="fa fa-chevron-down"></i>`);
    } else {
      element.html(`Autres <i class="fa fa-chevron-up"></i>`);
    }
  });
});

function addSkills(title, elementId, skills) {
  let accordionBody = ``;
  for (let i = 0; i < skills.length; i++) {
    accordionBody += `
      <div class="text-center">
          <p>
              <img
              src="${skills[i].image}"
              alt=""
              style="max-height: 100px; max-width: 100%;"
              />
          </p>
          <p class="fs-4" style="color: black">${skills[i].title}</p>
      </div>
    `;
  }

  let html = `<div class="container">
  <div class="accordion" id="accordionExample">
  <div class="accordion-item border-0">

  <div style="background: rgb(39, 56, 76) !important">
      <p role="button" id="${elementId}Button" class="fs-3 w-100 m-0 py-2" data-bs-toggle="collapse" data-bs-target="#collapse${elementId}" aria-expanded="true" aria-controls="collapse${elementId}">
          ${title} <i class="fa fa-chevron-down"></i>
      </p>
  </div>
  
    

    <div id="collapse${elementId}" class="accordion-collapse collapse">
      <div class="accordion-body">
        <div class="d-flex justify-content-around gap-3 p-5 m-5 flex-wrap mb-5 rounded">
        ${accordionBody}
        </div>
      </div>
    </div>
  </div>
  </div>
`;
  //           <div>
  //               <p role="button" class="fs-3 w-100" id="${elementId}Button">
  //                   ${title} <i class="fa fa-chevron-down"></i>
  //               </p>
  //               <div class="row d-flex justify-content-center" id="${elementId}">
  //               <div class="col-md-6">
  //                   <div
  //                   class="d-flex justify-content-around gap-3 bg-white p-5 m-5 flex-wrap shadow p-3 mb-5 rounded"
  //                   >
  //       `;
  // let element = $(`#${elementId}`);
  // for (let i = 0; i < skills.length; i++) {
  //   html += `
  //           <div class="text-center">
  //               <p>
  //                   <img
  //                   src="${skills[i].image}"
  //                   alt=""
  //                   style="max-height: 100px; max-width: 100%;"
  //                   />
  //               </p>
  //               <p class="fs-4" style="color: black">${skills[i].title}</p>
  //           </div>`;
  // }
  // html += `
  //       </div>
  //     </div>
  //    </div>
  //     `;
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
                            class="d-block w-100 img-responsive"
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
                            class="d-block w-100 img-responsive"
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

        <p class="fs-3">${projet.titre}</p>
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

$("#menuDesktopMyPersonalInfos").on("click", function () {
  $("#menuDesktopMyPersonalInfos").removeClass("active");
  $("#menuDesktopMySkills").removeClass("active");
  $("#menuDesktopMyProjects").removeClass("active");
  $("#menuDesktopMyContacts").removeClass("active");
  $("#menuMobileMyPersonalInfos").removeClass("active");
  $("#menuMobileMySkills").removeClass("active");
  $("#menuMobileMyProjects").removeClass("active");
  $("#menuMobileMyContacts").removeClass("active");
  $(this).addClass("active");
  $("#menuMobileMyPersonalInfos").addClass("active");
});

$("#menuDesktopMySkills").on("click", function () {
  $("#menuDesktopMyPersonalInfos").removeClass("active");
  $("#menuDesktopMySkills").removeClass("active");
  $("#menuDesktopMyProjects").removeClass("active");
  $("#menuDesktopMyContacts").removeClass("active");
  $("#menuMobileMyPersonalInfos").removeClass("active");
  $("#menuMobileMySkills").removeClass("active");
  $("#menuMobileMyProjects").removeClass("active");
  $("#menuMobileMyContacts").removeClass("active");
  $(this).addClass("active");
  $("#menuMobileMySkills").addClass("active");
});

$("#menuDesktopMyProjects").on("click", function () {
  $("#menuDesktopMyPersonalInfos").removeClass("active");
  $("#menuDesktopMySkills").removeClass("active");
  $("#menuDesktopMyProjects").removeClass("active");
  $("#menuDesktopMyContacts").removeClass("active");
  $("#menuMobileMyPersonalInfos").removeClass("active");
  $("#menuMobileMySkills").removeClass("active");
  $("#menuMobileMyProjects").removeClass("active");
  $("#menuMobileMyContacts").removeClass("active");
  $(this).addClass("active");
  $("#menuMobileMyProjects").addClass("active");
});

$("#menuDesktopMyContacts").on("click", function () {
  $("#menuDesktopMyPersonalInfos").removeClass("active");
  $("#menuDesktopMySkills").removeClass("active");
  $("#menuDesktopMyProjects").removeClass("active");
  $("#menuDesktopMyContacts").removeClass("active");
  $("#menuMobileMyPersonalInfos").removeClass("active");
  $("#menuMobileMySkills").removeClass("active");
  $("#menuMobileMyProjects").removeClass("active");
  $("#menuMobileMyContacts").removeClass("active");
  $(this).addClass("active");
  $("#menuMobileMyContacts").addClass("active");
});

$("#menuMobileMyPersonalInfos").on("click", function () {
  $("#menuDesktopMyPersonalInfos").removeClass("active");
  $("#menuDesktopMySkills").removeClass("active");
  $("#menuDesktopMyProjects").removeClass("active");
  $("#menuDesktopMyContacts").removeClass("active");
  $("#menuMobileMyPersonalInfos").removeClass("active");
  $("#menuMobileMySkills").removeClass("active");
  $("#menuMobileMyProjects").removeClass("active");
  $("#menuMobileMyContacts").removeClass("active");
  $(this).addClass("active");
  $("#menuDesktopMyPersonalInfos").addClass("active");
});

$("#menuMobileMySkills").on("click", function () {
  $("#menuDesktopMyPersonalInfos").removeClass("active");
  $("#menuDesktopMySkills").removeClass("active");
  $("#menuDesktopMyProjects").removeClass("active");
  $("#menuDesktopMyContacts").removeClass("active");
  $("#menuMobileMyPersonalInfos").removeClass("active");
  $("#menuMobileMySkills").removeClass("active");
  $("#menuMobileMyProjects").removeClass("active");
  $("#menuMobileMyContacts").removeClass("active");
  $(this).addClass("active");
  $("#menuDesktopMySkills").addClass("active");
});

$("#menuMobileMyProjects").on("click", function () {
  $("#menuDesktopMyPersonalInfos").removeClass("active");
  $("#menuDesktopMySkills").removeClass("active");
  $("#menuDesktopMyProjects").removeClass("active");
  $("#menuDesktopMyContacts").removeClass("active");
  $("#menuMobileMyPersonalInfos").removeClass("active");
  $("#menuMobileMySkills").removeClass("active");
  $("#menuMobileMyProjects").removeClass("active");
  $("#menuMobileMyContacts").removeClass("active");
  $(this).addClass("active");
  $("#menuDesktopMyProjects").addClass("active");
});

$("#menuMobileMyContacts").on("click", function () {
  $("#menuDesktopMyPersonalInfos").removeClass("active");
  $("#menuDesktopMySkills").removeClass("active");
  $("#menuDesktopMyProjects").removeClass("active");
  $("#menuDesktopMyContacts").removeClass("active");
  $("#menuMobileMyPersonalInfos").removeClass("active");
  $("#menuMobileMySkills").removeClass("active");
  $("#menuMobileMyProjects").removeClass("active");
  $("#menuMobileMyContacts").removeClass("active");
  $(this).addClass("active");
  $("#menuDesktopMyContacts").addClass("active");
});

$("#bouttonLinkedInDiv").on("click", function () {
  // console.group("Hi")
  window.open(
    "https://www.linkedin.com/in/faliana-ranaivoseheno-45488425b/",
    "_blank"
  );
});

$("#CVButton").on("click", function () {
  // console.group("Hi")
  var link = document.createElement("a");
  link.href = "CV RANAIVOSEHENO Faliana Nirindra v4.pdf";
  link.download = "CV RANAIVOSEHENO Faliana Nirindra v4.pdf";
  link.target = "_blank";
  link.click();
});

$("#myPersonalInfos").hover(function () {
  $("#menuDesktopMyPersonalInfos").removeClass("active");
  $("#menuDesktopMySkills").removeClass("active");
  $("#menuDesktopMyProjects").removeClass("active");
  $("#menuDesktopMyContacts").removeClass("active");
  $("#menuMobileMyPersonalInfos").removeClass("active");
  $("#menuMobileMySkills").removeClass("active");
  $("#menuMobileMyProjects").removeClass("active");
  $("#menuMobileMyContacts").removeClass("active");
  $("#menuMobileMyPersonalInfos").addClass("active");
  $("#menuDesktopMyPersonalInfos").addClass("active");
});

$("#mySkills").hover(function () {
  $("#menuDesktopMyPersonalInfos").removeClass("active");
  $("#menuDesktopMySkills").removeClass("active");
  $("#menuDesktopMyProjects").removeClass("active");
  $("#menuDesktopMyContacts").removeClass("active");
  $("#menuMobileMyPersonalInfos").removeClass("active");
  $("#menuMobileMySkills").removeClass("active");
  $("#menuMobileMyProjects").removeClass("active");
  $("#menuMobileMyContacts").removeClass("active");
  $("#menuMobileMySkills").addClass("active");
  $("#menuDesktopMySkills").addClass("active");
});

$("#myProjects").hover(function () {
  $("#menuDesktopMyPersonalInfos").removeClass("active");
  $("#menuDesktopMySkills").removeClass("active");
  $("#menuDesktopMyProjects").removeClass("active");
  $("#menuDesktopMyContacts").removeClass("active");
  $("#menuMobileMyPersonalInfos").removeClass("active");
  $("#menuMobileMySkills").removeClass("active");
  $("#menuMobileMyProjects").removeClass("active");
  $("#menuMobileMyContacts").removeClass("active");
  $("#menuMobileMyProjects").addClass("active");
  $("#menuDesktopMyProjects").addClass("active");
});

$("#myContacts").hover(function () {
  $("#menuDesktopMyPersonalInfos").removeClass("active");
  $("#menuDesktopMySkills").removeClass("active");
  $("#menuDesktopMyProjects").removeClass("active");
  $("#menuDesktopMyContacts").removeClass("active");
  $("#menuMobileMyPersonalInfos").removeClass("active");
  $("#menuMobileMySkills").removeClass("active");
  $("#menuMobileMyProjects").removeClass("active");
  $("#menuMobileMyContacts").removeClass("active");
  $("#menuMobileMyContacts").addClass("active");
  $("#menuDesktopMyContacts").addClass("active");
});


$("#copyrightYear").html((new Date()).getFullYear());