document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".cta-button");
  const filter = document.querySelector("#region-filter");
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

  if (filter) {
    filter.addEventListener("change", (e) => {
      const value = e.target.value;
      storeCards.forEach((card) => {
        const region = card.dataset.region;
        const show = value === "all" || region === value;
        card.hidden = !show;
      });
    });
  }
});
