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
            "Contenido publicitario para Instagram",

        description:
            "BICHO RARO es una pieza de danza contemporánea que busca reflejar la realidad de una identidad queer mediante el movimiento. La promoción en redes sociales se plantea para dar visibilidad a la pieza, su proceso creativo y el universo visual del proyecto.",

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
            "Diseño de packaging",

        description:
            "Proyecto de diseño de packaging desarrollado a partir de una dirección de arte concreta, trabajando la presentación del producto, la identidad visual y la composición del conjunto.",

        type: "image",

        media:
            "media/img/modal-packaging-01.png"
    },


    {
        id: "packaging-02",

        category: "Packaging",

        title:
            "Identidad y presentación",

        description:
            "Desarrollo gráfico aplicado al packaging y construcción de una propuesta visual coherente con el concepto del proyecto.",

        type: "image",

        media:
            "media/img/modal-packaging-02.png"
    },


    {
        id: "packaging-03",

        category: "Packaging",

        title:
            "Diseño de producto",

        description:
            "Aplicación de recursos gráficos, composición y dirección de arte sobre diferentes elementos de packaging.",

        type: "image",

        media:
            "media/img/modal-packaging-03.png"
    },


    /* ======================================================
       ILUSTRACIÓN
       ====================================================== */

    {
        id: "ilustracion-01",

        category: "Ilustración",

        title:
            "Proyecto de ilustración",

        description:
            "Proyecto de ilustración basado en la experimentación gráfica y la creación de un universo visual propio.",

        type: "image",

        media:
            "media/img/modal-ilustracion-01.png"
    },


    {
        id: "ilustracion-02",

        category: "Ilustración",

        title:
            "Ilustración editorial",

        description:
            "Desarrollo de una propuesta de ilustración aplicada a diferentes soportes y piezas gráficas.",

        type: "image",

        media:
            "media/img/modal-ilustracion-02.png"
    },


    /* ======================================================
       DISEÑO 3D
       ====================================================== */

    {
        id: "3d-01",

        category: "Diseño 3D",

        title:
            "Modelado y render 3D",

        description:
            "Proyecto desarrollado mediante modelado tridimensional, materiales, iluminación y renderizado.",

        type: "image",

        media:
            "media/img/modal-3d-01.png"
    },


    {
        id: "3d-02",

        category: "Diseño 3D",

        title:
            "Animación 3D",

        description:
            "Desarrollo de una pieza audiovisual mediante técnicas de modelado y animación 3D.",

        type: "video",

        media:
            "media/video/proyecto-3d.mp4"
    },


    /* ======================================================
       EDITORIAL
       ====================================================== */

    {
        id: "editorial-01",

        category: "Editorial / Cartelería",

        title:
            "Diseño editorial",

        description:
            "Proyecto editorial desarrollado mediante composición, tipografía, fotografía y dirección de arte.",

        type: "image",

        media:
            "media/img/modal-editorial-01.png"
    },


    {
        id: "editorial-02",

        category: "Editorial / Cartelería",

        title:
            "Cartelería",

        description:
            "Diseño de cartelería y piezas gráficas para comunicar un concepto visual de manera directa.",

        type: "image",

        media:
            "media/img/modal-editorial-02.png"
    },


    {
        id: "editorial-03",

        category: "Editorial / Cartelería",

        title:
            "Proyecto gráfico",

        description:
            "Desarrollo de diferentes piezas gráficas dentro de una misma dirección de arte.",

        type: "image",

        media:
            "media/img/modal-editorial-03.png"
    }

];


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