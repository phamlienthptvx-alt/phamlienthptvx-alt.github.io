const year = document.getElementById("year");
const navWrap = document.querySelector(".nav-wrap");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (navWrap) {
  navWrap.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navWrap.removeAttribute("open");
    });
  });

  const desktop = window.matchMedia("(min-width: 841px)");
  const closeOnDesktop = () => {
    if (desktop.matches) {
      navWrap.removeAttribute("open");
    }
  };
  desktop.addEventListener("change", closeOnDesktop);
  closeOnDesktop();
}
