/* ==========================================================
   PORTFOLIO — JAVASCRIPT
   ========================================================== */


/* ==========================================================
   01 — REVEAL AL HACER SCROLL
   ========================================================== */

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -60px 0px"
        }
    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

}


/* ==========================================================
   02 — MENÚ MOBILE
   ========================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");


if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* ==========================================================
   03 — SCROLL SUAVE
   ========================================================== */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* ==========================================================
   04 — HOME INTERACTIVO
   ========================================================== */

const homeSection = document.querySelector(".section-home");
const homeSwitch = document.querySelector("#home-switch");
const homeVideo = document.querySelector("#home-video");
const homeStickers = document.querySelectorAll(".home-sticker");

let homeState = 1;


/* ==========================================================
   BOTÓN CIRCULAR
   ========================================================== */

if (homeSwitch && homeSection) {

    homeSwitch.addEventListener("click", () => {

        if (homeState === 1) {

            changeToStateTwo();

        } else {

            changeToStateOne();

        }

    });

}


/* ==========================================================
   CAMBIAR A VERSIÓN 2
   ========================================================== */

function changeToStateTwo() {

    homeState = 2;


    /*
     * CAMBIO INMEDIATO.
     * No hay fade ni transición.
     */

    homeSection.classList.add("state-two");


    /*
     * Reproducir vídeo.
     */

    if (homeVideo) {

        homeVideo.currentTime = 0;

        homeVideo.play().catch(() => {});

    }


    /*
     * Recolocar pegatinas.
     */

    setStateTwoPositions();

}


/* ==========================================================
   CAMBIAR A VERSIÓN 1
   ========================================================== */

function changeToStateOne() {

    homeState = 1;


    /*
     * CAMBIO INMEDIATO.
     */

    homeSection.classList.remove("state-two");


    /*
     * Parar y reiniciar vídeo.
     */

    if (homeVideo) {

        homeVideo.pause();
        homeVideo.currentTime = 0;

    }


    /*
     * Recuperar posición original.
     */

    setStateOnePositions();

}


/* ==========================================================
   POSICIONES VERSIÓN 1
   REFERENCIA: FOTO CON FONDO ROJO
   ========================================================== */

function setStateOnePositions() {

    const positions = {

        /* SOBRE MÍ — verde */
        "sticker-sobre-mi": {
            left: "66.71%",
            top: "75.64%",
            rotate: "8deg"
        },

        /* REDES SOCIALES — huevo */
        "sticker-redes": {
            left: "24.94%",
            top: "66.77%",
            rotate: "-15deg"
        },

        /* PACKAGING — verde */
        "sticker-packaging": {
            left: "67.61%",
            top: "55.02%",
            rotate: "10deg"
        },

        /* ILUSTRACIÓN — figura */
        "sticker-ilustracion": {
            left: "53.06%",
            top: "50.21%",
            rotate: "3deg"
        },

        /* DISEÑO 3D — pixel art */
        "sticker-3d": {
            left: "36.24%",
            top: "45.41%",
            rotate: "-12deg"
        },

        /* EDITORIAL / CARTELERÍA — ajo */
        "sticker-editorial": {
            left: "36.06%",
            top: "73.72%",
            rotate: "-8deg"
        }

    };


    homeStickers.forEach((sticker) => {

        const className = [...sticker.classList].find(
            (className) => positions[className]
        );

        if (!className) return;

        const position = positions[className];

        sticker.style.left = position.left;
        sticker.style.top = position.top;
        sticker.style.right = "auto";
        sticker.style.bottom = "auto";

        sticker.style.transform =
            `translate(-50%, -50%) rotate(${position.rotate})`;

    });

}


/* ==========================================================
   POSICIONES VERSIÓN 2
   REFERENCIA: FOTO CON FONDO AMARILLO
   ========================================================== */

function setStateTwoPositions() {

    const positions = {

        /* SOBRE MÍ — verde */
        "sticker-sobre-mi": {
            left: "68.33%",
            top: "62.50%",
            rotate: "8deg"
        },

        /* REDES SOCIALES — huevo */
        "sticker-redes": {
            left: "25.84%",
            top: "69.34%",
            rotate: "0deg"
        },

        /* PACKAGING — verde */
        "sticker-packaging": {
            left: "82.45%",
            top: "42.52%",
            rotate: "8deg"
        },

        /* ILUSTRACIÓN — figura */
        "sticker-ilustracion": {
            left: "66.11%",
            top: "26.18%",
            rotate: "-8deg"
        },

        /* DISEÑO 3D — pixel art */
        "sticker-3d": {
            left: "22.06%",
            top: "24.79%",
            rotate: "-10deg"
        },

        /* EDITORIAL / CARTELERÍA — ajo */
        "sticker-editorial": {
            left: "43.87%",
            top: "41.45%",
            rotate: "0deg"
        }

    };


    homeStickers.forEach((sticker) => {

        const className = [...sticker.classList].find(
            (className) => positions[className]
        );

        if (!className) return;

        const position = positions[className];

        sticker.style.left = position.left;
        sticker.style.top = position.top;
        sticker.style.right = "auto";
        sticker.style.bottom = "auto";

        sticker.style.transform =
            `translate(-50%, -50%) rotate(${position.rotate})`;

    });

}


/* ==========================================================
   05 — ARRASTRAR PEGATINAS EN VERSIÓN 1
   ========================================================== */

homeStickers.forEach((sticker) => {

    let isDragging = false;

    let startX = 0;
    let startY = 0;

    let initialLeft = 0;
    let initialTop = 0;

    let moved = false;


    /* ======================================================
       POINTER DOWN
       ====================================================== */

    sticker.addEventListener("pointerdown", (event) => {

        /*
         * SOLO se pueden arrastrar en versión 1.
         */

        if (homeState !== 1) return;


        event.preventDefault();

        isDragging = true;
        moved = false;


        sticker.setPointerCapture(event.pointerId);


        const stickerRect =
            sticker.getBoundingClientRect();

        const homeRect =
            homeSection.getBoundingClientRect();


        startX = event.clientX;
        startY = event.clientY;


        initialLeft =
            stickerRect.left -
            homeRect.left;


        initialTop =
            stickerRect.top -
            homeRect.top;


        /*
         * Pasamos la posición a píxeles.
         */

        sticker.style.left =
            `${initialLeft}px`;

        sticker.style.top =
            `${initialTop}px`;

        sticker.style.right = "auto";
        sticker.style.bottom = "auto";


        /*
         * Al comenzar a mover eliminamos la rotación.
         * Así el movimiento sigue exactamente al cursor.
         */

        sticker.style.transform = "none";

    });


    /* ======================================================
       POINTER MOVE
       ====================================================== */

    sticker.addEventListener("pointermove", (event) => {

        if (!isDragging) return;

        if (homeState !== 1) return;


        event.preventDefault();


        const deltaX =
            event.clientX - startX;

        const deltaY =
            event.clientY - startY;


        if (
            Math.abs(deltaX) > 5 ||
            Math.abs(deltaY) > 5
        ) {

            moved = true;

        }


        let newLeft =
            initialLeft + deltaX;

        let newTop =
            initialTop + deltaY;


        const homeRect =
            homeSection.getBoundingClientRect();

        const stickerRect =
            sticker.getBoundingClientRect();


        /*
         * Límites.
         */

        const minLeft =
            -stickerRect.width * 0.2;

        const maxLeft =
            homeRect.width -
            stickerRect.width +
            stickerRect.width * 0.2;


        const minTop =
            -stickerRect.height * 0.2;

        const maxTop =
            homeRect.height -
            stickerRect.height +
            stickerRect.height * 0.2;


        newLeft =
            Math.max(
                minLeft,
                Math.min(maxLeft, newLeft)
            );


        newTop =
            Math.max(
                minTop,
                Math.min(maxTop, newTop)
            );


        sticker.style.left =
            `${newLeft}px`;

        sticker.style.top =
            `${newTop}px`;

    });


    /* ======================================================
       POINTER UP
       ====================================================== */

    sticker.addEventListener("pointerup", (event) => {

        isDragging = false;


        if (
            sticker.hasPointerCapture(
                event.pointerId
            )
        ) {

            sticker.releasePointerCapture(
                event.pointerId
            );

        }

    });


    sticker.addEventListener("pointercancel", () => {

        isDragging = false;

    });


    /* ======================================================
       CLICK
       ====================================================== */

    sticker.addEventListener("click", (event) => {

        /*
         * VERSIÓN 1:
         *
         * NO HACEMOS NAVEGACIÓN.
         *
         * La pegatina solamente se puede arrastrar.
         */

        if (homeState === 1) {

            event.preventDefault();

            return;

        }


        /*
         * VERSIÓN 2:
         *
         * La pegatina funciona como botón.
         */

        if (homeState === 2) {

            const targetId =
                sticker.dataset.target;

            const target =
                document.getElementById(targetId);


            if (!target) return;


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ==========================================================
   DISEÑO 3D — BANDEJA CERRADA / ABIERTA
   ========================================================== */

const diseno3dComposition =
    document.getElementById(
        "diseno3d-composition"
    );

const diseno3dClosed =
    document.getElementById(
        "diseno3d-closed"
    );


if (
    diseno3dComposition &&
    diseno3dClosed
) {

    diseno3dClosed.addEventListener(
        "click",
        () => {

            /*
             * Cambiamos al estado abierto.
             */

            diseno3dComposition.classList.add(
                "is-open"
            );

        }
    );

}


/* ==========================================================
   PROYECTOS — MODAL + CARRUSEL
   ========================================================== */

 
/* ==========================================================
   DATOS DE LOS PROYECTOS
   ========================================================== */

const projectsData = [

    /* ======================================================
       REDES SOCIALES
       ====================================================== */

    {
        id: "redes-01",

        category: "Redes Sociales",

        title:
            "Contenido publicitario de Instagram para BICHO RARO",

        description:
            "BICHO RARO es una pieza de danza contemporánea que busca reflejar la realidad de una identidad queer mediante el movimiento. <br> <br>La promoción en redes sociales se plantea para dar visibilidad a la pieza, su proceso creativo y el universo visual del proyecto. Además de publicitar el merchandising de la pieza con contenido de stories.",

        type: "image",

        media:
            "media/img/rrss-bichoraro.png"
    },


    /* ======================================================
       PACKAGING
       ====================================================== */

    {
        id: "packaging-01",

        category: "Packaging",

        title:
            "Diseño etiqueta de vino para Celler Masroig",

        description:
            "“Más que joven. El vino que, año tras año, vuelve para recordar nuestros orígenes, y que no debemos olvidar las costumbres. Porque el vino es celebración, fiesta y tradición”. <br> <br> Esta propuesta nace con el propósito de ir al centro del vino, reflejar la tradición volviendo a los orígenes. Mediante el visionado de varias fotografías antiguas de la recolecta de la uva, se ha ilustrado desde cero, una reinterpretación de dichas imágenes. Con diferentes texturas y colores que dan personalidad y vida a un escenario tradicional.",

        type: "image",

        media:
            "media/img/vino.png"
    },


    {
        id: "packaging-02",

        category: "Packaging",

        title:
            "Kit Hacer Tu Propia Máscara - Bicho Raro",

        description:
            "Diseño y creación de un Kit para hacer tu propia máscara, pensado para ser parte del merchandising de la pieza Bicho Raro. Se diseñó tanto el formato de la caja como las diferentes ilustraciones para las intrucciones de montaje y el propio packaging siguiendo la identidad visual del solo de danza. ",

        type: "image",

        media:
            "media/img/modal-kit3d.png"
    },


    {
        id: "packaging-03",

        category: "Packaging",

        title:
            "EnLatadas",

        description:
            "¿Cómo hacer para que las legumbres sean más llamativas?. <br> EnLatadas busca fomentar una alimentación saludable y sostenible a través de un packaging innovador y reutilizable. <br> <br> Cada lata cuenta con un personaje único, diseñado en función de los valores nutricionales de la legumbre que representa. Estos personajes no solo aportan personalidad y cohesión al packaging, sino que también comunican de manera visual y atractiva los beneficios de cada alimento.",

        type: "image",

        media:
            "media/img/modal-enlatadas.png"
    },


    /* ======================================================
       ILUSTRACIÓN
       ====================================================== */

    {
        id: "ilustracion-01",

        category: "Ilustración",

        title:
            "Juego Memorias Contigo",

        description:
            "Ilustraciones creadas a partir de recuerdos personalizados según la persona. Se utilizaron tanto para el packaging como para las propias cartas del juego.",

        type: "image",

        media:
            "media/img/modal-ilustracion-01.png"
    },


    {
        id: "ilustracion-02",

        category: "Ilustración",

        title:
            "Lyric Video D'amor Traficante - Ralphie Choo",

        description:
            "Ilustraciones creadas para el lyric vídeo de la canción D'amor Traficante. <br> <br> Tras la escucha de la canción se creó a un persoaje principal llamado Amor que nos va contando los versos de la canción en diferentes escenarios, también creados desde cero, acompañado de la letra. ",

        type: "video",

        media:
            "media/video/lyric-video.mp4"
    },


    /* ======================================================
       DISEÑO 3D
       ====================================================== */

    {
        id: "3d-1",

        category: "Diseño 3D",

        title:
            "Modelado y render 3D Para Spot Publicitario",

        description:
            "Proyecto desarrollado mediante modelado tridimensional, materiales, iluminación y renderizado.",

        type: "video",

        media:
            "media/video/Spot3D.mp4"
    },


    {
        id: "3d-2",

        category: "Diseño 3D",

        title:
            "Modelado y render 3D para Yorokobu",

        description:
            "Para la portada de YOROKOBU, se ha creado en cinma 4D, un mundo imaginario donde tres osos de peluche flotan serenamente en el cielo, llevando al espectador a un universo onírico y nostálgico. <br> <br> La idea de esta escena nace de la fascinación por la suavidad y la ternura de los peluches, elementos que evocan sensaciones de calma y protección. <br> En este entorno flotante, los osos de peluche no solo son figuras entrañables, sino símbolos de un mundo idílico donde la inocencia y la fantasía prevalecen.",

        type: "image",

        media:
            "media/img/modal-yorokobu.png"
    },


    /* ======================================================
       EDITORIAL
       ====================================================== */

    {
        id: "editorial-01",

        category: "Editorial / Cartelería",

        title:
            "Foyetos para la Exposición de Yoshitomo Nara - La Casa Encendida",

        description:
            "Yoshitomo Nara es un artista reconocido por su singular estilo que fusiona la inocencia de la infancia con una carga emocional profunda y compleja, reflejada en sus icónicas figuras de niños y animales. Su trabajo explora temas como la rebeldía, la soledad, el dolor y la introspección, provocando una reflexión íntima en quienes se acercan a su obra. La Casa Encendida, como espacio cultural de vanguardia en Madrid, se erige como el contexto perfecto para albergar una exposición que no solo muestra las piezas de Nara, sino que también invita a los visitantes a sumergirse en su universo personal.",

        type: "image",

        media:
            "media/img/modal-yoshitomo.png"
    },


    {
        id: "editorial-02",

        category: "Editorial / Cartelería",

        title:
            "Revista Y punto.",

        description:
            "Y Punto es una revista independiente que nace como un punto de encuentro entre moda, arte, diseño, música, cine y cultura visual, con una mirada fresca, auténtica y sin filtros. Esta primera edición representa la materialización de un proyecto que busca visibilizar talento emergente y generar una experiencia editorial viva, interactiva y cercana. ",

        type: "image",

        media:
            "media/img/modal-editorial-02.png"
    },


    {
        id: "editorial-03",

        category: "Editorial / Cartelería",

        title:
            "Proyecto editorial GD",

        description:
            "Guisando Diseño es una colección de libros única que celebra el diseño en todas sus facetas: gráfico, moda, interiores y mucho más. Inspirada en la idea de mezclar y “guisar” lo mejor de cada disciplina, esta publicación es un espacio donde la creatividad, la innovación y la funcionalidad se encuentran. Además consta en cada edición de artistas invitados de otro ámbito, ya sea música, danza, pintura...",

        type: "image",

        media:
            "media/img/modal-editorial-03.png"
    }

];


/* ==========================================================
   MODAL DE PROYECTOS
   ========================================================== */

const projectModal =
    document.getElementById("projects-modal");

const projectModalContent =
    document.querySelector(".projects-modal-content");

const projectModalClose =
    document.getElementById("projects-modal-close");

const projectModalMedia =
    document.getElementById("projects-modal-media");

const projectModalCategory =
    document.getElementById("projects-modal-category");

const projectModalTitle =
    document.getElementById("projects-modal-title");

const projectModalDescription =
    document.getElementById("projects-modal-description");

const projectModalPrev =
    document.getElementById("projects-modal-prev");

const projectModalNext =
    document.getElementById("projects-modal-next");


let currentProjectList = [];
let currentProjectIndex = 0;


/* ==========================================================
   ABRIR MODAL
   ========================================================== */

function openProjectModal(projectId) {

    if (!projectModal) return;


    const project =
        projectsData.find(
            (item) => item.id === projectId
        );


    if (!project) {

        console.error(
            "No se encontró el proyecto:",
            projectId
        );

        return;

    }


    /*
     * Proyectos de la misma categoría
     * para el carrusel.
     */

    currentProjectList =
        projectsData.filter(
            (item) =>
                item.category === project.category
        );


    currentProjectIndex =
        currentProjectList.findIndex(
            (item) => item.id === projectId
        );


    renderProject();


    projectModal.classList.add("is-open");

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* ==========================================================
   MOSTRAR PROYECTO
   ========================================================== */

function renderProject() {

    const project =
        currentProjectList[
            currentProjectIndex
        ];


    if (!project) return;

        /* ======================================================
       COLOR DEL MODAL SEGÚN CATEGORÍA
       ====================================================== */

    projectModal.classList.remove(
        "modal-redes",
        "modal-packaging",
        "modal-ilustracion",
        "modal-3d",
        "modal-editorial"
    );

    if (project.category === "Redes Sociales") {

        projectModal.classList.add("modal-redes");

    } else if (project.category === "Packaging") {

        projectModal.classList.add("modal-packaging");

    } else if (project.category === "Ilustración") {

        projectModal.classList.add("modal-ilustracion");

    } else if (project.category === "Diseño 3D") {

        projectModal.classList.add("modal-3d");

    } else if (project.category === "Editorial / Cartelería") {

        projectModal.classList.add("modal-editorial");

    }


    /* ======================================================
       TEXTO
       ====================================================== */

    projectModalCategory.textContent =
        project.category;


    projectModalTitle.textContent =
        project.title;


    projectModalDescription.innerHTML =
        `<p>${project.description}</p>`;


    /* ======================================================
       MEDIA
       ====================================================== */

    projectModalMedia.innerHTML = "";


    if (project.type === "image") {

        const image =
            document.createElement("img");

        image.src = project.media;

        image.alt = project.title;

        image.className =
            "projects-modal-project-image";

        projectModalMedia.appendChild(
            image
        );

    }


    if (project.type === "video") {

        const video =
            document.createElement("video");

        video.src = project.media;

        video.controls = true;

        video.autoplay = true;

        video.loop = true;

        video.playsInline = true;

        video.className =
            "projects-modal-project-video";

        projectModalMedia.appendChild(
            video
        );

    }


    /* ======================================================
       FLECHAS
       ====================================================== */

    const hasCarousel =
        currentProjectList.length > 1;


    projectModalPrev.style.display =
        hasCarousel ? "flex" : "none";


    projectModalNext.style.display =
        hasCarousel ? "flex" : "none";

}


/* ==========================================================
   CERRAR MODAL
   ========================================================== */

function closeProjectModal() {

    if (!projectModal) return;


    projectModal.classList.remove(
        "is-open"
    );


    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );


    /*
     * Parar vídeo al cerrar.
     */

    const video =
        projectModalMedia.querySelector(
            "video"
        );


    if (video) {

        video.pause();

    }

}


/* ==========================================================
   BOTÓN CERRAR
   ========================================================== */

if (projectModalClose) {

    projectModalClose.addEventListener(
        "click",
        closeProjectModal
    );

}


/* ==========================================================
   CLIC FUERA
   ========================================================== */

if (projectModal) {

    projectModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === projectModal
            ) {

                closeProjectModal();

            }

        }
    );

}


/* ==========================================================
   ANTERIOR
   ========================================================== */

if (projectModalPrev) {

    projectModalPrev.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();


            if (
                currentProjectList.length <= 1
            ) return;


            currentProjectIndex--;


            if (
                currentProjectIndex < 0
            ) {

                currentProjectIndex =
                    currentProjectList.length - 1;

            }


            renderProject();

        }
    );

}


/* ==========================================================
   SIGUIENTE
   ========================================================== */

if (projectModalNext) {

    projectModalNext.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();


            if (
                currentProjectList.length <= 1
            ) return;


            currentProjectIndex++;


            if (
                currentProjectIndex >=
                currentProjectList.length
            ) {

                currentProjectIndex = 0;

            }


            renderProject();

        }
    );

}


/* ==========================================================
   TECLADO
   ========================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !projectModal ||
            !projectModal.classList.contains(
                "is-open"
            )
        ) return;


        if (event.key === "Escape") {

            closeProjectModal();

        }


        if (
            event.key === "ArrowLeft" &&
            currentProjectList.length > 1
        ) {

            currentProjectIndex--;


            if (
                currentProjectIndex < 0
            ) {

                currentProjectIndex =
                    currentProjectList.length - 1;

            }


            renderProject();

        }


        if (
            event.key === "ArrowRight" &&
            currentProjectList.length > 1
        ) {

            currentProjectIndex++;


            if (
                currentProjectIndex >=
                currentProjectList.length
            ) {

                currentProjectIndex = 0;

            }


            renderProject();

        }

    }
);


/* ==========================================================
   ELEMENTOS CLICABLES
   ========================================================== */

document
    .querySelectorAll("[data-project]")
    .forEach((element) => {

        element.addEventListener(
            "click",
            (event) => {

                event.preventDefault();
                event.stopPropagation();


                const projectId =
                    element.dataset.project;


                openProjectModal(
                    projectId
                );

            }
        );

    });


/* ==========================================================
   06 — PREPARACIÓN PARA 3D
   ========================================================== */

/*
   Más adelante conectaremos aquí el objeto de Cinema 4D
   mediante Three.js / WebGL.
*/

/* ==========================================================
   07 — RECALCULAR HOME AL CAMBIAR TAMAÑO
   ========================================================== */

window.addEventListener("resize", () => {

    if (homeState === 1) {

        setStateOnePositions();

    } else {

        setStateTwoPositions();

    }

});