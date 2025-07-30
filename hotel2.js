

document.addEventListener("DOMContentLoaded", function () {

  const navLinks = document.querySelectorAll("nav a[href^='#']");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });



  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }


  const roomImages = document.querySelectorAll(".room-image");
  const popupOverlay = document.createElement("div");
  popupOverlay.className = "popup-overlay";
  popupOverlay.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center; z-index: 1000; display: none;`;
  const popupImage = document.createElement("img");
  popupImage.style.maxWidth = "90%";
  popupImage.style.maxHeight = "90%";
  popupOverlay.appendChild(popupImage);
  document.body.appendChild(popupOverlay);

  roomImages.forEach(img => {
    this.scr = img; 
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      popupImage.src = this.src;
      popupOverlay.style.display = "flex";
    });
  });
  popupOverlay.addEventListener("click", () => {
    popupOverlay.style.display = "none";
  });
});

document.querySelector(".sub-btn").addEventListener("click", function () {
  const textarea = document.querySelector("textarea[name='message']");
  if (textarea.value.trim() === "") {
    alert("Please enter a message before submitting.");
    return;
  }


  const popup = document.getElementById("popup-message");
  popup.style.display = "block";


  textarea.value = "";

  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
});

document.querySelector(".sign-up").addEventListener("click", function (e) { 

  const name = document.querySelector("input[name='name']").value.trim();
  const email = document.querySelector("input[name='email']").value.trim();
  const number = document.querySelector("input[name='number']").value.trim();

  if (name === "" || email === "" || number === "") {
    alert("Please fill in the all details given before signing up.");
    return;
  }

 
  const popup = document.getElementById("signup-popup");
  popup.style.display = "block";

 
  document.querySelector("form.sign-bar").reset();

  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
});


document.addEventListener("DOMContentLoaded", () => {
  const togglerBtn = document.querySelector(".navbar-toggler");
  const icon = document.getElementById("toggler-icon");
  const navbar = document.getElementById("navbarNav");
  const links = document.querySelectorAll(".nav-link");

  togglerBtn.addEventListener("click", () => {
    setTimeout(() => {
      if (navbar.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    }, 200); 
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992 && navbar.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbar);
        bsCollapse.hide();

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    });
  });
});
