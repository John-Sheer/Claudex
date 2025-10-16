window.addEventListener("DOMContentLoaded", () => {
  const bbSection = document.querySelector(".gamme.bb");
  const snbSection = document.querySelector(".gamme.snb");

  const boutons = document.querySelectorAll(".filtre button");

  boutons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filtre = btn.textContent.trim().toLowerCase();

      if (filtre.includes("bb")) {
        bbSection.style.display = "block";
        snbSection.style.display = "none";
      } else if (filtre.includes("snb")) {
        bbSection.style.display = "none";
        snbSection.style.display = "block";
      } else {
        bbSection.style.display = "block";
        snbSection.style.display = "block";
      }
    });
  });
});
