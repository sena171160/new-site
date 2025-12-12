document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".cta-button");
  const filter = document.querySelector("#region-filter");
  const animalFilter = document.querySelector("#animal-filter");
  const storeCards = document.querySelectorAll(".store-card");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.remove("is-pressed");
      // Force reflow to restart animation if clicked repeatedly
      void btn.offsetWidth;
      btn.classList.add("is-pressed");
      setTimeout(() => btn.classList.remove("is-pressed"), 320);
    });
  });

  const applyFilters = () => {
    const regionValue = filter?.value ?? "all";
    const animalValue = animalFilter?.value ?? "all";

    storeCards.forEach((card) => {
      const region = card.dataset.region;
      const animal = card.dataset.animal;
      const matchRegion = regionValue === "all" || region === regionValue;
      const matchAnimal = animalValue === "all" || animal === animalValue;
      card.hidden = !(matchRegion && matchAnimal);
    });
  };

  if (filter) {
    filter.addEventListener("change", applyFilters);
  }

  if (animalFilter) {
    animalFilter.addEventListener("change", applyFilters);
  }
});
