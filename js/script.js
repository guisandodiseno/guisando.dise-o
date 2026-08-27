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