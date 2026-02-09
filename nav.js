document.addEventListener("DOMContentLoaded", () => {
  const navTargets = document.querySelectorAll("[data-nav]");
  if (!navTargets.length) return;

  fetch("nav.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Navigation konnte nicht geladen werden.");
      }
      return response.text();
    })
    .then((html) => {
      navTargets.forEach((el) => {
        el.innerHTML = html;
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

