/* ==========================================================
   PORTFOLIO — JAVASCRIPT
   ========================================================== */


/* ==========================================================
   01 — REVEAL AL HACER SCROLL
   ========================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("is-visible");

            // Una vez revelado, dejamos de observarlo.
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


/* ==========================================================
   02 — MENÚ MOBILE
   ========================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    // Cerrar menú al pulsar un enlace.
    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });
}


/* ==========================================================
   03 — SCROLL SUAVE PARA ANCLAS
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
   04 — PARALLAX MUY SUTIL EN IMÁGENES
   ========================================================== */

const parallaxImages = document.querySelectorAll(".home-project img");

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    parallaxImages.forEach((image, index) => {

        const speed = 0.015 + index * 0.004;

        image.style.transform =
            `translateY(${scrollY * speed}px) scale(1.02)`;

    });

}, { passive: true });

/* ==========================================================
   06 — HOME INTERACTIVO
   ========================================================== */

const homeSection = document.querySelector(".section-home");
const homeSwitch = document.querySelector("#home-switch");
const homeStickers = document.querySelectorAll(".home-sticker");
const homeVideo = document.querySelector("#home-video");


/* ==========================================================
   CAMBIAR ENTRE LOS DOS ESTADOS
   ========================================================== */

let homeSecondState = false;


if (homeSection && homeSwitch) {

    homeSwitch.addEventListener("click", () => {

        homeSecondState = !homeSecondState;

        homeSection.classList.toggle(
            "is-second-state",
            homeSecondState
        );

        homeSwitch.setAttribute(
            "aria-pressed",
            homeSecondState
        );


        /* -----------------------------------------------
           ACTIVAR / PAUSAR VÍDEO
        ------------------------------------------------ */

        if (homeVideo) {

            if (homeSecondState) {

                homeVideo.currentTime = 0;

                const playPromise = homeVideo.play();

                if (playPromise !== undefined) {
                    playPromise.catch(() => {});
                }

            } else {

                homeVideo.pause();

            }

        }

    });

}


/* ==========================================================
   PEGATINAS ARRASTRABLES
   ========================================================== */

homeStickers.forEach((sticker) => {

    let isDragging = false;

    let startX = 0;
    let startY = 0;

    let startLeft = 0;
    let startTop = 0;

    let moved = false;


    /* ======================================================
       POINTER DOWN
    ====================================================== */

    sticker.addEventListener("pointerdown", (event) => {

        /*
         * Solo permitimos arrastrar en el primer estado.
         *
         * En el segundo estado las pegatinas son botones.
         */

        if (homeSecondState) {
            return;
        }


        event.preventDefault();

        isDragging = true;
        moved = false;

        sticker.setPointerCapture(event.pointerId);


        const rect = sticker.getBoundingClientRect();

        startX = event.clientX;
        startY = event.clientY;

        startLeft = rect.left;
        startTop = rect.top;


        sticker.style.transition = "none";

        sticker.style.cursor = "grabbing";

    });


    /* ======================================================
       POINTER MOVE
    ====================================================== */

    sticker.addEventListener("pointermove", (event) => {

        if (!isDragging) {
            return;
        }


        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;


        if (
            Math.abs(deltaX) > 4 ||
            Math.abs(deltaY) > 4
        ) {
            moved = true;
        }


        let newLeft = startLeft + deltaX;
        let newTop = startTop + deltaY;


        /*
         * Limitar la pegatina dentro de la pantalla.
         */

        const maxLeft =
            window.innerWidth -
            sticker.offsetWidth;

        const maxTop =
            window.innerHeight -
            sticker.offsetHeight;


        newLeft = Math.max(
            0,
            Math.min(newLeft, maxLeft)
        );

        newTop = Math.max(
            0,
            Math.min(newTop, maxTop)
        );


        sticker.style.left = `${newLeft}px`;
        sticker.style.top = `${newTop}px`;

    });


    /* ======================================================
       POINTER UP
    ====================================================== */

    const finishDrag = (event) => {

        if (!isDragging) {
            return;
        }


        isDragging = false;

        sticker.style.cursor = "grab";

        sticker.style.transition = "";


        /*
         * Guardamos la posición como porcentaje.
         *
         * Esto hace que al cambiar ligeramente
         * el tamaño de pantalla no se pierda.
         */

        const rect =
            homeSection.getBoundingClientRect();

        const stickerRect =
            sticker.getBoundingClientRect();


        const left =
            ((stickerRect.left - rect.left) /
            rect.width) * 100;

        const top =
            ((stickerRect.top - rect.top) /
            rect.height) * 100;


        sticker.style.left = `${left}%`;
        sticker.style.top = `${top}%`;


        /*
         * Liberamos el pointer.
         */

        try {
            sticker.releasePointerCapture(
                event.pointerId
            );
        } catch (error) {
            // No pasa nada si ya estaba liberado.
        }

    };


    sticker.addEventListener(
        "pointerup",
        finishDrag
    );

    sticker.addEventListener(
        "pointercancel",
        finishDrag
    );


    /* ======================================================
       EVITAR CLICK DESPUÉS DE ARRASTRAR
    ====================================================== */

    sticker.addEventListener("click", (event) => {

        /*
         * En el primer estado no queremos que una
         * pegatina navegue accidentalmente.
         */

        if (!homeSecondState) {

            event.preventDefault();

            return;
        }

    });


    /*
     * Si el usuario está en el segundo estado,
     * la navegación funciona normalmente.
     */

});

/* ==========================================================
   05 — PREPARACIÓN PARA EL 3D
   ==========================================================

   Más adelante aquí podremos conectar Three.js con el objeto
   exportado desde Cinema 4D (.glb / .gltf).

   Ejemplo de estructura futura:

   import * as THREE from "three";
   import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

   De momento NO cargamos Three.js para mantener la web ligera.
   ========================================================== */
