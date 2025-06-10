
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //alternar a visibilidade do menu móvel
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
        768: {
      slidesPerView: 2
    },
            1024: {
      slidesPerView: 3
    }
  }

});

    document.getElementById("logo-amanco").onclick = function() {
        window.location.href = "amanco.html";
    };
    document.getElementById("logo-bluekit").onclick = function() {
        window.location.href = "bluekit.html";
    };
    document.getElementById("logo-coral").onclick = function() {
        window.location.href = "coral.html";
    };
    document.getElementById("logo-lorenzetti").onclick = function() {
        window.location.href = "lorenzetti.html";
    };
    document.getElementById("logo-tekbond").onclick = function() {
        window.location.href = "tekbond.html";
    };
    document.getElementById("logo-tigre").onclick = function() {
        window.location.href = "tigre.html";
    };

        document.getElementById("cadastro").onclick = function() {
        window.location.href = "formulario.html";
    };


    
    